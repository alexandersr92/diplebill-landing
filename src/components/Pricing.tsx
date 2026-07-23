'use client';

import React, { useState } from 'react';
import styles from './Pricing.module.css';
import Link from 'next/link';

interface Plan {
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  isPopular?: boolean;
  features: string[];
  cta: string;
  href?: string;
}

interface PricingProps {
  data: {
    title: string;
    subtitle: string;
    plans: Plan[];
  };
}

type Cycle = 'monthly' | 'annual';

const formatPrice = (value: number) => `C$${value.toLocaleString('en-US')}`;

export default function Pricing({ data }: PricingProps) {
  const [cycle, setCycle] = useState<Cycle>('monthly');

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        {/* Toggle Mensual / Anual */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              gap: '4px',
              padding: '4px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            {(['monthly', 'annual'] as Cycle[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCycle(c)}
                style={{
                  cursor: 'pointer',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: cycle === c ? '#0b1020' : 'inherit',
                  background: cycle === c ? '#8fb2f9' : 'transparent',
                  transition: 'all .15s',
                }}
              >
                {c === 'monthly' ? 'Mensual' : 'Anual'}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {data.plans.map((plan, idx) => {
            const price = cycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
            const saving = plan.priceMonthly * 12 - plan.priceAnnual;
            return (
              <div
                key={idx}
                className={`${styles.card} glass-panel ${plan.isPopular ? styles.popular : ''}`}
              >
                {plan.isPopular && <div className={styles.badge}>Más Popular</div>}

                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{formatPrice(price)}</span>
                  <span className={styles.period}>{cycle === 'annual' ? '/ año' : '/ mes'}</span>
                </div>
                {cycle === 'annual' && saving > 0 && (
                  <p
                    style={{
                      margin: '-0.5rem 0 0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#34D399',
                    }}
                  >
                    Ahorras {formatPrice(saving)} al año
                  </p>
                )}

                <ul className={styles.featureList}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <span className={styles.check}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href || '/registro'}
                  className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} ${styles.btnFull}`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
