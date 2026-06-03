'use client';

const footerLinks = [
  { href: '#inicio', label: 'Início', anchor: true },
  { href: '#rodizio', label: 'Rodízio', anchor: true },
  { href: '#cardapio', label: 'Cardápio', anchor: true },
  { href: '#galeria', label: 'Galeria', anchor: true },
  { href: '#avaliacoes', label: 'Avaliações', anchor: true },
  { href: '#reserva', label: 'Reserva', anchor: true },
  { href: '#localizacao', label: 'Localização', anchor: true },
  { href: '/blog', label: 'Blog', anchor: false },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container-max">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <a href="/">
              <img
                src="/logo-torsushi.png"
                alt="Tor Sushi Oficial"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', marginBottom: '1rem', filter: 'brightness(1.05)' }}
              />
            </a>
            <p className="footer-tagline">
              Tradição japonesa no coração da Zona Sul.<br/>
              Av. Washington Luís, 815 – Santo Amaro, SP.
            </p>
            <div className="footer-social">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/torsushioficial"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
                id="footer-instagram"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511919439685"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
                id="footer-whatsapp"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* iFood */}
              <a
                href="https://www.ifood.com.br/delivery/sao-paulo-sp/tor-sushi-jurubatuba/d6b2e14a-aea9-4fbb-8b8a-7ecaed1e6532"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="iFood"
                id="footer-ifood"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="footer-col-title">Navegação</h4>
            <div className="footer-links">
              {footerLinks.map(link =>
                link.anchor ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="footer-col-title">Delivery</h4>
            <div className="footer-links">
              <a
                href="https://www.ifood.com.br/delivery/sao-paulo-sp/tor-sushi-jurubatuba/d6b2e14a-aea9-4fbb-8b8a-7ecaed1e6532"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Pedir no iFood
              </a>
              <a
                href="https://wa.me/5511919439685?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Pedir pelo WhatsApp
              </a>
              <a
                href="https://wa.me/5511919439685?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Reservar Mesa
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Contato</h4>
            <div className="footer-links">
              <a href="https://wa.me/5511919439685" target="_blank" rel="noopener noreferrer" className="footer-link">
                (11) 91943-9685
              </a>
              <span className="footer-link" style={{ cursor: 'default' }}>@torsushioficial</span>
              <span className="footer-link" style={{ cursor: 'default', lineHeight: 1.6 }}>
                Av. Washington Luís, 815<br />Santo Amaro, SP
              </span>
              <div style={{ marginTop: '0.75rem' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>Horários</p>
                <p className="footer-link" style={{ cursor: 'default', fontSize: '0.75rem' }}>Seg–Qui: 12h–15h · 19h–23h</p>
                <p className="footer-link" style={{ cursor: 'default', fontSize: '0.75rem' }}>Sex: 12h–23h</p>
                <p className="footer-link" style={{ cursor: 'default', fontSize: '0.75rem' }}>Sáb: 12h–00h · Dom: 12h–23h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} <span>Tor Sushi Oficial</span>. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para a <span>Zona Sul</span> de São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
