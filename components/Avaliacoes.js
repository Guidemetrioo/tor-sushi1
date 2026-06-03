'use client';
import { useState } from 'react';

const reviews = [
  {
    initials: 'MA',
    name: 'Mariana Alves',
    date: 'há 2 semanas',
    text: 'Sem dúvida o melhor rodízio japonês da Zona Sul! O ambiente é lindo, climatizado e super confortável. O sashimi de salmão é de dar água na boca, e os frutos do mar estão sempre fresquíssimos. Voltarei sempre!',
    stars: 5,
    gradient: 'linear-gradient(135deg, #133837, #215E5D)',
  },
  {
    initials: 'RP',
    name: 'Rafael Pereira',
    date: 'há 1 mês',
    text: 'Fui no aniversário da minha esposa e foi incrível. O atendimento foi impecável, a variedade de pratos é absurda. O hot roll gratinado e o temaki de salmão foram os destaques. Nota 10!',
    stars: 5,
    gradient: 'linear-gradient(135deg, #215E5D, #2A8783)',
  },
  {
    initials: 'CS',
    name: 'Camila Souza',
    date: 'há 3 semanas',
    text: 'Vim com a família e todos adoraram! A sobremesa inclusa no rodízio foi uma surpresa deliciosa. Aceitam vale refeição, o que facilita muito. Ambiente familiar e aconchegante. Recomendo de olhos fechados!',
    stars: 5,
    gradient: 'linear-gradient(135deg, #2A8783, #206B68)',
  },
  {
    initials: 'TL',
    name: 'Thiago Lima',
    date: 'há 2 meses',
    text: 'O rodízio premium vale cada centavo! A qualidade dos ingredientes é impressionante. Os camarões empanados são uma entrada incrível. Ambiente tranquilo e elegante. Um dos meus restaurantes favoritos em SP.',
    stars: 5,
    gradient: 'linear-gradient(135deg, #133837, #206B68)',
  },
  {
    initials: 'FL',
    name: 'Fernanda L.',
    date: 'há 1 semana',
    text: 'O ambiente é lindo, todo em madeira, muito aconchegante. Fui no jantar de casal e foi inesquecível.',
    stars: 5,
    gradient: 'linear-gradient(135deg, #133837, #2A8783)',
  },
  {
    initials: 'LM',
    name: 'Lucas M.',
    date: 'há 3 dias',
    text: 'Melhor custo-benefício da Zona Sul. Salmão sempre fresco e atendimento impecável.',
    stars: 5,
    gradient: 'linear-gradient(135deg, #215E5D, #2A8783)',
  },
  {
    initials: 'PO',
    name: 'Patrícia O.',
    date: 'há 4 dias',
    text: 'Fui com a família toda e todo mundo amou. Variedade enorme de pratos e sobremesa inclusa!',
    stars: 5,
    gradient: 'linear-gradient(135deg, #133837, #215E5D)',
  },
  {
    initials: 'RA',
    name: 'Rodrigo A.',
    date: 'há 1 semana',
    text: 'Aceita vale refeição e ainda assim entrega uma qualidade absurda. Virei cliente fiel.',
    stars: 5,
    gradient: 'linear-gradient(135deg, #2A8783, #206B68)',
  },
];

export default function Avaliacoes() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section id="avaliacoes" className="reviews-section">
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '35%', height: '100%',
        background: 'linear-gradient(to left, rgba(19,56,55,0.04), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="reviews-header reveal">
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <span className="section-tag">O que dizem sobre nós</span>
          <h2 className="section-title font-heading">
            Avaliações dos <span className="gold-gradient">Nossos Clientes</span>
          </h2>

          {/* Rating Display */}
          <div className="rating-display">
            <div className="rating-number font-heading">4.7</div>
            <div className="rating-stars">
              <div className="stars-row">
                {[1, 2, 3, 4].map(i => <span key={i} className="star">★</span>)}
                <span className="star" style={{ opacity: 0.75 }}>★</span>
              </div>
              <div className="rating-label">Baseado em +22.000 avaliações no Google</div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="reviews-carousel reveal">
          <div
            className="reviews-track"
            style={{
              transform: `translateX(calc(-${current * 100}% - ${current * 1.5}rem))`,
            }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                <div className="review-quote">"</div>
                <div className="review-stars">
                  {Array(review.stars).fill(null).map((_, j) => (
                    <span key={j} className="review-star">★</span>
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-author">
                  <div className="review-avatar" style={{ background: review.gradient }}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="review-author-name">{review.name}</div>
                    <div className="review-author-date">Cliente Google · {review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Anterior" id="review-prev">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="carousel-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Próximo" id="review-next">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
