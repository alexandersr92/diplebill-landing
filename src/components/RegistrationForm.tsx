'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './RegistrationForm.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const DEVICE_NAME = 'landing-web';

interface GoogleCredentialResponse {
  credential?: string;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: object) => void;
          renderButton: (parent: HTMLElement, options: object) => void;
        };
      };
    };
  }
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirm: '',
    store_name: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Google devuelve un ID token (credential); el backend lo valida y crea la cuenta
  const handleGoogleCredential = useCallback(async (response: GoogleCredentialResponse) => {
    if (!response.credential) return;
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/api/v1/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          token: response.credential,
          device_name: DEVICE_NAME,
          trial: true
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || 'No pudimos completar el registro con Google. Intenta nuevamente.');
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No pudimos conectar con el servidor. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;

    const renderGoogleButton = () => {
      if (!window.google || !googleButtonRef.current) return;
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleCredential
      });
      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: 'outline',
        size: 'large',
        text: 'continue_with',
        locale: 'es',
        width: 380
      });
    };

    if (window.google) {
      renderGoogleButton();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = renderGoogleButton;
    document.head.appendChild(script);
  }, [handleGoogleCredential]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirm) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/v1/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          device_name: DEVICE_NAME,
          trial: true // Flag para activar los 14 días de prueba
        })
      });

      if (!response.ok) {
        // El backend puede devolver errores no-JSON (proxy caído, error 500 en HTML)
        const data = await response.json().catch(() => null);
        const firstFieldError =
          data?.errors && typeof data.errors === 'object'
            ? (Object.values(data.errors).flat() as string[])[0]
            : null;
        throw new Error(firstFieldError || data?.message || 'Ha ocurrido un error durante el registro. Intenta nuevamente.');
      }

      setIsSuccess(true);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'No pudimos conectar con el servidor. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:5173';

    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>¡Cuenta Creada!</h3>
        <p className={styles.successText}>
          Tu cuenta ha sido creada exitosamente con 14 días de prueba gratuitos.<br/>
          Ya puedes acceder al panel de administración.
        </p>
        <a href={adminUrl} className={styles.loginButton}>
          Ir al Inicio de Sesión
        </a>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {GOOGLE_CLIENT_ID && (
        <>
          <div ref={googleButtonRef} className={styles.googleButtonSlot} />
          <div className={styles.divider}>
            <span>o regístrate con tu correo</span>
          </div>
        </>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <div className={styles.errorAlert}>{error}</div>}

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Nombre Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="store_name" className={styles.label}>Nombre de tu Negocio</label>
          <input
            type="text"
            id="store_name"
            name="store_name"
            className={styles.input}
            placeholder="Mi Tienda S.A."
            value={formData.store_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="juan@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password_confirm" className={styles.label}>Confirmar Contraseña</label>
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            className={styles.input}
            placeholder="••••••••"
            value={formData.password_confirm}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? 'Creando cuenta...' : 'Crear Cuenta y Empezar Trial'}
        </button>

        <p className={styles.terms}>
          Al crear tu cuenta aceptas nuestros términos de servicio y política de privacidad.
        </p>
      </form>
    </div>
  );
}
