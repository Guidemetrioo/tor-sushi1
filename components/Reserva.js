'use client';
import { useState, useMemo } from 'react';

const horarios = [
  { dia: 'Seg a Qui', hora: '12h–15h · 19h–23h' },
  { dia: 'Sexta', hora: '12h–23h' },
  { dia: 'Sábado', hora: '12h–00h' },
  { dia: 'Domingo', hora: '12h–23h' },
];

/**
 * Returns the valid 30-minute time slots for a given Date object,
 * based on the restaurant's opening hours.
 * 
 * Mon–Thu (1–4): 12:00–14:30 | 19:00–22:30  (last slot 30min before close)
 * Fri (5):       12:00–22:30
 * Sat (6):       12:00–23:30
 * Sun (0):       12:00–22:30
 */
function getTimeSlots(dateStr) {
  if (!dateStr) return [];

  // Parse date as local (not UTC) — use explicit year/month/day split
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  const dow = d.getDay(); // 0=Sun,1=Mon,...,6=Sat

  // Define windows as [startH, startM, endH, endM] (end = last slot start)
  let windows = [];
  if (dow >= 1 && dow <= 4) {
    // Mon–Thu: lunch 12:00–14:30, dinner 19:00–22:30
    windows = [[12, 0, 14, 30], [19, 0, 22, 30]];
  } else if (dow === 5) {
    // Fri: 12:00–22:30
    windows = [[12, 0, 22, 30]];
  } else if (dow === 6) {
    // Sat: 12:00–23:30
    windows = [[12, 0, 23, 30]];
  } else {
    // Sun: 12:00–22:30
    windows = [[12, 0, 22, 30]];
  }

  const slots = [];
  for (const [sh, sm, eh, em] of windows) {
    let h = sh, m = sm;
    const endMin = eh * 60 + em;
    while (h * 60 + m <= endMin) {
      const label = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      slots.push(label);
      m += 30;
      if (m >= 60) { h += 1; m -= 60; }
    }
  }
  return slots;
}

function getTodayString() {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getDayName(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString('pt-BR', { weekday: 'long' });
}

export default function Reserva() {
  const [form, setForm] = useState({
    nome: '', email: '', whatsapp: '',
    pessoas: '2', data: '', horario: '', obs: ''
  });
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
      // Reset horario when date changes
      ...(name === 'data' ? { horario: '' } : {})
    }));
  };

  const timeSlots = useMemo(() => getTimeSlots(form.data), [form.data]);
  const dayName = useMemo(() => getDayName(form.data), [form.data]);
  const isClosedDay = form.data && timeSlots.length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.horario) return;

    const [year, month, day] = form.data.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    const dataFormatada = d.toLocaleDateString('pt-BR', {
      weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'
    });

    const msg = `Olá! Gostaria de fazer uma reserva no Tor Sushi Oficial.

*Nome:* ${form.nome}
*E-mail:* ${form.email || 'Não informado'}
*WhatsApp:* ${form.whatsapp}
*Nº de Pessoas:* ${form.pessoas}
*Data:* ${dataFormatada}
*Horário:* ${form.horario}
*Observações:* ${form.obs || 'Nenhuma'}`;

    window.open(`https://wa.me/5511919439685?text=${encodeURIComponent(msg)}`, '_blank');
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
            <button
              type="button"
              className="btn-expand-reserva"
              onClick={() => setIsFormExpanded(!isFormExpanded)}
            >
              {isFormExpanded ? 'Fechar ▲' : 'Fazer Reserva ▼'}
            </button>

            <form onSubmit={handleSubmit} className="form-fields" id="reserva-form">
              <div className={`form-container ${isFormExpanded ? 'open' : ''}`}>

              {/* Nome */}
              <div className="form-group">
                <label className="form-label" htmlFor="nome">Nome Completo *</label>
                <input
                  id="nome" name="nome" type="text"
                  className="form-input" placeholder="Seu nome completo"
                  value={form.nome} onChange={handleChange} required
                />
              </div>

              {/* E-mail + WhatsApp */}
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

              {/* Pessoas + Data */}
              <div className="form-row">
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
                <div className="form-group">
                  <label className="form-label" htmlFor="data">
                    Data *
                    {dayName && (
                      <span style={{ fontWeight: 400, color: 'var(--color-text-muted)', fontSize: '0.75rem', marginLeft: '0.4rem' }}>
                        ({dayName})
                      </span>
                    )}
                  </label>
                  <input
                    id="data" name="data" type="date"
                    className="form-input"
                    min={getTodayString()}
                    value={form.data} onChange={handleChange} required
                  />
                </div>
              </div>

              {/* Horário — dynamic slots */}
              <div className="form-group">
                <label className="form-label" htmlFor="horario">Horário *</label>

                {!form.data && (
                  <div className="form-input" style={{ color: 'var(--color-text-muted)', cursor: 'default', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    Selecione uma data primeiro
                  </div>
                )}

                {form.data && isClosedDay && (
                  <div className="form-input" style={{ color: '#e05252', cursor: 'default', background: 'rgba(224,82,82,0.05)', borderColor: 'rgba(224,82,82,0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    Restaurante fechado neste dia
                  </div>
                )}

                {form.data && !isClosedDay && (
                  <select
                    id="horario" name="horario"
                    className="form-select"
                    value={form.horario} onChange={handleChange} required
                  >
                    <option value="">Escolha um horário</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                )}

                {/* Hours legend */}
                {form.data && !isClosedDay && (
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '0.4rem' }}>
                    {[0].includes(new Date(...form.data.split('-').map(Number).map((v,i) => i===1?v-1:v)).getDay()) && 'Dom: 12h–23h'}
                    {[1,2,3,4].includes(new Date(...form.data.split('-').map(Number).map((v,i) => i===1?v-1:v)).getDay()) && 'Seg–Qui: 12h–15h · 19h–23h'}
                    {new Date(...form.data.split('-').map(Number).map((v,i) => i===1?v-1:v)).getDay() === 5 && 'Sex: 12h–23h'}
                    {new Date(...form.data.split('-').map(Number).map((v,i) => i===1?v-1:v)).getDay() === 6 && 'Sáb: 12h–00h'}
                  </p>
                )}
              </div>

              {/* Observações */}
              <div className="form-group">
                <label className="form-label" htmlFor="obs">Observações</label>
                <textarea
                  id="obs" name="obs"
                  className="form-textarea"
                  placeholder="Alergias, preferências, ocasião especial..."
                  value={form.obs} onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                id="reserva-submit"
                disabled={!form.horario || isClosedDay}
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', opacity: (!form.horario || isClosedDay) ? 0.5 : 1 }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Confirmar Reserva pelo WhatsApp
              </button>
              </div>
            </form>
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
