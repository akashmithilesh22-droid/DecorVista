import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { CustomizationTool } from './components/CustomizationTool';

type Page = 'home' | 'about' | 'contact' | 'tool';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    setCurrentPage('tool');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromTool = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' && <HomePage onGetStarted={handleGetStarted} />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'contact' && <ContactUs />}
        {currentPage === 'tool' && <CustomizationTool onBack={handleBackFromTool} />}
      </main>

      {/* Footer */}
      {currentPage !== 'tool' && (
        <footer className="py-20 border-t relative overflow-hidden" style={{ 
          backgroundColor: 'var(--color-secondary)',
          borderColor: 'var(--color-accent)'
        }}>
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-50" style={{ 
            backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-accent))' 
          }} />
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div>
                <h4 className="mb-4 text-2xl" style={{ color: 'var(--color-primary)' }}>DecorVista</h4>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                  Transforming homes across India with personalized decor solutions.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => handleNavigate('home')}
                      className="hover:underline transition-all hover:translate-x-1 inline-block"
                      style={{ color: 'var(--color-text-light)' }}
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate('about')}
                      className="hover:underline transition-all hover:translate-x-1 inline-block"
                      style={{ color: 'var(--color-text-light)' }}
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate('contact')}
                      className="hover:underline transition-all hover:translate-x-1 inline-block"
                      style={{ color: 'var(--color-text-light)' }}
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleGetStarted}
                      className="hover:underline transition-all hover:translate-x-1 inline-block"
                      style={{ color: 'var(--color-text-light)' }}
                    >
                      Get Started
                    </button>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Services</h4>
                <ul className="space-y-3" style={{ color: 'var(--color-text-light)' }}>
                  <li>Room Design Consultation</li>
                  <li>Furniture Selection</li>
                  <li>Climate-Adaptive Solutions</li>
                  <li>Budget Planning</li>
                  <li>Installation Services</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="mb-4" style={{ color: 'var(--color-primary)' }}>Contact Us</h4>
                <ul className="space-y-3" style={{ color: 'var(--color-text-light)' }}>
                  <li>📍 Mumbai, Maharashtra</li>
                  <li>📞 +91 22 1234 5678</li>
                  <li>📧 hello@decorvista.in</li>
                  <li>🕒 Mon-Sat: 9 AM - 7 PM</li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t text-center" style={{ borderColor: 'var(--color-accent)' }}>
              <p className="mb-2" style={{ color: 'var(--color-text-light)' }}>
                © 2024 DecorVista. All rights reserved. | Made with ❤️ in India
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                Privacy Policy | Terms of Service | Shipping Policy
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}