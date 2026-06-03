'use client';
import { useState } from 'react';

const horarios = [
  { dia: 'Seg a Qui', hora: '12h–15h · 19h–23h' },
  { dia: 'Sexta', hora: '12h–17h · 17h–23h' },
  { dia: 'Sábado', hora: '12h–17h · 17h–00h' },
  { dia: 'Domingo', hora: '12h–17h · 17h–23h' },
];

export default function Reserva() {
  const [form, setForm] = useState({
    nome: '', email: '', whatsapp: '', nascimento: '',
    pessoas: '2', data: '', horario: '', obs: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de fazer uma reserva no Tor Sushi Oficial.

*Nome:* ${form.nome}
*E-mail:* ${form.email}
*WhatsApp:* ${form.whatsapp}
*Data de Nascimento:* ${form.nascimento || 'Não informado'}
*Nº de Pessoas:* ${form.pessoas}
*Data da Reserva:* ${form.data}
*Horário:* ${form.horario}
*Observações:* ${form.obs || 'Nenhuma'}`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/5511919439685?text=${encodedMsg}`, '_blank');
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
            Preencha o formulário e entraremos em contato pelo WhatsApp para confirmar.
          </p>
        </div>

        <div className="reserva-grid">
          {/* Form */}
          <div className="reveal-left">
            <form onSubmit={handleSubmit} className="form-fields" id="reserva-form">
              <div className="form-group">
                <label className="form-label" htmlFor="nome">Nome Completo *</label>
                <input
                  id="nome" name="nome" type="text"
                  className="form-input" placeholder="Seu nome completo"
                  value={form.nome} onChange={handleChange} required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">E-mail</label>
                  <input
                    id="email" name="email" type="email"
                    className="form-input" placeholder="seu@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="whatsapp">WhatsApp *</label>
                  <input
                    id="whatsapp" name="whatsapp" type="tel"
                    className="form-input" placeholder="(11) 99999-9999"
                    value={form.whatsapp} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="nascimento">Data de Nascimento</label>
                  <input
                    id="nascimento" name="nascimento" type="date"
                    className="form-input"
                    value={form.nascimento} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="pessoas">Nº de Pessoas *</label>
                  <select
                    id="pessoas" name="pessoas"
                    className="form-select"
                    value={form.pessoas} onChange={handleChange} required
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'pessoa' : 'pessoas'}</option>
                    ))}
                    <option value="10+">10+ pessoas</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="data">Data da Visita *</label>
                  <input
                    id="data" name="data" type="date"
                    className="form-input"
                    value={form.data} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="horario">Horário *</label>
                  <input
                    id="horario" name="horario" type="time"
                    className="form-input"
                    value={form.horario} onChange={handleChange} required
                  />
                </div>
              </div>



              <div className="form-group">
                <label className="form-label" htmlFor="obs">Observações</label>
                <textarea
                  id="obs" name="obs"
                  className="form-textarea"
                  placeholder="Alergias, preferências, ocasião especial..."
                  value={form.obs} onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary" id="reserva-submit" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Confirmar Reserva pelo WhatsApp
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="reveal-right">
            <h3 className="font-heading" style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-primary)' }}>
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
            <div className="info-block">
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
    </section>
  );
}
