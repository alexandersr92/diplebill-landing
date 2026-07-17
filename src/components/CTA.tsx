import React from 'react';
import styles from './CTA.module.css';
import Link from 'next/link';

interface CTAProps {
  data: {
    title: string;
    subtitle: string;
    button: { label: string; href: string };
    note: string;
  };
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className={styles.ctaSection}>
      <div className={`${styles.panel} glass-panel`}>
        <div className={styles.glow} />
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.subtitle}>{data.subtitle}</p>
        <Link href={data.button.href} className={`btn btn-primary ${styles.bigButton}`}>
          {data.button.label}
        </Link>
        <p className={styles.note}>{data.note}</p>
      </div>
    </section>
  );
}
