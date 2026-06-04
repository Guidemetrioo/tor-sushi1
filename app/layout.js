import './globals.css';
import './themes.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Tor Sushi Oficial | Rodízio Japonês em Santo Amaro, São Paulo',
  description: 'Rodízio japonês à vontade com frutos do mar e sobremesa inclusa. Ambiente aconchegante, climatizado, aceita vale refeição. Nota 4.7 no Google. Localizado na Av. Washington Luís, 815 – Santo Amaro, SP.',
  keywords: 'restaurante japonês Santo Amaro, rodízio japonês São Paulo zona sul, sushi Santo Amaro, Tor Sushi, rodízio japonês frutos do mar, sushi Jurubatuba, melhor sushi zona sul SP',
  authors: [{ name: 'Tor Sushi Oficial' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Tor Sushi Oficial | Rodízio Japonês em Santo Amaro, São Paulo',
    description: 'Rodízio à vontade com frutos do mar e sobremesa inclusa. Nota 4.7 no Google. Av. Washington Luís, 815 – Santo Amaro, SP.',
    url: 'https://torsushioficial.com.br',
    siteName: 'Tor Sushi Oficial',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/hero-sushi.png', width: 1200, height: 630, alt: 'Tor Sushi Oficial – Rodízio Japonês Santo Amaro' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tor Sushi Oficial | Rodízio Japonês Santo Amaro SP',
    description: 'Rodízio à vontade com frutos do mar. Nota 4.7 no Google. Reserve agora!',
    images: ['/hero-sushi.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&family=Noto+Serif+JP:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Tor Sushi Oficial",
              "url": "https://torsushioficial.com.br",
              "telephone": "+5511919439685",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Washington Luís, 815",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "postalCode": "04662-001",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.6576865,
                "longitude": -46.6971468
              },
              "servesCuisine": "Japanese",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "22000",
                "bestRating": "5"
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "12:00", "closes": "15:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "19:00", "closes": "23:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "12:00", "closes": "23:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "12:00", "closes": "00:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "12:00", "closes": "23:00" }
              ],
              "acceptsReservations": "True",
              "sameAs": ["https://www.instagram.com/torsushioficial"]
            })
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden tema-carbono-quente">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
