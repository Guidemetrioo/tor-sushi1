'use client';

import Hero from '@/components/Hero';
import Delivery from '@/components/Delivery';
import StatsBar from '@/components/StatsBar';
import Rodizio from '@/components/Rodizio';
import Historia from '@/components/Historia';
import Galeria from '@/components/Galeria';
import Avaliacoes from '@/components/Avaliacoes';
import Reserva from '@/components/Reserva';
import Localizacao from '@/components/Localizacao';
import BlogPreview from '@/components/BlogPreview';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Delivery />
      <StatsBar />
      <Rodizio />
      <Historia />
      <Galeria />
      <Avaliacoes />
      <Reserva />
      <BlogPreview />
      <Localizacao />
    </main>
  );
}
