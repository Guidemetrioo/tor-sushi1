'use client';

// Componente SVG para Mesa com Cadeiras
const TableChairsIcon = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={{ flexShrink: 0 }}
  >
    {/* Tampo da mesa */}
    <path d="M4 11h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
    {/* Pernas da mesa */}
    <path d="M6 14v6" />
    <path d="M18 14v6" />
    {/* Cadeira esquerda */}
    <path d="M2 18V9a1 1 0 0 1 1-1h1" />
    {/* Cadeira direita */}
    <path d="M22 18V9a1 1 0 0 0-1-1h-1" />
  </svg>
);

// Componente SVG para Prato com Hashis (Chopsticks)
const PlateChopsticksIcon = ({ size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    {/* Prato (círculo externo e interno) */}
    <circle cx="9" cy="12" r="7" />
    <circle cx="9" cy="12" r="4" />
    {/* Hashis paralelos na lateral */}
    <line x1="17" y1="4" x2="22" y2="19" />
    <line x1="19" y1="4" x2="20" y2="20" />
  </svg>
);

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-line" />
        <p className="hero-tag">Santo Amaro, São Paulo</p>

        <h1 className="hero-title font-heading">
          O rodízio japonês com o&nbsp;melhor<br />
          <span className="gold-gradient">custo-benefício da&nbsp;Zona&nbsp;Sul</span>
        </h1>

        <p className="hero-subtitle">
          O rodízio com o melhor custo-benefício de São Paulo. À vontade com frutos do mar e sobremesa inclusa.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a
            href="https://dg.dguests.com/reserva_mesa/torsushi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="hero-reservar"
          >
            <TableChairsIcon size={16} />
            Reservar Mesa
          </a>
          <button
            className="btn-primary"
            id="hero-ver-rodizio"
            onClick={() => scrollToSection('rodizio')}
          >
            <PlateChopsticksIcon size={16} />
            Ver Rodízio
          </button>
          <button
            className="btn-primary"
            id="hero-ver-cardapio"
            onClick={() => scrollToSection('cardapio')}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Ver Cardápio
          </button>
        </div>

        {/* Badges */}
        <div className="hero-badges">
          <div className="hero-badge">
            <span className="badge-icon">★</span>
            <span>4.7 Google</span>
          </div>
          <div className="hero-badge">
            <span>+22.000 avaliações</span>
          </div>
          <div className="hero-badge">
            <span>Aceita Vale Refeição</span>
          </div>
          <div className="hero-badge">
            <span>Frutos do Mar Incluso</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <span>Explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
