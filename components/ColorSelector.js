'use client';

import { useState, useEffect } from 'react';

const themes = [
  { 
    id: 'carbono-quente', 
    name: 'CARBONO\nQUENTE', 
    colors: ['#1A1510', '#0A0A0A', '#C9A96E'],
    desc: 'O clássico e intimista Tor Sushi'
  },
  { 
    id: 'japandi-premium', 
    name: 'JAPANDI\nPREMIUM', 
    colors: ['#F7F4EF', '#FFFFFF', '#1C1C1C'],
    desc: 'Minimalismo japonês com toque escandinavo'
  },
  { 
    id: 'bege-editorial', 
    name: 'BEGE\nEDITORIAL', 
    colors: ['#E8D9C0', '#D4BFA0', '#1A3030'],
    desc: 'Design gastronômico caloroso e sofisticado'
  },
  { 
    id: 'midnight-teal', 
    name: 'MIDNIGHT\nTEAL', 
    colors: ['#060F0F', '#0A1F1F', '#2BA8A0'],
    desc: 'Identidade máxima de marca com tom azul-petróleo'
  },
  { 
    id: 'editorial-branco', 
    name: 'EDITORIAL\nBRANCO', 
    colors: ['#FFFFFF', '#FAFAFA', '#0A0A0A'],
    desc: 'Foco absoluto nas fotos, estética editorial clean'
  },
  { 
    id: 'gold-obsidian', 
    name: 'GOLD &\nOBSIDIAN', 
    colors: ['#060606', '#0D0D0D', '#C9A96E'],
    desc: 'Fine dining absoluto, dourado sobre obsidian'
  }
];

export default function ColorSelector() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTheme, setActiveTheme] = useState('carbono-quente');
  const [hoveredTheme, setHoveredTheme] = useState(null);

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('torsushi-theme') || 'carbono-quente';
      setActiveTheme(savedTheme);
      document.body.className = `tema-${savedTheme}`;
    }
  }, []);

  const selectTheme = (themeId) => {
    setActiveTheme(themeId);
    if (typeof window !== 'undefined') {
      document.body.className = `tema-${themeId}`;
      localStorage.setItem('torsushi-theme', themeId);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 600px) {
          .theme-selector-panel-container.is-open {
            left: 12px !important;
            right: 12px !important;
            bottom: 12px !important;
            width: auto !important;
          }
          .theme-selector-panel-container.is-closed {
            left: 12px !important;
            bottom: 12px !important;
            right: auto !important;
            width: 44px !important;
            height: 44px !important;
          }
          .theme-selector-panel-inner {
            width: 100% !important;
          }
        }
      `}} />
      <div className={`theme-selector-panel-container ${isOpen ? 'is-open' : 'is-closed'}`} style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 9999,
        fontFamily: 'var(--font-body), sans-serif',
        transition: 'all 0.3s ease',
      }}>
        {isOpen ? (
          <div className="theme-selector-panel-inner" style={{
            background: 'rgba(0, 0, 0, 0.85)',
            borderRadius: '12px',
            padding: '16px',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            width: '280px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '8px',
          }}>
            <span style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: '#ffffff',
              fontWeight: '700',
            }}>
              🎨 Temas Visuais
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: 1,
                padding: '2px 6px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
              title="Fechar seletor"
            >
              ✕
            </button>
          </div>

          {/* Grid of 6 Theme Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
          }}>
            {themes.map((theme) => {
              const isActive = activeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  onMouseEnter={() => setHoveredTheme(theme)}
                  onMouseLeave={() => setHoveredTheme(null)}
                  style={{
                    background: isActive ? 'rgba(43, 168, 160, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: isActive 
                      ? '2px solid #2BA8A0' 
                      : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '6px',
                    padding: '8px 4px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '6px',
                    height: '76px',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 0 12px rgba(43, 168, 160, 0.2)' : 'none',
                  }}
                >
                  {/* Theme Name */}
                  <span style={{
                    fontSize: '8px',
                    fontWeight: '800',
                    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                    lineHeight: '1.2',
                    whiteSpace: 'pre-line',
                  }}>
                    {theme.name}
                  </span>

                  {/* Theme Previews (3 colors) */}
                  <div style={{
                    display: 'flex',
                    gap: '3px',
                    justifyContent: 'center',
                  }}>
                    {theme.colors.map((color, i) => (
                      <div
                        key={i}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '2px',
                          backgroundColor: color,
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                        }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Description section showing details of hovered or active theme */}
          {(hoveredTheme || activeTheme) && (
            <div style={{
              fontSize: '10px',
              color: 'rgba(255, 255, 255, 0.8)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '8px',
              textAlign: 'center',
              minHeight: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              lineHeight: '1.3',
            }}>
              <span style={{ fontWeight: '700', color: '#ffffff' }}>
                {hoveredTheme ? hoveredTheme.name.replace('\n', ' ') : themes.find(t => t.id === activeTheme)?.name.replace('\n', ' ')}
              </span>
              <span style={{ fontSize: '8.5px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>
                {hoveredTheme ? hoveredTheme.desc : themes.find(t => t.id === activeTheme)?.desc}
              </span>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
            fontSize: '20px',
            color: '#ffffff',
            transition: 'transform 0.2s, background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'rgba(43, 168, 160, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.85)';
          }}
          title="Abrir Seletor de Temas"
        >
          🎨
        </button>
      )}
    </div>
    </>
  );
}
