import React from 'react';
import styles from './FeatureShowcase.module.css';

interface ShowcaseBlock {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visual: string;
}

interface FeatureShowcaseProps {
  data: {
    title: string;
    subtitle: string;
    blocks: ShowcaseBlock[];
  };
}

function InvoiceVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.ticket}>
        <div className={styles.ticketHeader}>
          <strong>DIPLEBILL POS</strong>
          <span>TICKET #00931</span>
        </div>
        <div className={styles.ticketRow}><span>Café molido 500g</span><span>C$310.00</span></div>
        <div className={styles.ticketRow}><span>Azúcar 2kg</span><span>C$117.00</span></div>
        <div className={styles.ticketRow}><span>Leche entera 1L ×3</span><span>C$198.00</span></div>
        <div className={styles.ticketDivider} />
        <div className={`${styles.ticketRow} ${styles.ticketTotal}`}><span>TOTAL</span><span>C$625.00</span></div>
        <div className={styles.ticketStatus}>
          <span className={styles.offlineDot} /> Modo offline — se sincronizará
        </div>
      </div>
    </div>
  );
}

function CreditVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.listCard}>
        <div className={styles.listHeader}>Cuentas por cobrar</div>
        <div className={styles.listRow}>
          <span>María López</span>
          <span className={styles.amountDue}>C$4,400.00</span>
        </div>
        <div className={styles.progressTrack}><div className={styles.progressBar} style={{ width: '65%' }} /></div>
        <div className={styles.listRow}>
          <span>Comercial Ruiz</span>
          <span className={styles.amountDue}>C$11,350.00</span>
        </div>
        <div className={styles.progressTrack}><div className={styles.progressBar} style={{ width: '30%' }} /></div>
        <div className={styles.listRow}>
          <span>Pedro Gómez</span>
          <span className={styles.amountPaid}>Pagado ✓</span>
        </div>
        <div className={styles.progressTrack}><div className={styles.progressBar} style={{ width: '100%' }} /></div>
      </div>
    </div>
  );
}

function InventoryVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.listCard}>
        <div className={styles.listHeader}>Existencias por almacén</div>
        <div className={styles.tableHead}>
          <span>Producto</span><span>Central</span><span>Tienda</span>
        </div>
        <div className={styles.tableRow}><span>Arroz 5kg</span><span>240</span><span>36</span></div>
        <div className={styles.tableRow}><span>Aceite 1L</span><span>118</span><span>22</span></div>
        <div className={styles.tableRow}>
          <span>Harina 2kg</span><span>64</span><span className={styles.lowStock}>3 ⚠</span>
        </div>
        <div className={styles.transferTag}>↔ Transferencia: Central → Tienda (12 uds.)</div>
      </div>
    </div>
  );
}

function BranchesVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.branchGrid}>
        <div className={styles.branchCard}>
          <span className={styles.branchName}>Sucursal Centro</span>
          <span className={styles.branchSales}>C$45,300</span>
          <span className={styles.branchLabel}>ventas hoy</span>
        </div>
        <div className={styles.branchCard}>
          <span className={styles.branchName}>Sucursal Norte</span>
          <span className={styles.branchSales}>C$31,500</span>
          <span className={styles.branchLabel}>ventas hoy</span>
        </div>
        <div className={styles.branchCard}>
          <span className={styles.branchName}>Sucursal Plaza</span>
          <span className={styles.branchSales}>C$72,200</span>
          <span className={styles.branchLabel}>ventas hoy</span>
        </div>
        <div className={`${styles.branchCard} ${styles.branchTotal}`}>
          <span className={styles.branchName}>Total del negocio</span>
          <span className={styles.branchSales}>C$149,000</span>
          <span className={styles.branchLabel}>en tiempo real</span>
        </div>
      </div>
    </div>
  );
}

function SellersVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.listCard}>
        <div className={styles.listHeader}>Ranking de vendedores — Julio</div>
        <div className={styles.sellerRow}>
          <span className={styles.sellerRank}>1</span>
          <span className={styles.sellerName}>Ana Castillo</span>
          <span className={styles.sellerAmount}>C$304,500</span>
        </div>
        <div className={styles.sellerRow}>
          <span className={styles.sellerRank}>2</span>
          <span className={styles.sellerName}>Luis Herrera</span>
          <span className={styles.sellerAmount}>C$252,800</span>
        </div>
        <div className={styles.sellerRow}>
          <span className={styles.sellerRank}>3</span>
          <span className={styles.sellerName}>Karla Méndez</span>
          <span className={styles.sellerAmount}>C$199,400</span>
        </div>
      </div>
    </div>
  );
}

function UsersVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.listCard}>
        <div className={styles.listHeader}>Roles y permisos</div>
        <div className={styles.roleRow}>
          <span className={styles.roleName}>Administrador</span>
          <span className={styles.roleTag}>Acceso total</span>
        </div>
        <div className={styles.roleRow}>
          <span className={styles.roleName}>Cajero</span>
          <span className={styles.roleTag}>Facturar · Cobrar</span>
        </div>
        <div className={styles.roleRow}>
          <span className={styles.roleName}>Bodeguero</span>
          <span className={styles.roleTag}>Inventario · Transferencias</span>
        </div>
        <div className={styles.roleRow}>
          <span className={styles.roleName}>Vendedor</span>
          <span className={styles.roleTag}>Pedidos · App móvil</span>
        </div>
      </div>
    </div>
  );
}

function ReportsVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.listCard}>
        <div className={styles.listHeader}>Ventas por semana</div>
        <div className={styles.chart}>
          <div className={styles.chartBar} style={{ height: '40%' }} />
          <div className={styles.chartBar} style={{ height: '65%' }} />
          <div className={styles.chartBar} style={{ height: '50%' }} />
          <div className={styles.chartBar} style={{ height: '85%' }} />
          <div className={styles.chartBar} style={{ height: '70%' }} />
          <div className={`${styles.chartBar} ${styles.chartBarActive}`} style={{ height: '100%' }} />
        </div>
        <div className={styles.chartFooter}>
          <span>Utilidad del mes</span>
          <span className={styles.chartGrowth}>▲ +18%</span>
        </div>
      </div>
    </div>
  );
}

function WooVisual() {
  return (
    <div className={`${styles.visualPanel} glass-panel`}>
      <div className={styles.syncWrapper}>
        <div className={styles.syncNode}>
          <span className={styles.syncIcon}>POS</span>
          <span>DipleBill</span>
        </div>
        <div className={styles.syncArrows}>⇄</div>
        <div className={styles.syncNode}>
          <span className={styles.syncIcon}>WEB</span>
          <span>WooCommerce</span>
        </div>
      </div>
      <div className={styles.syncStatus}>Productos · Precios · Stock · Pedidos</div>
      <div className={styles.syncBadge}>✓ Sincronizado hace 1 min</div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className={`${styles.visualPanel} ${styles.visualCentered}`}>
      <div className={styles.phone}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneScreen}>
          <div className={styles.phoneTitle}>Nuevo pedido</div>
          <div className={styles.phoneRow}><span>Cliente</span><span>Tienda El Sol</span></div>
          <div className={styles.phoneRow}><span>Arroz 5kg ×10</span><span>C$2,270</span></div>
          <div className={styles.phoneRow}><span>Aceite 1L ×6</span><span>C$1,050</span></div>
          <div className={styles.phoneButton}>Facturar C$3,320</div>
        </div>
      </div>
    </div>
  );
}

const VISUALS: Record<string, React.ReactNode> = {
  invoice: <InvoiceVisual />,
  credit: <CreditVisual />,
  inventory: <InventoryVisual />,
  branches: <BranchesVisual />,
  sellers: <SellersVisual />,
  users: <UsersVisual />,
  reports: <ReportsVisual />,
  woocommerce: <WooVisual />,
  mobile: <MobileVisual />,
};

export default function FeatureShowcase({ data }: FeatureShowcaseProps) {
  return (
    <section id="funciones" className={styles.showcaseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.blocks}>
          {data.blocks.map((block, idx) => (
            <div
              key={block.id}
              id={block.id}
              className={`${styles.block} ${idx % 2 === 1 ? styles.blockReversed : ''}`}
            >
              <div className={styles.blockContent}>
                <span className={styles.eyebrow}>{block.eyebrow}</span>
                <h3 className={styles.blockTitle}>{block.title}</h3>
                <p className={styles.blockDescription}>{block.description}</p>
                <ul className={styles.bulletList}>
                  {block.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <span className={styles.check}>✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.blockVisual}>
                {VISUALS[block.visual]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
