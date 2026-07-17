import React from 'react';
import styles from './Nav.module.css';
import Link from 'next/link';
import Logo from './Logo';

interface NavProps {
  data: {
    logo: string;
    links: { label: string; href: string }[];
    loginBtn: { label: string; href: string };
    registerBtn: { label: string; href: string };
  };
}

export default function Nav({ data }: NavProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Logo size={36} />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          {data.links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link href={data.loginBtn.href} className="btn btn-secondary">
            {data.loginBtn.label}
          </Link>
          <Link href={data.registerBtn.href} className="btn btn-primary">
            {data.registerBtn.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}
