import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BlogPost } from './pages/BlogPost';
import { Helmet } from 'react-helmet-async';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      if (location.hash === '#blog') {
        const blogSection = document.getElementById('blog');
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }, [location, location.hash]); // Also watch for hash changes

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <link rel="canonical" href={`https://lab4.berlin${location.pathname}`} />
      </Helmet>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/data-mesh-hype" element={<BlogPost />} />
        {/* Redirect /blog to /#blog */}
        <Route path="/blog" element={<Navigate to="/#blog" replace />} />
        {/* Catch all other /blog/* paths and redirect to /#blog */}
        <Route path="/blog/*" element={<Navigate to="/#blog" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App