import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { LogoMark } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Términos y Condiciones — DipleBill',
  description:
    'Términos y condiciones de uso de DipleBill, el sistema de facturación e inventario para negocios que crecen.'
};

const LAST_UPDATED = '17 de julio de 2026';

export default function TerminosPage() {
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
          <h1 className={styles.title}>Términos y Condiciones</h1>
          <p className={styles.updated}>Última actualización: {LAST_UPDATED}</p>
        </header>

        <section className={styles.section}>
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al registrarte o utilizar DipleBill (el &quot;Servicio&quot;), aceptas estos Términos y
            Condiciones. Si no estás de acuerdo con alguna parte, no debes usar el Servicio. El
            Servicio es operado por DipleBill (&quot;nosotros&quot;).
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Descripción del servicio</h2>
          <p>
            DipleBill es una plataforma de facturación, control de inventario, punto de venta,
            créditos a clientes, control de caja y reportes, accesible vía web y aplicaciones
            complementarias (panel de administración, punto de venta para cajeros y aplicación
            móvil).
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Cuentas y responsabilidad del usuario</h2>
          <ul>
            <li>
              Debes proporcionar información veraz al registrarte y mantener la confidencialidad de
              tus credenciales (correo, contraseña y PINs de vendedores).
            </li>
            <li>
              Eres responsable de toda la actividad realizada desde tu cuenta y de la gestión de los
              accesos que otorgues a tus colaboradores (usuarios, roles y vendedores).
            </li>
            <li>
              La información fiscal y comercial que registres (facturas, precios, impuestos,
              clientes) es tu responsabilidad; DipleBill es una herramienta de gestión y no
              sustituye tus obligaciones fiscales o contables.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Período de prueba y licencia de uso</h2>
          <ul>
            <li>
              Al crear tu organización recibes una <strong>licencia de prueba gratuita de 14
              días</strong> con acceso a las funciones de la plataforma, sin requerir tarjeta de
              crédito.
            </li>
            <li>
              El acceso al Servicio funciona mediante <strong>licencias por días</strong>. Al
              agotarse los días de tu licencia, el acceso a la plataforma se pausa hasta su
              renovación. Tus datos se conservan y vuelven a estar disponibles al renovar.
            </li>
            <li>
              Las licencias no son transferibles entre organizaciones y su renovación se coordina
              con el equipo de DipleBill.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Pagos y renovaciones</h2>
          <p>
            Los precios, planes y formas de pago vigentes se comunican en nuestro sitio o
            directamente por nuestro equipo. Los pagos por licencias no son reembolsables una vez
            acreditados los días correspondientes, salvo que la ley aplicable disponga lo contrario.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Tus datos y privacidad</h2>
          <ul>
            <li>
              Los datos que registras en la plataforma (productos, clientes, ventas, inventarios)
              son de tu propiedad. Nosotros los procesamos únicamente para prestarte el Servicio.
            </li>
            <li>
              Aplicamos medidas razonables de seguridad para proteger tu información. No vendemos
              tus datos a terceros.
            </li>
            <li>
              Si cierras tu cuenta definitivamente, puedes solicitar la eliminación de tus datos
              contactando a soporte.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Uso aceptable</h2>
          <p>Está prohibido utilizar el Servicio para:</p>
          <ul>
            <li>Actividades ilícitas o fraudulentas, incluida la emisión de comprobantes falsos.</li>
            <li>
              Intentar vulnerar la seguridad de la plataforma, acceder a datos de otras
              organizaciones o revender el Servicio sin autorización.
            </li>
            <li>Sobrecargar o interferir deliberadamente con la infraestructura del Servicio.</li>
          </ul>
          <p>El incumplimiento puede resultar en la suspensión o cierre de la cuenta.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Disponibilidad del servicio</h2>
          <p>
            Trabajamos para mantener el Servicio disponible de forma continua, pero no garantizamos
            disponibilidad ininterrumpida (mantenimientos, fallas de terceros o causas de fuerza
            mayor). Algunas funciones, como el modo offline del punto de venta, están diseñadas para
            mitigar interrupciones de internet; las operaciones realizadas sin conexión se
            sincronizan al restablecerse y quedan sujetas a validación del servidor.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Propiedad intelectual</h2>
          <p>
            El software, la marca, los diseños y el contenido de DipleBill nos pertenecen o están
            debidamente licenciados. Estos términos no te transfieren ningún derecho de propiedad
            sobre la plataforma, solo una licencia de uso limitada, revocable y no exclusiva
            mientras tu licencia esté vigente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Limitación de responsabilidad</h2>
          <p>
            El Servicio se ofrece &quot;tal cual&quot;. En la máxima medida permitida por la ley, no
            somos responsables por lucro cesante, pérdida de datos atribuible a mal uso de la
            cuenta, decisiones comerciales basadas en la información de la plataforma, ni daños
            indirectos derivados del uso o imposibilidad de uso del Servicio.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Suspensión y terminación</h2>
          <p>
            Puedes dejar de usar el Servicio en cualquier momento. Podemos suspender o terminar el
            acceso ante incumplimientos de estos términos o requerimientos legales. En caso de
            terminación, te facilitaremos un período razonable para exportar tu información.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Cambios a estos términos</h2>
          <p>
            Podemos actualizar estos términos ocasionalmente. Publicaremos la versión vigente en
            esta página indicando la fecha de última actualización. El uso continuado del Servicio
            después de un cambio implica su aceptación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Contacto</h2>
          <p>
            Para dudas sobre estos términos o sobre el Servicio, escríbenos a{' '}
            <a href="mailto:hola@diplebill.com">hola@diplebill.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
