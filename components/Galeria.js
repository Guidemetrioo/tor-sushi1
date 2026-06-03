'use client';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=600&fit=crop&q=80', alt: 'Sushi em prato de madeira', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=450&fit=crop&q=80', alt: 'Uramaki Dragon Roll', size: 'wide' },
  { src: '/gallery-sashimi.png', alt: 'Sashimi de Salmão Fresco', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=600&h=600&fit=crop&q=80', alt: 'Uramaki Philadelphia', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=450&fit=crop&q=80', alt: 'Nigiri de Camarão', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&h=450&fit=crop&q=80', alt: 'Gunkan de Ovas', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&h=600&fit=crop&q=80', alt: 'Sashimi de Polvo', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&h=450&fit=crop&q=80', alt: 'Sashimi de Atum Premium', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&h=450&fit=crop&q=80', alt: 'Sashimi de Peixe Branco', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=600&h=600&fit=crop&q=80', alt: 'Temaki de Camarão', size: 'normal' },
  { src: '/restaurant-interior.png', alt: 'Ambiente Interno Tor Sushi', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&h=450&fit=crop&q=80', alt: 'Preparo Artesanal do Chef', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1607301401219-270ea461fdbf?w=600&h=600&fit=crop&q=80', alt: 'Combo de Sushi Misto', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&h=450&fit=crop&q=80', alt: 'Prato Especial de Niguiri', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=450&fit=crop&q=80', alt: 'Frango Frito Karaagê', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop&q=80', alt: 'Porção de Edamame', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=450&fit=crop&q=80', alt: 'Porção de Guioza', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=450&fit=crop&q=80', alt: 'Sopa Missoshiru Quente', size: 'normal' }
];

export default function Galeria() {
  return (
    <section id="galeria" className="galeria-section light-section" style={{ padding: '6rem 0 3rem' }}>
      <div className="container-max">

        {/* Header */}
        <div className="section-header reveal">
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <span className="section-tag">Experiência Visual</span>
          <h2 className="section-title font-heading">
            Nossa <span className="gold-gradient">Galeria</span>
          </h2>
          <p className="section-subtitle">
            Cada detalhe conta. Do preparo artesanal à apresentação impecável.
          </p>
        </div>

        {/* Gallery Grid - inside container-max */}
        <div className="gallery-grid reveal">
          {galleryItems.slice(0, 9).map((item, i) => {
            // Irregular brickwork sizes (alternating wide and square)
            // Index 0: square, Index 1: wide, Index 2: square
            // Index 3: wide, Index 4: square, Index 5: square
            // Index 6: square, Index 7: wide, Index 8: square
            let sizeClass = 'square';
            if (i === 1 || i === 3 || i === 7) {
              sizeClass = 'wide';
            }
            return (
              <div
                key={i}
                className={`gallery-item ${sizeClass}`}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-tag">Instagram</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instagram CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://www.instagram.com/torsushioficial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="galeria-instagram"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Siga no Instagram @torsushioficial →
          </a>
        </div>
      </div>
    </section>
  );
}
