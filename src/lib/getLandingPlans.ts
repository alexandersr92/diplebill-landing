// Planes de la landing tomados del backend (una sola fuente de verdad: los
// planes de licenciamiento reales, editables en /admin/plans). Cada plan es un
// tier con dos precios —mensual y anual—. Si el API no responde, se usa el
// fallback estático de content.json para no dejar la sección de precios vacía.

export interface LandingPlanCard {
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  currency?: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
  href?: string;
}

interface ApiPlan {
  name: string;
  price_monthly: number | string;
  price_annual: number | string;
  currency: string | null;
  is_featured: boolean;
  features: string[] | null;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const DEFAULT_CTA = 'Prueba de 14 días';

const toNumber = (value: number | string): number => {
  const n = typeof value === 'number' ? value : parseFloat(value);
  return Number.isNaN(n) ? 0 : n;
};

export async function getLandingPlans(
  fallback: LandingPlanCard[]
): Promise<LandingPlanCard[]> {
  try {
    const res = await fetch(`${API_URL}/api/v1/landing/plans`, {
      // Revalida cada 5 min (ISR): los cambios de precio en /admin/plans se
      // reflejan sin redeploy, sin pegarle al backend en cada visita.
      next: { revalidate: 300 },
    });

    if (!res.ok) return fallback;

    const data = (await res.json()) as ApiPlan[];
    if (!Array.isArray(data) || data.length === 0) return fallback;

    return data.map((plan) => ({
      name: plan.name,
      priceMonthly: toNumber(plan.price_monthly),
      priceAnnual: toNumber(plan.price_annual),
      currency: plan.currency ?? 'NIO',
      isPopular: Boolean(plan.is_featured),
      features: Array.isArray(plan.features) ? plan.features : [],
      cta: DEFAULT_CTA,
      href: '/registro',
    }));
  } catch {
    return fallback;
  }
}
