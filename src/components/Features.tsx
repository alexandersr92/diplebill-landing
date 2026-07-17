import React from 'react';
import styles from './Features.module.css';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  data: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {data.items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <span className={styles.number}>{String(idx + 1).padStart(2, '0')}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
