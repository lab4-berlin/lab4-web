import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BlogPost1, BlogPost2 } from './pages/BlogPost';
import React from 'react';

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
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/data-mesh-hype" element={<BlogPost1 />} />
        <Route path="/blog/data-mesh-people" element={<BlogPost2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;