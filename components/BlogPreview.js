'use client';
import Link from 'next/link';
import { getRecentPosts } from '@/app/blog/data';

const recentPosts = getRecentPosts(3);

export default function BlogPreview() {
  return (
    <section id="blog" className="blog-preview-section light-section">
      {/* Decorative lotus watermark */}
      <div className="blog-lotus-watermark" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 175 C100 175 55 148 42 115 C29 82 52 58 75 70 C63 48 70 26 100 15 C130 26 137 48 125 70 C148 58 171 82 158 115 C145 148 100 175 100 175Z"/>
          <path d="M100 175 C100 175 32 158 10 122 C-12 86 14 55 42 62"/>
          <path d="M100 175 C100 175 168 158 190 122 C212 86 186 55 158 62"/>
          <ellipse cx="100" cy="183" rx="12" ry="4"/>
        </svg>
      </div>

      <div className="container-max">
        {/* Header */}
        <div className="section-header reveal">
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <span className="section-tag">Conteúdo & Cultura Japonesa</span>
          <h2 className="section-title font-heading">
            Nosso <span className="gold-gradient">Blog</span>
          </h2>
          <p className="section-subtitle">
            Dicas, receitas e novidades do melhor rodízio japonês da Zona Sul.
          </p>
        </div>

        {/* Cards */}
        <div className="blog-preview-grid reveal">
          {recentPosts.map((post) => (
            <article key={post.slug} className="blog-preview-card">
              <div className="blog-preview-img-wrapper">
                <img
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  className="blog-preview-img"
                  loading="lazy"
                />
                <span className="blog-card-category">{post.category}</span>
              </div>
              <div className="blog-preview-body">
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.dateFormatted}</span>
                  <span className="blog-card-read">{post.readTime}</span>
                </div>
                <h3 className="blog-preview-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-preview-link"
                  id={`home-blog-${post.slug}`}
                >
                  Ler mais →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/blog" className="btn-outline" id="home-blog-ver-todos">
            Ver todos os posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
