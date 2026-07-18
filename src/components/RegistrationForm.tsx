'use client';

import React, { useEffect, useState } from 'react';
import styles from './RegistrationForm.module.css';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:5173';
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const DEVICE_NAME = 'landing-web';

interface GoogleTokenResponse {
  access_token?: string;
  error?: string;
  error_description?: string;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: GoogleTokenResponse) => void;
          }) => { requestAccessToken: () => void };
        };
      };
    };
  }
}

/** Entra al panel ya autenticado; main.tsx del admin persiste el token de la URL */
function redirectToAdmin(token: string | undefined) {
  if (token) {
    window.location.href = `${ADMIN_URL}/?token=${encodeURIComponent(token)}`;
    return true;
  }
  return false;
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
  const [googleReady, setGoogleReady] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;

    if (window.google) {
      setGoogleReady(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => setGoogleReady(true);
    document.head.appendChild(script);
  }, []);

  // El backend valida un access token de Google (igual que el login del panel)
  const submitGoogleToken = async (accessToken: string) => {
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
          token: accessToken,
          device_name: DEVICE_NAME,
          trial: true
        })
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || 'No pudimos completar el registro con Google. Intenta nuevamente.');
      }

      if (!redirectToAdmin(data?.token || data?.data?.token)) {
        setIsSuccess(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No pudimos conectar con el servidor. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleClick = () => {
    if (!GOOGLE_CLIENT_ID || !window.google) return;

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'email profile openid',
      callback: (response) => {
        if (response.error) {
          setError(response.error_description || 'No se pudo completar la autenticación con Google.');
          return;
        }
        if (response.access_token) {
          submitGoogleToken(response.access_token);
        }
      }
    });

    client.requestAccessToken();
  };

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

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const firstFieldError =
          data?.errors && typeof data.errors === 'object'
            ? (Object.values(data.errors).flat() as string[])[0]
            : null;
        throw new Error(firstFieldError || data?.message || 'Ha ocurrido un error durante el registro. Intenta nuevamente.');
      }

      if (!redirectToAdmin(data?.data?.token || data?.token)) {
        setIsSuccess(true);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'No pudimos conectar con el servidor. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>¡Cuenta Creada!</h3>
        <p className={styles.successText}>
          Tu cuenta ha sido creada exitosamente con 14 días de prueba gratuitos.<br/>
          Ya puedes acceder al panel de administración.
        </p>
        <a href={ADMIN_URL} className={styles.loginButton}>
          Ir al Inicio de Sesión
        </a>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {GOOGLE_CLIENT_ID && (
        <>
          <button
            type="button"
            className={styles.googleButton}
            onClick={handleGoogleClick}
            disabled={!googleReady || isLoading}
          >
            <svg className={styles.googleIcon} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {isLoading ? 'Conectando...' : 'Continuar con Google'}
          </button>

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
