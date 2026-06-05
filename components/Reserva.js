'use client';

const horarios = [
  { dia: 'Seg a Qui', hora: '12h–15h · 19h–23h (Reservas: 19h–22h30)' },
  { dia: 'Sexta', hora: '12h–23h (Reservas: 19h–22h30)' },
  { dia: 'Sábado', hora: '12h–00h (Reservas indisponíveis)' },
  { dia: 'Domingo', hora: '12h–23h (Reservas indisponíveis)' },
];

export default function Reserva() {
  const handleReserveClick = () => {
    window.open('https://dg.dguests.com/reserva_mesa/torsushi', '_blank');
  };

  return (
    <section id="reserva" className="reserva-section">
      <div className="container-max">
        <div className="section-header reveal">
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <span className="section-tag">Faça sua Reserva</span>
          <h2 className="section-title font-heading">
            Reserve sua <span className="gold-gradient">Mesa</span>
          </h2>
          <p className="section-subtitle">
            Faça sua reserva online de forma simples e rápida através do sistema DeGuests.
          </p>
        </div>

        <div className="reserva-grid" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Reservation Card / Call-To-Action */}
          <div className="reveal-left" style={{ width: '100%', maxWidth: '680px' }}>
            <div className="reserva-cta-card">
              <h3 className="font-heading" style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--color-gold)', marginTop: 0 }}>
                Políticas de Reserva
              </h3>
              
              <ul className="reserva-policy-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-text-primary)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <span><strong>Dias Permitidos:</strong> Reservas disponíveis de <strong>segunda a sexta-feira</strong>.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-text-primary)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <span><strong>Período:</strong> Válido exclusivamente para o horário de <strong>jantar</strong>.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-text-primary)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <span><strong>Capacidade:</strong> Exclusivo para grupos <strong>acima de 2 pessoas</strong> (mínimo 3 pessoas).</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-text-primary)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
                  <span><strong>Final de Semana / Grupos Menores:</strong> O atendimento é realizado por <strong>ordem de chegada</strong> diretamente no restaurante.</span>
                </li>
              </ul>

              <a
                href="https://dg.dguests.com/reserva_mesa/torsushi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="reserva-submit"
                style={{ width: '100%', padding: '1.1rem', fontSize: '0.8rem', letterSpacing: '1px', borderRadius: '4px', justifyContent: 'center', display: 'inline-flex' }}
              >
                Fazer Reserva no DeGuests
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
