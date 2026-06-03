'use client';

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
          O rodízio japonês que{' '}
          <span className="gold-gradient">conquistou a Zona Sul</span>
        </h1>

        <p className="hero-subtitle">
          À vontade com frutos do mar e sobremesa inclusa. Nota 4.7 no Google.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a
            href="https://wa.me/5511919439685?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Tor%20Sushi%20Oficial."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="hero-reservar"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Reservar Mesa
          </a>
          <button
            className="btn-primary"
            id="hero-ver-rodizio"
            onClick={() => scrollToSection('rodizio')}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Ver Rodízio
          </button>
        </div>

        {/* Badges */}
        <div className="hero-badges">
          <div className="hero-badge">
            <span className="badge-icon">★</span>
            <span>4.7 Google</span>
          </div>
          <div className="hero-badge">
            <span className="badge-icon">👥</span>
            <span>+22.000 avaliações</span>
          </div>
          <div className="hero-badge">
            <span className="badge-icon">💳</span>
            <span>Aceita Vale Refeição</span>
          </div>
          <div className="hero-badge">
            <span className="badge-icon">🍤</span>
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
