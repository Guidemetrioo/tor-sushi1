'use client';
import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, categories, getPostsByCategory } from './data';

export const dynamic = 'force-static';

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-img-wrapper">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          className="blog-card-img"
          loading="lazy"
        />
        <span className="blog-card-category">{post.category}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-card-date">{post.dateFormatted}</span>
          <span className="blog-card-read">{post.readTime} de leitura</span>
        </div>
        <h2 className="blog-card-title">{post.title}</h2>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="btn-primary blog-card-btn" id={`blog-card-${post.slug}`}>
          Ler mais →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filtered = getPostsByCategory(activeCategory);

  return (
    <>
      {/* Hero */}
      <div className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="container-max blog-hero-content">
          <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
          <p className="section-tag">Gastronomia & Cultura Japonesa</p>
          <h1 className="blog-hero-title font-heading">
            Blog <span className="gold-gradient">Tor Sushi</span>
          </h1>
          <p className="blog-hero-subtitle">
            Dicas, receitas, eventos e novidades do melhor rodízio japonês da Zona Sul de São Paulo.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="blog-filter-bar">
        <div className="container-max">
          <div className="blog-filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                id={`blog-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <main className="blog-main">
        <div className="container-max">
          {filtered.length === 0 ? (
            <div className="blog-empty">
              <p>Nenhum post encontrado nessa categoria.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filtered.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Back to home */}
          <div className="blog-back">
            <Link href="/" className="btn-outline">
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
