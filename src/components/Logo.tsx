import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: number;
}

/**
 * El isotipo vive en /public/logo.svg — para cambiar el logo en todo el
 * sitio basta con reemplazar ese archivo (y src/app/icon.svg, el favicon).
 */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.svg" width={size} height={size} alt="" />
  );
}

export default function Logo({ variant = 'dark', size = 34 }: LogoProps) {
  const dipleColor = variant === 'dark' ? '#2563EB' : '#8FB2F9';
  const billColor = variant === 'dark' ? '#7C3AED' : '#B39DF2';

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}
      aria-label="DipleBill"
    >
      <LogoMark size={size} />
      <span style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
        <span style={{ color: dipleColor }}>Diple</span>
        <span style={{ color: billColor }}>Bill</span>
      </span>
    </span>
  );
}
