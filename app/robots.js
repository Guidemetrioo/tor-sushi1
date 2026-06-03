export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://torsushioficial.com.br/sitemap.xml',
    host: 'https://torsushioficial.com.br',
  };
}
