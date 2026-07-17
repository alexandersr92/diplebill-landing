import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: number;
}

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dbGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M6 2h28c16.6 0 28 12.4 28 28S50.6 62 34 62H6V2z" fill="url(#dbGrad)" />
      <path d="M20 12h20l8 8v32H20V12z" fill="#FFFFFF" />
      <path d="M40 12l8 8h-8v-8z" fill="#D8CBF7" />
      <text
        x="34"
        y="31"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="url(#dbGrad)"
      >
        $
      </text>
      <rect x="26" y="36" width="16" height="3.2" rx="1.6" fill="#7C3AED" />
      <rect x="26" y="42" width="16" height="3.2" rx="1.6" fill="#7C3AED" />
    </svg>
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
