import React from 'react';
import styles from './page.module.css';
import RegistrationForm from '@/components/RegistrationForm';
import Link from 'next/link';
import { LogoMark } from '@/components/Logo';

export default function RegistroPage() {
  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Volver al inicio
      </Link>
      
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <LogoMark size={48} />
          </div>
          <div className={styles.badge}>Prueba Gratuita de 14 Días</div>
          <h1 className={styles.title}>Comienza con DipleBill</h1>
          <p className={styles.subtitle}>Crea tu cuenta y empieza a facturar hoy mismo. No se requiere tarjeta de crédito.</p>
        </div>
        
        <RegistrationForm />
      </div>
    </main>
  );
}
