'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

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
    diferenciais: [
      'Melhor custo-benefício da região',
      'Ingredientes frescos e selecionados',
      'Ideal para almoço rápido de negócios',
      'Camarão crocante à vontade',
    ],
  },
  {
    id: 'premium',
    label: 'Premium',
    name: 'Rodízio Premium',
    desc: 'À vontade com frutos do mar e sobremesa inclusa. O nosso carro-chefe.',
    featured: true,
    badge: null,
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
    diferenciais: [
      'Experiência gastronômica completa',
      'Frutos do mar nobres ilimitados (Lula, Polvo, Camarão)',
      'Sobremesa premium inclusa',
      'Disponível no almoço e jantar todos os dias',
    ],
  },
  {
    id: 'casal',
    label: 'Casal / Dupla',
    name: 'Rodízio Casal',
    desc: 'À vontade com frutos do mar e sobremesa inclusa. Perfeito para um jantar a dois.',
    featured: false,
    badge: null,
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
    diferenciais: [
      'Combo premium com preço reduzido para dois',
      'Ideal para noites românticas ou encontros',
      'Inclui sobremesas e frutos do mar',
      'Melhor custo total para casais/duplas',
    ],
  },
];

export const menuCategories = [
  {
    id: 'entradas_quentes',
    label: 'Entradas & Quentes',
    items: [
      { name: 'Canapé de Salmão', desc: 'Canapé crocante de arroz com salmão batido e cebolinha', img: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 411, featured: true },
      { name: 'Ceviche de Peixe Branco', desc: 'Peixe branco fresco marinado no limão com cebola roxa', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 257, featured: true },
      { name: 'Ebi Furai', desc: 'Camarão empanado em massa crocante super sequinha', img: '/gallery-camarao.png', price: 'Rodízio', likes: 148, featured: false },
      { name: 'Chapa do Tor', desc: 'Camarão e lula grelhados com legumes na chapa', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 141, featured: false },
      { name: 'Shimeji Tor', desc: 'Cogumelos frescos salteados com shoyu e manteiga', img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 124, featured: false },
      { name: 'Harumaki', desc: 'Rolinho primavera crocante, recheado com queijo ou legumes', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 121, featured: false },
      { name: 'Lula à Dorê', desc: 'Anéis de lula empanados na farinha panko', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 116, featured: false },
      { name: 'Guioza', desc: 'Pastel oriental cozido no vapor e finalizado na chapa', img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 107, featured: false },
      { name: 'Dadinho de Tapioca', desc: 'Dadinho de tapioca com camarão e geleia de pimenta', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 95, featured: false },
    ],
  },
  {
    id: 'carpaccios_tartares',
    label: 'Carpaccios & Tartares',
    items: [
      { name: 'Carpaccio de Salmão Trufado', desc: 'Fatias finas de salmão com azeite trufado e raspas de limão', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 123, featured: true },
      { name: 'Carpaccio de Salmão com Geleia de Pimenta', desc: 'Salmão fresco fatiado finamente com geleia artesanal', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 113, featured: false },
      { name: 'Carpaccio de Peixe Branco Maçaricado', desc: 'Fatias maçaricadas de peixe do dia com molho ponzu especial', img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 93, featured: false },
      { name: 'Tartar de Salmão', desc: 'Salmão batido na ponta da faca com cebolinha e molho de ervas Tor', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 89, featured: false },
      { name: 'Carpaccio de Salmão Ponzu', desc: 'Fatias de salmão com molho ponzu cítrico da casa', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 89, featured: false },
    ],
  },
  {
    id: 'temakis',
    label: 'Temakis',
    items: [
      { name: 'Temaki Salmão Cru ou Grelhado', desc: 'Cone de alga crocante com arroz e salmão fresco batido', img: '/gallery-temaki.png', price: 'Rodízio', likes: 117, featured: true },
      { name: 'Temaki Empanado', desc: 'Temaki recheado de salmão e cream cheese inteiramente empanado', img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 109, featured: false },
      { name: 'Temaki de Camarão', desc: 'Cone recheado com camarões cozidos e cream cheese cremoso', img: 'https://images.unsplash.com/photo-1633478062482-790e3b5dd810?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 69, featured: false },
      { name: 'Temaki de Salmão Trufado', desc: 'Temaki de salmão com azeite trufado e raspas de limão', img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 62, featured: false },
      { name: 'Temaki Tor', desc: 'Temaki exclusivo de salmão, camarão e geleia de pimenta da casa', img: '/gallery-temaki.png', price: 'Rodízio', likes: 49, featured: false },
    ],
  },
  {
    id: 'sushis_djos',
    label: 'Sushis & Djôs',
    items: [
      { name: 'Hot Roll Tor Sushi', desc: 'Hot roll premium com muito cream cheese, cebolinha e molho tarê', img: '/gallery-hotroll.png', price: 'Rodízio', likes: 104, featured: true },
      { name: 'Joe Salmão Chico César', desc: 'Salmão maçaricado com queijo coalho e geleia de pimenta', img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 91, featured: false },
      { name: 'Djô de Camarão', desc: 'Salmão envolvendo arroz com recheio cremoso de camarão picado', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 87, featured: false },
      { name: 'Uramaki Filadélfia', desc: 'Enrolado invertido de salmão com cream cheese e cebolinha', img: '/gallery-uramaki.png', price: 'Rodízio', likes: 79, featured: false },
      { name: 'Niguiri Barriga de Salmão', desc: 'Niguiri com azeite trufado, flor de sal e limão siciliano', img: '/gallery-nigiri.png', price: 'Rodízio', likes: 76, featured: false },
      { name: 'Djô Maracujá', desc: 'Salmão envolvendo arroz com cream cheese e calda de maracujá', img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 66, featured: false },
    ],
  },
  {
    id: 'sashimis',
    label: 'Sashimis',
    items: [
      { name: 'Sashimi de Salmão', desc: 'Fatias frescas e generosas de salmão norueguês fresco', img: '/gallery-sashimi.png', price: 'Rodízio', likes: 89, featured: true },
      { name: 'Sashimi Barriga na Pedra de Sal', desc: 'Sashimi de barriga de salmão servido na pedra de sal rosa', img: '/gallery-sashimi.png', price: 'Rodízio', likes: 80, featured: false },
      { name: 'Sashimi Salmão Maçaricado', desc: 'Fatias de salmão levemente maçaricadas com gergelim', img: '/gallery-sashimi.png', price: 'Rodízio', likes: 68, featured: false },
      { name: 'Sashimi de Atum', desc: 'Fatias premium de atum rojo fresco selecionado', img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 37, featured: false },
      { name: 'Sashimi de Prego', desc: 'Fatias macias de peixe prego fresco', img: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?w=400&h=300&fit=crop&q=80', price: 'Rodízio', likes: 24, featured: false },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks & Cocktails',
    items: [
      { name: 'Tor Mule', desc: 'Vodka, capim santo, gengibre e toque cítrico de limão', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop&q=80', price: 'R$ 34,00', likes: 8, featured: true },
      { name: 'Caipiroska Nacional', desc: 'Vodka nacional, limão espremido e açúcar', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop&q=80', price: 'R$ 26,00', likes: 8, featured: true },
      { name: 'Akaisoda', desc: 'Cocktail de lichia, xarope de frutas vermelhas e água com gás', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop&q=80', price: 'R$ 24,99', likes: 7, featured: false },
      { name: 'Karui', desc: 'Cocktail sem álcool de gengibre, limão, hortelã e água com gás', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop&q=80', price: 'R$ 24,99', likes: 5, featured: false },
      { name: 'Lagoa Azul', desc: 'Vodka, curaçau blue, suco de limão e refrigerante de limão', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop&q=80', price: 'R$ 32,00', likes: 5, featured: false },
      { name: 'Moscow Mule', desc: 'Vodka premium, capim santo, limão, gengibre e espuma de gengibre', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop&q=80', price: 'R$ 38,00', likes: 3, featured: false },
      { name: 'Whisky Smash', desc: 'Whisky Red Label, Aperol, limão taiti e hortelã fresca', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&q=80', price: 'R$ 35,00', likes: 3, featured: false },
    ],
  },
  {
    id: 'bebidas_outros',
    label: 'Bebidas & Outros',
    items: [
      { name: 'Refrigerante', desc: 'Lata 350ml (Coca-Cola, Guaraná, Soda, Fanta)', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop&q=80', price: 'R$ 10,90', likes: 8, featured: false },
      { name: 'H2OH!', desc: 'Garrafa de 500ml de H2OH limão ou citrus', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop&q=80', price: 'R$ 13,90', likes: 8, featured: false },
      { name: 'Cerveja Long Neck Heineken', desc: 'Cerveja long neck premium gelada', img: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=400&h=300&fit=crop&q=80', price: 'R$ 14,90', likes: 3, featured: false },
      { name: 'Suco Natural', desc: 'Sucos diversos batidos na hora (Laranja, Limão, Abacaxi)', img: 'https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=400&h=300&fit=crop&q=80', price: 'R$ 14,90', likes: 4, featured: false },
      { name: 'Saquê Importado', desc: 'Dose de saquê premium importado selecionado', img: 'https://images.unsplash.com/photo-1609167727192-3bc556637e1b?w=400&h=300&fit=crop&q=80', price: 'A partir de R$ 44,90', likes: 2, featured: false },
    ],
  }
];

// ── Flip Card ────────────────────────────────────────────────────────────────
function FlipCard({ rod, index, isFlipped, onClick, isMobile }) {
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

  const reservationUrl = 'https://dg.dguests.com/reserva_mesa/torsushi';

  return (
    <div
      ref={cardRef}
      className={`flip-container ${rod.featured ? 'featured-flip' : ''}`}
      onClick={isMobile ? onClick : undefined}
      style={{ cursor: 'pointer' }}
    >
      <div 
        className={`flip-inner ${isMobile && isFlipped ? 'flipped' : ''} ${isIntersecting ? 'animate-hint' : ''}`}
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
            href={reservationUrl}
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
            <h4 className="flip-back-title font-heading">
              {isMobile ? 'Diferenciais' : 'O que está incluso'}
            </h4>
            <p className="flip-back-subtitle">{rod.name}</p>
            <ul className="flip-back-list">
              {(isMobile ? rod.diferenciais : rod.backItems).map((item, i) => (
                <li key={i} className="flip-back-item">
                  <span className="flip-check">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={reservationUrl}
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
        {isMobile 
          ? (isFlipped ? '👆 Toque para ver a frente' : '👆 Toque para ver os diferenciais')
          : '👆 Passe o mouse para ver o que está incluso'}
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
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('entradas_quentes');
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (index) => {
    setFlippedIndex(prev => (prev === index ? -1 : index));
  };

  const tabs = [
    { id: 'ver_tudo', label: 'Ver Tudo' },
    ...menuCategories
  ];

  const handleTabClick = (catId) => {
    if (catId === 'ver_tudo') {
      router.push('/cardapio');
    } else {
      setActiveMenu(catId);
    }
  };

  const currentMenu = menuCategories.find(c => c.id === activeMenu);
  const itemsToShow = currentMenu ? currentMenu.items.slice(0, 4) : [];

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
            <FlipCard
              key={rod.id}
              rod={rod}
              index={index}
              isFlipped={flippedIndex === index}
              onClick={() => handleCardClick(index)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="gold-line-full reveal" style={{ margin: '4rem 0' }} />

        {/* Menu Section */}
        <div id="cardapio">
          <div className="section-header reveal" style={{ marginBottom: '2rem' }}>
            <span className="section-tag">Nosso Cardápio</span>
            <h2 className="section-title font-heading cardapio-title">
              Cada prato, uma <span className="gold-gradient">obra de arte</span>
            </h2>
          </div>

          {/* Menu Tabs */}
          <div className="menu-tabs-wrapper reveal">
            <div className="menu-tabs">
              {tabs.map(cat => (
                <button
                  key={cat.id}
                  className={`menu-tab ${activeMenu === cat.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(cat.id)}
                  id={`menu-tab-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="menu-grid reveal">
            {itemsToShow.map((item, i) => (
              <div
                key={i}
                className={`menu-item-card ${item.featured ? 'featured-menu-item' : ''}`}
                style={{ position: 'relative' }}
              >
                {item.featured && (
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'var(--color-gold)',
                    color: '#0A0A0A',
                    fontSize: '0.6rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '2px',
                    zIndex: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
                  }}>
                    Destaque
                  </span>
                )}
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="menu-item-img"
                    loading="lazy"
                  />
                </div>
                <div className="menu-item-info">
                  <div className="menu-item-header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h4 className="menu-item-name" style={{ margin: 0, fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>{item.name}</h4>
                  </div>
                  <p className="menu-item-desc" style={{ textAlign: 'center' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Menu CTA Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }} className="reveal">
            <button
              onClick={() => router.push('/cardapio')}
              className="btn-primary"
              style={{ padding: '1rem 2.5rem', fontSize: '0.8rem', letterSpacing: '1px' }}
            >
              Ver Cardápio Completo
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
