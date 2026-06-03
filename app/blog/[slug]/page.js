import { blogPosts } from '../data';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Post não encontrado | Blog Tor Sushi' };

  return {
    title: `${post.title} | Blog Tor Sushi Oficial`,
    description: post.schema.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.schema.description,
      url: `https://torsushioficial.com.br/blog/${post.slug}`,
      images: [{ url: post.coverImage, width: 800, height: 450, alt: post.coverImageAlt }],
      type: 'article',
      publishedTime: post.schema.datePublished,
      modifiedTime: post.schema.dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.schema.description,
      images: [post.coverImage],
    },
    robots: 'index, follow',
    alternates: {
      canonical: `https://torsushioficial.com.br/blog/${post.slug}`,
    },
  };
}

function renderMarkdown(content) {
  // Simple markdown-like renderer for server component
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="blog-post-h2">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="blog-post-h3">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="blog-post-quote">
          {line.replace('> ', '')}
        </blockquote>
      );
    } else if (line.startsWith('- ')) {
      // Collect list items
      const listItems = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(lines[i].trim().replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="blog-post-list">
          {listItems.map((item, j) => (
            <li key={j} className="blog-post-list-item">{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.match(/^\d+\./)) {
      // Ordered list
      const listItems = [];
      while (i < lines.length && lines[i].trim().match(/^\d+\./)) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="blog-post-list blog-post-ol">
          {listItems.map((item, j) => (
            <li key={j} className="blog-post-list-item">{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      const boldContent = line.slice(2, -2);
      elements.push(
        <p key={i} className="blog-post-bold-line">
          <strong>{boldContent}</strong>
        </p>
      );
    } else if (line.length > 0) {
      elements.push(
        <p key={i} className="blog-post-p">
          {renderInline(line)}
        </p>
      );
    }

    i++;
  }

  return elements;
}

function renderInline(text) {
  // Handle **bold**, [link text](href), etc.
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]} className="blog-post-link">{linkMatch[1]}</a>;
    }
    return part;
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center', color: 'var(--color-text-primary)' }}>
        <h1>Post não encontrado</h1>
        <a href="/blog" style={{ color: 'var(--color-teal)', marginTop: '1rem', display: 'inline-block' }}>← Voltar ao Blog</a>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.schema.headline,
    description: post.schema.description,
    image: post.coverImage,
    datePublished: post.schema.datePublished,
    dateModified: post.schema.dateModified,
    author: {
      '@type': 'Organization',
      name: 'Tor Sushi Oficial',
      url: 'https://torsushioficial.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tor Sushi Oficial',
      logo: {
        '@type': 'ImageObject',
        url: 'https://torsushioficial.com.br/logo-torsushi.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://torsushioficial.com.br/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Cover Hero */}
      <div className="blog-post-hero">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          className="blog-post-hero-img"
        />
        <div className="blog-post-hero-overlay" />
        <div className="container-max blog-post-hero-content">
          <span className="blog-card-category">{post.category}</span>
          <h1 className="blog-post-title font-heading">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.dateFormatted}</span>
            <span className="blog-post-meta-dot">·</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="blog-post-main">
        <div className="container-max">
          <div className="blog-post-layout">

            {/* Article */}
            <article className="blog-post-content">
              <p className="blog-post-intro">{post.excerpt}</p>
              {renderMarkdown(post.content)}

              {/* Tags */}
              <div className="blog-post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-post-tag">#{tag}</span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-post-sidebar">
              <div className="blog-sidebar-cta">
                <div className="gold-line" style={{ marginBottom: '1rem' }} />
                <h3 className="blog-sidebar-title font-heading">Reserve sua mesa</h3>
                <p className="blog-sidebar-text">
                  Venha viver essa experiência. Reserve agora pelo WhatsApp!
                </p>
                <a
                  href="https://wa.me/5511919439685?text=Olá!%20Vi%20o%20blog%20e%20gostaria%20de%20fazer%20uma%20reserva."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="blog-post-reservar"
                >
                  Reservar Agora
                </a>
              </div>

              <div className="blog-sidebar-card">
                <h4 className="blog-sidebar-card-title">Ver Cardápio</h4>
                <p className="blog-sidebar-text">Explore todas as opções do nosso rodízio premium.</p>
                <a href="/#cardapio" className="btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem' }}>
                  Ver Cardápio →
                </a>
              </div>

              <div className="blog-sidebar-posts">
                <h4 className="blog-sidebar-card-title">Outros posts</h4>
                {blogPosts.filter(p => p.slug !== post.slug).map(p => (
                  <a key={p.slug} href={`/blog/${p.slug}`} className="blog-sidebar-post-link">
                    <span className="blog-sidebar-post-cat">{p.category}</span>
                    <span className="blog-sidebar-post-title">{p.shortTitle}</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <div className="blog-back" style={{ marginTop: '3rem' }}>
            <a href="/blog" className="btn-outline">← Voltar ao Blog</a>
          </div>
        </div>
      </main>
    </>
  );
}
