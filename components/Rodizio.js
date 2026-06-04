'use client';
import { useState, useEffect, useRef } from 'react';

const rodizioData = [
  {
    id: 'executivo',
    label: 'Executivo',
    name: 'Rodízio Executivo',
    desc: 'Disponível no almoço, de segunda a sexta, exceto feriados. Inclui camarão empanado.',
    featured: false,
    badge: null,
    prices: [
      { label: 'ALMOÇO', value: '' },
      { label: 'Seg. à Sexta-feira', value: 'R$ 79,90 / pessoa' },
      { label: 'Sáb., Dom. e Feriado', value: 'R$ 124,90 / pessoa' },
    ],
    backItems: [
      'Peças quentes e frias à vontade',
      'Camarão empanado incluso',
      'Disponível Seg. a Sex. no almoço',
      'Melhor custo-benefício do cardápio',
      'Ideal para o dia a dia',
    ],
  },
  {
    id: 'premium',
    label: 'Premium',
    name: 'Rodízio Premium',
    desc: 'À vontade com frutos do mar e sobremesa inclusa. O nosso carro-chefe.',
    featured: true,
    badge: 'Mais Popular',
    prices: [
      { label: 'Almoço Seg–Sex', value: 'R$ 79,90 / pessoa' },
      { label: 'Almoço Sáb, Dom e Feriado', value: 'R$ 124,90 / pessoa' },
      { label: 'Jantar (todos os dias)', value: 'R$ 124,90 / pessoa' },
    ],
    backItems: [
      'Frutos do mar à vontade',
      'Sobremesa inclusa',
      'Disponível todos os dias',
      'Maior variedade de peças do cardápio',
      'A experiência completa do Tor Sushi',
    ],
  },
  {
    id: 'casal',
    label: 'Casal / Dupla',
    name: 'Rodízio Casal',
    desc: 'À vontade com frutos do mar e sobremesa inclusa. Perfeito para um jantar a dois.',
    featured: false,
    badge: 'Romântico',
    prices: [
      { label: 'Jantar Seg–Qui', value: 'R$ 189,90 / casal' },
      { label: 'Jantar Sex, Sáb, Dom e Feriado + Almoço fim de semana', value: 'R$ 197,90 / casal' },
    ],
    backItems: [
      'Frutos do mar à vontade',
      'Sobremesa inclusa',
      'Experiência exclusiva para dois',
      'Disponível no jantar e fim de semana',
      'Perfeito para ocasiões especiais',
    ],
  },
];

