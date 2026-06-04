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

        <div className="reserva-grid">
          {/* Reservation Card / Call-To-Action */}
          <div className="reveal-left">
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

          {/* Info Sidebar */}
          <div className="reveal-right">
            <div className="reserva-info-frame">
              <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-primary)', marginTop: 0 }}>
                Informações
              </h3>

              {/* Contact */}
              <div className="info-block">
                <div className="info-block-title">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.61 3.37 2 2 0 013.62 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91A16 16 0 0016 17l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Contato
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://wa.me/5511919439685" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}>
                    (11) 91943-9685
                  </a>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Av. Washington Luís, 815 – Santo Amaro, SP</span>
                </div>
              </div>

              {/* Horários */}
              <div className="info-block">
                <div className="info-block-title">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Horários de Funcionamento
                </div>
                {horarios.map((h, i) => (
                  <div key={i} className="horario-item">
                    <span className="horario-dia">{h.dia}</span>
                    <span className="horario-hora">{h.hora}</span>
                  </div>
                ))}
              </div>

              {/* Pagamento */}
              <div className="info-block" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
                <div className="info-block-title">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                  Formas de Pagamento
                </div>
                <div className="payment-icons">
                  {['Dinheiro', 'Crédito', 'Débito', 'Pix', 'VR', 'Alelo', 'Sodexo', 'Ticket', 'Pluxee', 'Ben'].map(p => (
                    <span key={p} className="payment-badge">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
