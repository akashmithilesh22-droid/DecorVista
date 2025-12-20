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
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Home className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
            <span className="text-2xl" style={{ 
              fontFamily: "'Playfair Display', serif",
              color: 'var(--color-primary)'
            }}>
              DecorVista
            </span>
          </button>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? 'bg-opacity-10'
                      : 'hover:bg-opacity-5'
                  }`}
                  style={{
                    backgroundColor: currentPage === item.id ? 'var(--color-primary)' : 'transparent',
                    color: currentPage === item.id ? 'var(--color-primary-dark)' : 'var(--color-text)'
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => onNavigate('tool')}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => onNavigate('tool')}
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id ? 'bg-opacity-10' : ''
                  }`}
                  style={{
                    backgroundColor: currentPage === item.id ? 'var(--color-primary)' : 'transparent',
                    color: currentPage === item.id ? 'var(--color-primary-dark)' : 'var(--color-text)'
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
