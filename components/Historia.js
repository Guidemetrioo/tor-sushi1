'use client';

export default function Historia() {
  return (
    <section id="historia" className="historia-section">
      <div className="container-max">
        <div className="historia-grid">

          {/* Text */}
          <div className="reveal-left">
            <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
            <span className="section-tag" style={{ textAlign: 'left', display: 'block', marginBottom: '0.75rem' }}>Nossa História</span>
            <h2 className="section-title font-heading" style={{ textAlign: 'left' }}>
              Cada peça conta uma história.{' '}
              <span className="gold-gradient">A sua começa aqui.</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              O Tor Sushi Oficial nasceu do amor pela culinária japonesa e do desejo de oferecer uma experiência gastronômica completa e acessível para os moradores de Santo Amaro e toda a Zona Sul de São Paulo.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Com um ambiente aconchegante e climatizado, poltronas confortáveis e uma enorme variedade de pratos, nosso rodízio à vontade garante que você e seus acompanhantes saiam satisfeitos com a melhor experiência japonesa da região.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              O melhor da culinária japonesa na Zona Sul de São Paulo.
            </p>

            {/* Stats */}
            <div className="historia-stats">
              <div>
                <div className="historia-stat-value font-heading">4.7★</div>
                <div className="historia-stat-label">Google</div>
              </div>
              <div>
                <div className="historia-stat-value font-heading">22 Mil</div>
                <div className="historia-stat-label">Avaliações</div>
              </div>
              <div>
                <div className="historia-stat-value font-heading">São Paulo</div>
                <div className="historia-stat-label">Santo Amaro</div>
              </div>
            </div>

            {/* Vale Refeição badges */}
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
                Formas de Pagamento
              </p>
              <div className="vales-row">
                {['Dinheiro', 'Crédito', 'Débito', 'Pix', 'VR', 'Alelo', 'Sodexo', 'Ticket', 'Pluxee', 'Ben'].map(v => (
                  <span key={v} className="vale-badge">{v}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="reveal-right">
            <div className="historia-img-wrapper">
              <div className="historia-img-container">
                <img
                  src="/banner-interno.jpg"
                  alt="Ambiente interno do Tor Sushi Oficial – aconchegante e climatizado"
                />
                <div className="historia-img-overlay" />
                <div className="historia-img-badge">
                  <p className="font-heading">Ambiente Premium</p>
                  <p>Santo Amaro, SP</p>
                </div>
              </div>

              {/* Floating accent */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                zIndex: -1
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '120px',
                height: '120px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: -1
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
