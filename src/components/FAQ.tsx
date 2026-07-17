import React from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
}

export default function FAQ({ data }: FAQProps) {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.list}>
          {data.items.map((item, idx) => (
            <details key={idx} className={`${styles.item} glass-panel`}>
              <summary className={styles.question}>
                {item.question}
                <span className={styles.chevron}>▾</span>
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
