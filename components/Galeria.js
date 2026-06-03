'use client';

// All gallery items link to the restaurant's Instagram profile
const INSTAGRAM_URL = 'https://www.instagram.com/torsushioficial/';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=600&fit=crop&q=80', alt: 'Sushi em prato de madeira' },
  { src: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&h=450&fit=crop&q=80', alt: 'Uramaki Dragon Roll' },
  { src: '/gallery-sashimi.png', alt: 'Sashimi de Salmão Fresco' },
  { src: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=600&h=600&fit=crop&q=80', alt: 'Uramaki Philadelphia' },
  { src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=450&fit=crop&q=80', alt: 'Nigiri de Camarão' },
  { src: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&h=450&fit=crop&q=80', alt: 'Gunkan de Ovas' },
  { src: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&h=600&fit=crop&q=80', alt: 'Sashimi de Polvo' },
  { src: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&h=450&fit=crop&q=80', alt: 'Sashimi de Atum Premium' },
  { src: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&h=450&fit=crop&q=80', alt: 'Sashimi de Peixe Branco' },
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

        {/* Gallery Grid — each photo links to Instagram */}
        <div className="gallery-grid reveal">
          {galleryItems.map((item, i) => {
            let sizeClass = 'square';
            if (i === 1 || i === 3 || i === 7) sizeClass = 'wide';

            return (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`gallery-item ${sizeClass}`}
                style={{ animationDelay: `${i * 0.04}s`, display: 'block', textDecoration: 'none' }}
                aria-label={`${item.alt} — Ver no Instagram`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{ pointerEvents: 'none' }}
                />
                <div className="gallery-overlay">
                  <span className="gallery-tag">
                    <svg
                      width="13" height="13"
                      fill="none" stroke="currentColor"
                      viewBox="0 0 24 24" strokeWidth="1.5"
                      style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }}
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    @torsushioficial
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Instagram CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href={INSTAGRAM_URL}
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
