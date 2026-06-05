'use client';

import { useState } from 'react';
import Link from 'next/link';
import { menuCategories } from '@/components/Rodizio';

export default function CardapioCompleto() {
  const [activeMenu, setActiveMenu] = useState('ver_tudo');

  const tabs = [
    { id: 'ver_tudo', label: 'Ver Tudo' },
    ...menuCategories
  ];

  const currentMenu = activeMenu === 'ver_tudo'
    ? { items: menuCategories.flatMap(c => c.items) }
    : menuCategories.find(c => c.id === activeMenu);

  return (
    <main className="menu-section" style={{ minHeight: '100vh', padding: '4rem 0', backgroundColor: '#0A0A0A' }}>
      <div className="container-max">
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/#cardapio" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--color-gold)',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            fontWeight: '600',
            letterSpacing: '1px',
            transition: 'color var(--transition-base)',
            textDecoration: 'none'
          }} className="back-home-link">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para o Início
          </Link>
        </div>

        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <span className="section-tag">Cardápio Completo</span>
          <h1 className="section-title font-heading" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
            Nossa Gastronomia <span className="gold-gradient">Premium</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Confira todos os itens do nosso cardápio oficial, incluindo pratos do rodízio, combinados, drinks e sobremesas.
          </p>
        </div>

        {/* Menu Tabs */}
        <div className="menu-tabs-wrapper" style={{ marginBottom: '3rem' }}>
          <div className="menu-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
            {tabs.map(cat => (
              <button
                key={cat.id}
                className={`menu-tab ${activeMenu === cat.id ? 'active' : ''}`}
                onClick={() => setActiveMenu(cat.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  border: '1px solid rgba(201, 169, 110, 0.2)',
                  borderRadius: '999px',
                  color: activeMenu === cat.id ? '#0A0A0A' : 'var(--color-text-primary)',
                  background: activeMenu === cat.id ? 'var(--color-gold)' : 'transparent',
                  transition: 'all var(--transition-base)',
                  cursor: 'pointer'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {currentMenu?.items.map((item, i) => (
            <div
              key={i}
              className={`menu-item-card ${item.featured ? 'featured-menu-item' : ''}`}
              style={{
                position: 'relative',
                background: 'linear-gradient(145deg, #1A1510, #0D0D0D)',
                border: item.featured ? '1px solid var(--color-gold)' : '1px solid rgba(201, 169, 110, 0.2)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {item.featured && (
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'var(--color-gold)',
                  color: '#0A0A0A',
                  fontSize: '0.6rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '2px',
                  zIndex: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
                }}>
                  Destaque
                </span>
              )}
              
              <div style={{ overflow: 'hidden', height: '200px', position: 'relative' }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="menu-item-img"
                  loading="lazy"
                />
              </div>

              <div className="menu-item-info" style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
                    <h3 className="font-heading" style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                      {item.name}
                    </h3>
                    <span className="menu-item-price" style={{
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: item.price === 'Rodízio' ? 'var(--color-gold)' : 'var(--color-text-primary)',
                      background: item.price === 'Rodízio' ? 'rgba(201, 169, 110, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                      border: item.price === 'Rodízio' ? '1px solid rgba(201, 169, 110, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      {item.price}
                    </span>
                  </div>
                  <p className="menu-item-desc" style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
