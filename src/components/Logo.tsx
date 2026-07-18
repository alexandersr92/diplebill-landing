import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: number;
}

/**
 * Los archivos oficiales de marca viven en /public:
 *  - logo-horizontal.png → isotipo + wordmark (fondos claros)
 *  - logo-mark.png       → isotipo solo
 * El favicon es src/app/icon.png. Para actualizar el logo, reemplaza esos archivos.
 */

const MARK_RATIO = 236 / 256;
const HORIZONTAL_RATIO = 952 / 240;

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png"
      width={Math.round(size * MARK_RATIO)}
      height={size}
      alt=""
    />
  );
}

export default function Logo({ variant = 'dark', size = 34 }: LogoProps) {
  if (variant === 'dark') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-horizontal.png"
        width={Math.round(size * HORIZONTAL_RATIO)}
        height={size}
        alt="DipleBill"
      />
    );
  }

  // Variante clara: isotipo oficial + wordmark en texto con colores legibles
  // sobre fondo oscuro (el wordmark azul del logo se pierde sobre tinta).
  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}
      aria-label="DipleBill"
    >
      <LogoMark size={size} />
      <span style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
        <span style={{ color: '#8FB2F9' }}>Diple</span>
        <span style={{ color: '#B39DF2' }}>Bill</span>
      </span>
    </span>
  );
}
