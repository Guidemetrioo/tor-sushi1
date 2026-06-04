'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#inicio', label: 'Início', anchor: true },
  { href: '#rodizio', label: 'Rodízio', anchor: true },
  { href: '#cardapio', label: 'Cardápio', anchor: true },
  { href: '#galeria', label: 'Galeria', anchor: true },
  { href: '#avaliacoes', label: 'Avaliações', anchor: true },
  { href: '#reserva', label: 'Reserva', anchor: true },
  { href: '#localizacao', label: 'Localização', anchor: true },
  { href: '/blog', label: 'Blog', anchor: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, isAnchor) => {
    setMenuOpen(false);
    if (!isAnchor) return; // Let Next.js Link handle it
    if (pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container-max nav-inner">
          {/* Logo */}
          <a href="/" className="nav-logo-img-wrapper">
            <img
              src="/logo-torsushi.png"
              alt="Tor Sushi Oficial – Rodízio Japonês em Santo Amaro"
              className="nav-logo-img"
            />
          </a>

          {/* Desktop Links */}
          <div className="nav-links">
            {navLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  id={`nav-${link.label.toLowerCase().replace(/[^a-z]/g, '')}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href, true); }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  id={`nav-blog`}
                >
                  {link.label}
                </Link>
              )
            )}

          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            id="nav-mobile-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a
          href="https://dg.dguests.com/reserva_mesa/torsushi"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-link menu-reservar-highlight"
          onClick={() => setMenuOpen(false)}
          id="mobile-reservar-mesa"
        >
          Reservar Mesa
        </a>
        {navLinks.map((link) =>
          link.anchor ? (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href, true); }}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
      </div>
    </>
  );
}
