import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { LogoMark } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Política de Privacidad — DipleBill',
  description:
    'Cómo DipleBill recopila, usa y protege los datos de tu negocio en su sistema de facturación e inventario.'
};

const LAST_UPDATED = '18 de julio de 2026';

export default function PrivacidadPage() {
  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Volver al inicio
      </Link>

      <article className={styles.card}>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <LogoMark size={44} />
          </div>
          <h1 className={styles.title}>Política de Privacidad</h1>
          <p className={styles.updated}>Última actualización: {LAST_UPDATED}</p>
        </header>

        <section className={styles.section}>
          <h2>1. Introducción</h2>
          <p>
            Esta Política de Privacidad describe cómo DipleBill (&quot;nosotros&quot;) recopila, usa
            y protege la información cuando utilizas nuestra plataforma de facturación e inventario
            (el &quot;Servicio&quot;). Al usar DipleBill aceptas las prácticas aquí descritas, en
            conjunto con nuestros{' '}
            <a href="/terminos">Términos y Condiciones</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Información que recopilamos</h2>
          <ul>
            <li>
              <strong>Datos de la cuenta:</strong> nombre, correo electrónico, contraseña (cifrada)
              y, si te registras con Google, tu identificador y foto de perfil públicos.
            </li>
            <li>
              <strong>Datos de tu organización:</strong> nombre del negocio, teléfono, dirección,
              logo y datos de tus sucursales.
            </li>
            <li>
              <strong>Datos operativos que tú ingresas:</strong> productos, inventarios, clientes,
              proveedores, ventas, facturas, créditos y movimientos de caja. Esta información es de
              tu negocio; nosotros solo la procesamos para prestarte el Servicio.
            </li>
            <li>
              <strong>Datos técnicos:</strong> registros de acceso, dirección IP y datos de uso
              necesarios para operar, asegurar y mejorar la plataforma.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Cómo usamos la información</h2>
          <ul>
            <li>Prestar, mantener y mejorar el Servicio.</li>
            <li>Autenticar tu acceso y el de los usuarios y vendedores que autorices.</li>
            <li>
              Enviarte comunicaciones operativas (avisos de vencimiento de licencia, alertas del
              sistema, soporte).
            </li>
            <li>Prevenir fraude, abuso y garantizar la seguridad de la plataforma.</li>
            <li>Cumplir obligaciones legales aplicables.</li>
          </ul>
          <p>
            <strong>No vendemos tu información</strong> ni la de tus clientes a terceros, ni la
            usamos con fines publicitarios ajenos al Servicio.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Aislamiento entre organizaciones</h2>
          <p>
            Cada organización opera de forma lógicamente aislada: los datos de un negocio no son
            accesibles por otro. Aplicamos controles de acceso por organización en todas las
            operaciones de la plataforma.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Con quién compartimos datos</h2>
          <p>
            Solo compartimos datos con proveedores de infraestructura estrictamente necesarios para
            operar el Servicio (alojamiento, base de datos, correo transaccional), sujetos a
            obligaciones de confidencialidad, y cuando la ley lo exija ante autoridad competente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Conservación de datos</h2>
          <p>
            Conservamos tu información mientras tu cuenta esté activa o mientras sea necesario para
            prestarte el Servicio. Si tu licencia vence, tus datos se conservan (no se eliminan) para
            que puedas retomar al renovar. Puedes solicitar la eliminación definitiva escribiendo a
            soporte.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Seguridad</h2>
          <ul>
            <li>Las contraseñas y PINs se almacenan cifrados (hash), nunca en texto plano.</li>
            <li>El acceso a la plataforma se realiza mediante autenticación por token.</li>
            <li>
              Realizamos respaldos periódicos de la base de datos para proteger la continuidad de tu
              información.
            </li>
          </ul>
          <p>
            Ningún sistema es 100% infalible, pero aplicamos medidas razonables acordes al riesgo.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Tus derechos</h2>
          <p>
            Puedes acceder, corregir o actualizar los datos de tu organización desde el panel en
            cualquier momento, y solicitar la exportación o eliminación de tu información
            contactando a soporte.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Datos de terceros que tú ingresas</h2>
          <p>
            Al registrar datos de tus clientes o proveedores en DipleBill, eres responsable de
            contar con la base legal para tratarlos. Nosotros actuamos como encargados del
            tratamiento por cuenta tuya, únicamente para prestarte el Servicio.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta Política ocasionalmente. Publicaremos la versión vigente en esta
            página con su fecha de última actualización. El uso continuado del Servicio implica su
            aceptación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contacto</h2>
          <p>
            Para ejercer tus derechos o resolver dudas sobre privacidad, escríbenos a{' '}
            <a href="mailto:hola@diplebill.com">hola@diplebill.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
