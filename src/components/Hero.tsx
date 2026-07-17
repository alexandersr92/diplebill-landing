import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

interface HeroProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    cta1: { label: string; href: string };
    cta2: { label: string; href: string };
    image: string;
  };
}

const TICKER_ITEMS = [
  'Facturación',
  'Cierre de Caja',
  'Créditos',
  'Inventarios',
  'Sucursales',
  'Vendedores',
  'Usuarios',
  'Reportes',
  'WooCommerce',
  'App Móvil',
];

export default function Hero({ data }: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {data.badge}
          </div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <div className={styles.actions}>
            <Link href={data.cta1.href} className="btn btn-primary">
              {data.cta1.label}
            </Link>
            <Link href={data.cta2.href} className="btn btn-secondary">
              {data.cta2.label}
            </Link>
          </div>
          <p className={styles.meta}>14 días gratis · Sin tarjeta de crédito · Precios en córdobas</p>
        </div>

        <div className={styles.receiptWrapper}>
          <div className={styles.receipt}>
            <div className={styles.receiptHeader}>
              <span className={styles.receiptLogo}>DIPLEBILL POS</span>
              <span>FACTURA #000482</span>
              <span>SUCURSAL CENTRO — CAJA 2</span>
            </div>
            <div className={styles.receiptDivider} />
            <div className={styles.receiptRow}><span>CAFE MOLIDO 500G</span><span>C$310.00</span></div>
            <div className={styles.receiptRow}><span>AZUCAR 2KG</span><span>C$117.00</span></div>
            <div className={styles.receiptRow}><span>LECHE ENTERA 1L x3</span><span>C$198.00</span></div>
            <div className={styles.receiptRow}><span>JABON DE BAÑO x2</span><span>C$86.00</span></div>
            <div className={styles.receiptDivider} />
            <div className={`${styles.receiptRow} ${styles.receiptTotal}`}>
              <span>TOTAL</span><span>C$711.00</span>
            </div>
            <div className={styles.receiptRow}><span>EFECTIVO</span><span>C$800.00</span></div>
            <div className={styles.receiptRow}><span>CAMBIO</span><span>C$89.00</span></div>
            <div className={styles.receiptDivider} />
            <div className={styles.receiptFooter}>*** GRACIAS POR SU COMPRA ***</div>
            <div className={styles.barcode} />
          </div>
          <div className={styles.stamp}>PAGADO</div>
        </div>
      </div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerInner}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span key={idx} className={styles.tickerItem}>
              {item} <span className={styles.tickerStar}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
