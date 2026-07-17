import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "DipleBill — Sistema de Facturación e Inventario",
  description:
    "Factura, controla inventarios y administra múltiples sucursales con DipleBill. Créditos a clientes, app móvil para vendedores, reportes en tiempo real e integración con WooCommerce. Prueba gratis 14 días.",
  keywords: [
    "sistema de facturación",
    "control de inventario",
    "punto de venta",
    "POS",
    "múltiples sucursales",
    "cuentas por cobrar",
    "WooCommerce",
    "app móvil para vendedores",
  ],
  openGraph: {
    title: "DipleBill — Sistema de Facturación e Inventario",
    description:
      "Facturación, inventarios, sucursales, créditos, reportes y app móvil en una sola plataforma. Prueba gratis 14 días.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
