// Planes de la landing tomados del backend (una sola fuente de verdad, editable
// desde /admin/landing). Si el API no responde, se usa el fallback estático de
// content.json para no dejar la sección de precios vacía.

export interface LandingPlanCard {
  name: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
  href?: string;
}

interface ApiLandingPlan {
  name: string;
  price: number | string;
  period: string | null;
  features: string[] | null;
  is_featured: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const DEFAULT_CTA = 'Prueba de 14 días';

function formatPrice(price: number | string): string {
  const value = typeof price === 'number' ? price : parseFloat(price);
  if (Number.isNaN(value)) return String(price);
  return `C$${value.toLocaleString('en-US')}`;
}

export async function getLandingPlans(
  fallback: LandingPlanCard[]
): Promise<LandingPlanCard[]> {
  try {
    const res = await fetch(`${API_URL}/api/v1/landing/plans`, {
      // Se revalida cada 5 min: los cambios de precio en /admin/landing se
      // reflejan sin redeploy, sin pegarle al backend en cada visita.
      next: { revalidate: 300 },
    });

    if (!res.ok) return fallback;

    const data = (await res.json()) as ApiLandingPlan[];
    if (!Array.isArray(data) || data.length === 0) return fallback;

    return data.map((plan) => ({
      name: plan.name,
      price: formatPrice(plan.price),
      period: plan.period ?? '',
      isPopular: Boolean(plan.is_featured),
      features: Array.isArray(plan.features) ? plan.features : [],
      cta: DEFAULT_CTA,
      href: '/registro',
    }));
  } catch {
    return fallback;
  }
}
