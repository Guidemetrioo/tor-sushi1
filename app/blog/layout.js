export const metadata = {
  title: 'Blog | Tor Sushi Oficial – Gastronomia Japonesa em Santo Amaro',
  description: 'Artigos sobre culinária japonesa, dicas de sushi, eventos e novidades do Tor Sushi Oficial em Santo Amaro, São Paulo.',
  openGraph: {
    title: 'Blog | Tor Sushi Oficial',
    description: 'Artigos sobre culinária japonesa, dicas, eventos e novidades.',
    url: 'https://torsushioficial.com.br/blog',
    siteName: 'Tor Sushi Oficial',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function BlogLayout({ children }) {
  return (
    <div style={{ paddingTop: '72px' }}>
      {children}
    </div>
  );
}
