import React from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeatureShowcase from '@/components/FeatureShowcase';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import contentData from '@/data/content.json';

export default function Home() {
  const { nav, hero, features, showcase, pricing, faq, cta, footer } = contentData.home;

  return (
    <>
      <Nav data={nav} />
      <main>
        <Hero data={hero} />
        <Features data={features} />
        <FeatureShowcase data={showcase} />
        <Pricing data={pricing} />
        <FAQ data={faq} />
        <CTA data={cta} />
      </main>
      <Footer data={footer} />
    </>
  );
}