const menuCategories = [
  {
    id: 'sashimi',
    label: 'Sashimi',
    items: [
      { name: 'Sashimi de Salmão', desc: 'Filé de salmão norueguês cortado finamente', img: '/gallery-sashimi.png' },
      { name: 'Sashimi de Atum', desc: 'Filé de atum rojo premium', img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=300&fit=crop&q=80' },
      { name: 'Sashimi de Pargo', desc: 'Peixe branco delicado e suave', img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=300&fit=crop&q=80' },
      { name: 'Sashimi de Polvo', desc: 'Tentáculos tenros com wasabi', img: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=400&h=300&fit=crop&q=80' },
    ],
  },
  {
    id: 'sushi',
    label: 'Sushi',
    items: [
      { name: 'Nigiri de Salmão', desc: 'Bolinho de arroz com salmão fresco', img: '/gallery-nigiri.png' },
      { name: 'Nigiri de Camarão', desc: 'Camarão cozido sobre arroz temperado', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop&q=80' },
      { name: 'Gunkan de Ikura', desc: 'Barquinho de alga com ovas de salmão', img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop&q=80' },
      { name: 'Jhou (Tuna)', desc: 'Atum fatiado sobre arroz japonês', img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=300&fit=crop&q=80' },
    ],
  },
  {
    id: 'uramaki',
    label: 'Uramaki',
    items: [
      { name: 'Uramaki Califórnia', desc: 'Kani, pepino e ovas por fora', img: '/gallery-uramaki.png' },
      { name: 'Uramaki Dragon', desc: 'Salmão, cream cheese e abacate', img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80' },
      { name: 'Uramaki Philadelphia', desc: 'Salmão defumado e cream cheese', img: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=400&h=300&fit=crop&q=80' },
      { name: 'Uramaki Hot', desc: 'Empanado e gratinado com maionese', img: '/gallery-hotroll.png' },
    ],
  },
  {
    id: 'temaki',
    label: 'Temaki',
    items: [
      { name: 'Temaki Salmão', desc: 'Cone de alga com salmão e cream cheese', img: '/gallery-temaki.png' },
      { name: 'Temaki Camarão', desc: 'Cone com camarão temperado', img: 'https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=400&h=300&fit=crop&q=80' },
      { name: 'Temaki Atum', desc: 'Cone com atum e pepino japonês', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop&q=80' },
      { name: 'Temaki Hot Philadelphia', desc: 'Cone assado com cream cheese', img: '/gallery-hotroll.png' },
    ],
  },
  {
    id: 'entradas',
    label: 'Entradas',
    items: [
      { name: 'Camarão Empanado', desc: 'Camarão crocante com molho tártaro', img: '/gallery-camarao.png' },
      { name: 'Edamame', desc: 'Vagem de soja cozida com flor de sal', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&q=80' },
      { name: 'Guioza', desc: 'Pastel japonês frito ou cozido no vapor', img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop&q=80' },
      { name: 'Missoshiru', desc: 'Sopa de missô com tofu e cebolinha', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop&q=80' },
    ],
  },
  {
    id: 'quentes',
    label: 'Pratos Quentes',
    items: [
      { name: 'Hot Roll Clássico', desc: 'Enrolado empanado e frito com molho', img: '/gallery-hotroll.png' },
      { name: 'Yakisoba de Frango', desc: 'Macarrão japonês salteado com legumes', img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop&q=80' },
      { name: 'Karaagê', desc: 'Frango marinado e frito no estilo japonês', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop&q=80' },
      { name: 'Tempurá de Camarão', desc: 'Camarão empanado em massa leve', img: '/gallery-camarao.png' },
    ],
  },
];

// ── Flip Card ────────────────────────────────────────────────────────────────
function FlipCard({ rod, index }) {
  const [flipped, setFlipped] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    setFlipped(f => !f);
  };

  const whatsappUrl =
    'https://wa.me/5511919439685?text=Olá!%20Gostaria%20de%20reservar%20uma%20mesa%20para%20o%20Rodízio%20no%20Tor%20Sushi%20Oficial.';

  return (
    <div
      ref={cardRef}
      className={`flip-container ${rod.featured ? 'featured-flip' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div 
        className={`flip-inner ${flipped ? 'flipped' : ''} ${isIntersecting ? 'animate-hint' : ''}`}
        style={{ animationDelay: `${0.3 + index * 0.5}s` }}
      >

        {/* ── FRENTE ── */}
        <div className={`flip-front rodizio-card ${rod.featured ? 'featured' : ''}`}>
          {rod.badge && <div className="rodizio-badge">{rod.badge}</div>}
          <div style={{
            width: '40px',
            height: '1px',
            background: rod.featured ? 'var(--color-red)' : 'var(--color-border)',
            margin: '0 auto 1.25rem'
          }} />
          <h3 className="rodizio-card-name font-heading">{rod.name}</h3>
          <p className="rodizio-card-desc">{rod.desc}</p>
          <div className="rodizio-prices">
            {rod.prices.map((price, i) => (
              <div
                key={i}
                className="rodizio-price-row"
                style={price.value === '' ? {
                  justifyContent: 'center',
                  borderBottom: 'none',
                  fontWeight: 'bold',
                  letterSpacing: '0.12em',
                  color: 'var(--color-text-primary)',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.25rem'
                } : {}}
              >
                <span className="rodizio-price-label">{price.label}</span>
                {price.value && <span className="rodizio-price-value">{price.value}</span>}
              </div>
            ))}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
            id={`rodizio-reservar-${rod.id}`}
            onClick={e => e.stopPropagation()}
          >
            Reservar Agora
          </a>
        </div>

        {/* ── VERSO ── */}
        <div className={`flip-back ${rod.featured ? 'flip-back-featured' : ''}`}>
          <div className="flip-back-inner">
            <div className="flip-back-icon">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 0.5rem' }}>
                <ellipse cx="12" cy="7" rx="8" ry="4" />
                <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" />
                <ellipse cx="12" cy="7" rx="4" ry="2" fill="currentColor" opacity="0.15" />
                <ellipse cx="12" cy="7" rx="2" ry="1" />
              </svg>
            </div>
            <h4 className="flip-back-title font-heading">O que está incluso</h4>
            <p className="flip-back-subtitle">{rod.name}</p>
            <ul className="flip-back-list">
              {rod.backItems.map((item, i) => (
                <li key={i} className="flip-back-item">
                  <span className="flip-check">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flip-back"
              onClick={e => e.stopPropagation()}
              id={`rodizio-back-reservar-${rod.id}`}
            >
              Reservar Agora
            </a>
          </div>
        </div>

      </div>
      <div className="flip-micro-label-mobile">
        👆 Toque para ver o que está incluso
      </div>
    </div>
  );
}

// ── Lotus watermark ──────────────────────────────────────────────────────────
function LotusWatermark() {
  return (
    <div style={{
      position: 'absolute',
      right: '-60px',
      top: '50%',
      transform: 'translateY(-50%)',
      opacity: 0.04,
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      <svg width="300" height="300" viewBox="0 0 200 200" fill="var(--color-text-primary)">
        <path d="M100 180 C100 180 60 150 50 120 C40 90 60 70 80 80 C70 60 75 40 100 30 C125 40 130 60 120 80 C140 70 160 90 150 120 C140 150 100 180 100 180Z"/>
        <path d="M100 180 C100 180 40 160 20 130 C0 100 20 70 45 75 C35 55 45 35 65 35 C55 60 65 80 80 80"/>
        <path d="M100 180 C100 180 160 160 180 130 C200 100 180 70 155 75 C165 55 155 35 135 35 C145 60 135 80 120 80"/>
        <ellipse cx="100" cy="185" rx="15" ry="5"/>
        <line x1="100" y1="180" x2="100" y2="190" stroke="var(--color-text-primary)" strokeWidth="2"/>
      </svg>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function Rodizio() {
  const [activeMenu, setActiveMenu] = useState('sashimi');
  const currentMenu = menuCategories.find(c => c.id === activeMenu);

  return (
    <section id="rodizio" className="menu-section light-section">
      <div className="container-max">

        {/* Section Header */}
        <div className="section-header reveal">
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <span className="section-tag">Gastronomia Japonesa</span>
          <h2 className="section-title font-heading">
            Nosso <span className="gold-gradient">Rodízio</span>
          </h2>
          <p className="section-subtitle">
            À vontade com frutos do mar e sobremesa inclusa. Tradição japonesa com qualidade premium.
          </p>
        </div>

        {/* Rodízio Flip Cards */}
        <div className="rodizio-grid reveal" style={{ position: 'relative' }}>
          <LotusWatermark />
          {rodizioData.map((rod, index) => (
            <FlipCard key={rod.id} rod={rod} index={index} />
          ))}
        </div>

        {/* Divider */}
        <div className="gold-line-full reveal" style={{ margin: '4rem 0' }} />

        {/* Menu Section */}
        <div id="cardapio">
          <div className="section-header reveal" style={{ marginBottom: '2rem' }}>
            <span className="section-tag">Nosso Cardápio</span>
            <h2 className="section-title font-heading">
              Cada prato, uma <span className="gold-gradient">obra de arte</span>
            </h2>
          </div>

          {/* Menu Tabs */}
          <div className="menu-tabs-wrapper reveal">
            <div className="menu-tabs">
              {menuCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`menu-tab ${activeMenu === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveMenu(cat.id)}
                  id={`menu-tab-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="menu-grid reveal">
            {currentMenu?.items.map((item, i) => (
              <div key={i} className="menu-item-card">
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="menu-item-img"
                    loading="lazy"
                  />
                </div>
                <div className="menu-item-info">
                  <h4 className="menu-item-name">{item.name}</h4>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
