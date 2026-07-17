import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Logo from './Logo';

interface SocialLink {
  name: string;
  url: string;
}

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  data: {
    description: string;
    columns: FooterColumn[];
    contact: {
      title: string;
      email: string;
      whatsapp: string;
    };
    copyright: string;
    socials: SocialLink[];
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <Logo variant="light" size={38} />
            </span>
            <p className={styles.tagline}>Factura. Gestiona. Crece.</p>
            <p className={styles.description}>{data.description}</p>
          </div>

          {data.columns.map((column, idx) => (
            <div key={idx} className={styles.column}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <ul className={styles.linkList}>
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{data.contact.title}</h4>
            <ul className={styles.linkList}>
              <li>
                <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              </li>
              <li>
                <a href={`https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
                  WhatsApp: {data.contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{data.copyright}</p>
          <div className={styles.socials}>
            {data.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
