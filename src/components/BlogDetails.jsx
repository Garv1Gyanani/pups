import React, { useEffect } from 'react';
import { ArrowLeft, User, Calendar, Clock, BookOpen } from 'lucide-react';
import { blogsData } from './Tips';

export default function BlogDetails({ blog, onBack, onNavigateBlog }) {
  // Scroll to top when blog changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog.id]);

  const related = blogsData.filter(b => b.id !== blog.id);

  return (
    <div className="blog-details-page" style={{ paddingTop: '100px', background: 'var(--cream)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', paddingBottom: '80px' }}>
        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="btn btn-outline-brown btn-sm" 
          style={{ marginBottom: '32px', padding: '8px 16px', display: 'inline-flex', gap: '6px' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        {/* Article Header */}
        <article>
          <span className="tag tag-red" style={{ marginBottom: '16px' }}>{blog.cat}</span>
          <h1 style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 900, 
            lineHeight: 1.15, 
            color: 'var(--brown)', 
            marginBottom: '24px' 
          }}>
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '24px', 
            alignItems: 'center', 
            paddingBottom: '24px', 
            borderBottom: '1px solid var(--honey)',
            marginBottom: '32px',
            color: 'var(--mid)',
            fontSize: '0.88rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={16} />
              <span>By <strong>{blog.author}</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div style={{ 
            width: '100%', 
            maxHeight: '450px', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden', 
            boxShadow: 'var(--shadow-md)',
            marginBottom: '40px'
          }}>
            <img 
              src={blog.img} 
              alt={blog.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Body Content */}
          <div style={{ 
            fontSize: '1.05rem', 
            lineHeight: 1.8, 
            color: 'var(--brown)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px' 
          }}>
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Related Articles Section */}
        <div style={{ marginTop: '80px', borderTop: '2px solid var(--honey)', paddingTop: '48px' }}>
          <h3 style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: '1.6rem', 
            fontWeight: 900, 
            color: 'var(--brown)', 
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <BookOpen size={24} /> Other guides you might like
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {related.map(b => (
              <div 
                key={b.id} 
                className="tip-card" 
                style={{ cursor: 'pointer', background: 'var(--white)', border: '1px solid var(--honey)' }}
                onClick={() => onNavigateBlog(b)}
              >
                <div style={{ overflow: 'hidden', height: '150px' }}>
                  <img 
                    src={b.img} 
                    alt={b.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <div className="tip-cat" style={{ fontSize: '0.65rem' }}>{b.cat}</div>
                  <h4 style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontSize: '0.95rem', 
                    fontWeight: 700, 
                    color: 'var(--brown)', 
                    margin: '6px 0 10px',
                    lineHeight: 1.35
                  }}>{b.title}</h4>
                  <div className="tip-read" style={{ fontSize: '0.75rem', marginTop: '10px' }}>Read guide →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
