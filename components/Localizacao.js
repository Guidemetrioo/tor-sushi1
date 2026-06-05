'use client';

export default function Localizacao() {
  return (
    <section id="localizacao" className="localizacao-section">
      <div className="container-max">
        <div className="section-header reveal">
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <span className="section-tag">Como Chegar</span>
          <h2 className="section-title font-heading">
            Nossa <span className="gold-gradient">Localização</span>
          </h2>
          <p className="section-subtitle">
            Av. Washington Luís, 815 – Santo Amaro, São Paulo – SP, 04662-001
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          {/* Address details */}
          <div className="reveal-left" style={{ width: '100%' }}>
            <div className="endereco-card">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--color-teal)', marginBottom: '1rem' }} />
                <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Tor Sushi Oficial
                </h3>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-teal)', textTransform: 'uppercase' }}>
                  Santo Amaro, São Paulo
                </span>
              </div>

              {/* Endereço */}
              <div className="endereco-row">
                <svg className="endereco-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
                <div>
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-primary)' }}>Endereço</p>
                  <p style={{ margin: '2px 0 0 0', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>Av. Washington Luís, 815 – Santo Amaro, SP</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="endereco-row">
                <svg className="endereco-icon" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-primary)' }}>WhatsApp / Contato</p>
                  <p style={{ margin: '2px 0 0 0' }}>
                    <a href="https://wa.me/5511919439685" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-teal)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '500' }}>
                      (11) 91943-9685
                    </a>
                  </p>
                </div>
              </div>

              {/* Avaliação */}
              <div className="endereco-row">
                <svg className="endereco-icon" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <div>
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--color-text-primary)' }}>Avaliação Google</p>
                  <p style={{ margin: '2px 0 0 0', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>4.7★ no Google — +22.000 avaliações</p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--color-border-subtle)', margin: '1.5rem 0' }} />

              {/* Horários Detalhados */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <svg className="endereco-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" style={{ color: 'var(--color-gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h4 className="font-heading" style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-text-primary)' }}>
                    Horários de Funcionamento
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '0.85rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>Segunda a Quinta:</span>
                    <span style={{ color: 'var(--color-text-secondary)', textAlign: 'right', fontSize: '0.8rem' }}>
                      12h–15h · 19h–23h <br />
                      <small style={{ color: 'var(--color-gold)', fontSize: '0.75rem' }}>(Reservas das 19h às 22h30)</small>
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '0.85rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.6rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>Sexta-feira:</span>
                    <span style={{ color: 'var(--color-text-secondary)', textAlign: 'right', fontSize: '0.8rem' }}>
                      12h–23h <br />
                      <small style={{ color: 'var(--color-gold)', fontSize: '0.75rem' }}>(Reservas das 19h às 22h30)</small>
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '0.85rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.6rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>Sábado:</span>
                    <span style={{ color: 'var(--color-text-secondary)', textAlign: 'right', fontSize: '0.8rem' }}>
                      12h–00h <br />
                      <small style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>(Reservas indisponíveis)</small>
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '0.85rem', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '0.6rem' }}>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>Domingo:</span>
                    <span style={{ color: 'var(--color-text-secondary)', textAlign: 'right', fontSize: '0.8rem' }}>
                      12h–23h <br />
                      <small style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>(Reservas indisponíveis)</small>
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--color-border-subtle)', margin: '1.5rem 0' }} />

              {/* Políticas de Reserva */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <svg className="endereco-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" style={{ color: 'var(--color-gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <h4 className="font-heading" style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-text-primary)' }}>
                    Políticas de Reserva
                  </h4>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                    <span>Reservas disponíveis de <strong>segunda a sexta-feira</strong>.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                    <span>Válido exclusivamente para o horário de <strong>jantar</strong>.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                    <span>Exclusivo para grupos <strong>acima de 2 pessoas</strong> (mínimo 3 pessoas).</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span>
                    <span>Grupos menores e fins de semana: <strong>ordem de chegada</strong>.</span>
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--color-border-subtle)', margin: '1.5rem 0' }} />

              {/* Formas de Pagamento */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <svg className="endereco-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" style={{ color: 'var(--color-gold)' }}>
                    <rect x="2" y="5" width="20" height="14" rx="2" ry="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                  <h4 className="font-heading" style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-text-primary)' }}>
                    Formas de Pagamento
                  </h4>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Dinheiro', 'Crédito', 'Débito', 'Pix', 'VR', 'Alelo', 'Sodexo', 'Ticket', 'Pluxee', 'Ben'].map(p => (
                    <span 
                      key={p} 
                      className="payment-badge"
                      style={{ 
                        fontSize: '0.7rem', 
                        padding: '0.25rem 0.6rem', 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        border: '1px solid var(--color-border-subtle)', 
                        borderRadius: '4px',
                        color: 'var(--color-text-secondary)'
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href="https://dg.dguests.com/reserva_mesa/torsushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', padding: '1rem', fontWeight: 'bold' }}
                >
                  Reservar Mesa Agora
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal-right" style={{ width: '100%' }}>
            <div className="mapa-container">
              <iframe
                title="Localização Tor Sushi Oficial"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7861!2d-46.6971468!3d-23.6576865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce503ea3f27a4b%3A0x1!2sAv.+Washington+Lu%C3%ADs%2C+815+-+Santo+Amaro%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map buttons */}
            <div className="mapa-buttons">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-23.6576865,-46.6971468"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="loc-google-maps"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                Como Chegar (Google Maps)
              </a>
              <a
                href="https://www.waze.com/ul?ll=-23.6576865,-46.6971468&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="loc-waze"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.88 2.003c-5.157.2-9.27 4.43-9.27 9.597 0 2.367.862 4.534 2.286 6.21L4 22l4.38-.882c1.29.566 2.723.882 4.23.882C18.065 22 22 17.814 22 12.6 22 7.385 17.615 1.79 11.88 2.003zm.62 17.7c-1.286 0-2.5-.29-3.574-.81l-.26-.134-2.712.546.558-2.638-.175-.266A7.745 7.745 0 016.41 11.6c0-4.313 3.516-7.83 7.83-7.83 4.312 0 7.83 3.517 7.83 7.83 0 4.314-3.518 7.84-7.57 7.103zM16.68 13.8c-.23-.12-1.365-.674-1.576-.75-.21-.08-.365-.115-.52.115-.155.23-.596.75-.73.9-.135.15-.27.17-.5.06-.23-.12-.97-.358-1.847-1.14-.682-.61-1.142-1.362-1.276-1.592-.135-.23-.015-.355.1-.47.1-.1.23-.27.346-.405.115-.135.153-.23.23-.385.077-.155.038-.29-.02-.405-.057-.12-.52-1.254-.71-1.717-.19-.463-.384-.4-.52-.407-.134-.01-.288-.01-.443-.01-.155 0-.405.06-.616.29-.21.23-.81.79-.81 1.924 0 1.134.83 2.23.945 2.384.115.155 1.634 2.493 3.96 3.497.554.24 1.086.383 1.454.49.61.177 1.166.152 1.605.092.49-.07 1.507-.616 1.72-1.21.213-.595.213-1.107.15-1.213-.06-.1-.214-.155-.445-.27z"/>
                </svg>
                Abrir no Waze
              </a>
              <a
                href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=-23.6576865&dropoff[longitude]=-46.6971468&dropoff[nickname]=Tor%20Sushi%20Oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="loc-uber"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5z"/>
                </svg>
                Chamar Uber
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
