import { Home, Info, Mail, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact Us', icon: Mail },
    { id: 'tool', label: 'Get Started', icon: Sparkles },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Home className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
            <span className="text-2xl" style={{ 
              fontFamily: "'Playfair Display', serif",
              color: 'var(--color-primary)'
            }}>
              DecorVista
            </span>
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              const isGetStarted = item.id === 'tool';
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-lg 
                    transition-all duration-200
                    ${isActive 
                      ? 'shadow-sm' 
                      : 'hover:shadow-sm'
                    }
                    ${isGetStarted && !isActive
                      ? 'hover:scale-105'
                      : ''
                    }
                  `}
                  style={{
                    backgroundColor: isActive 
                      ? 'var(--color-primary)' 
                      : isGetStarted 
                        ? 'var(--color-secondary)'
                        : 'transparent',
                    color: isActive 
                      ? 'white' 
                      : isGetStarted
                        ? 'var(--color-primary)'
                        : 'var(--color-text)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = isGetStarted 
                        ? 'var(--color-primary)' 
                        : 'var(--color-secondary)';
                      e.currentTarget.style.color = isGetStarted 
                        ? 'white' 
                        : 'var(--color-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = isGetStarted 
                        ? 'var(--color-secondary)' 
                        : 'transparent';
                      e.currentTarget.style.color = isGetStarted 
                        ? 'var(--color-primary)' 
                        : 'var(--color-text)';
                    }
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu - Simplified */}
          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`p-2.5 rounded-lg transition-all ${
                    isActive ? 'shadow-sm' : 'hover:shadow-sm'
                  }`}
                  style={{
                    backgroundColor: isActive 
                      ? 'var(--color-primary)' 
                      : 'transparent',
                    color: isActive ? 'white' : 'var(--color-text)',
                  }}
                  title={item.label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}