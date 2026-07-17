import React from 'react';
import styles from './Pricing.module.css';
import Link from 'next/link';

interface Plan {
  name: string;
  price: string;
  period: string;
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

export default function Pricing({ data }: PricingProps) {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {data.plans.map((plan, idx) => (
            <div
              key={idx}
              className={`${styles.card} glass-panel ${plan.isPopular ? styles.popular : ''}`}
            >
              {plan.isPopular && <div className={styles.badge}>Más Popular</div>}
              
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <span className={styles.check}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={plan.href || '/registro'} className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} ${styles.btnFull}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
