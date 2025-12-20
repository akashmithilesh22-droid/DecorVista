import { Sparkles, Home as HomeIcon, Palette, DollarSign, Cloud, Plus } from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {
  const features = [
    {
      icon: HomeIcon,
      title: 'Room Selection',
      description: 'Choose from 8 different room types tailored to your needs',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjU3MzQ0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Palette,
      title: 'Customization',
      description: 'Personalize every detail to match your unique style',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2NTc5ODgzN3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: DollarSign,
      title: 'Budget-Friendly Options',
      description: 'Find perfect furniture within your budget in INR',
      image: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZXxlbnwxfHx8fDE3NjU3ODU1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Cloud,
      title: 'Climate-Adaptive',
      description: 'Get recommendations suited to your local climate',
      image: 'https://images.unsplash.com/photo-1661024768242-5fd7c8f1e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxjb255JTIwcGF0aW8lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY1ODE4MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Plus,
      title: 'Extra Features',
      description: 'Add lighting, wall art, plants, and smart home features',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHN8ZW58MXx8fHwxNzY1NzgyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1Nzk5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury home interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 text-white">
              Transform Your Space with DecorVista
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Personalized Home Decor Solutions – Tailored to Your Style, Climate, and Budget
            </p>
            <button
              onClick={onGetStarted}
              className="flex items-center space-x-3 px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg text-lg"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Designing Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Key Features</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
              Discover how DecorVista makes home decoration simple, personalized, and affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <h4>{feature.title}</h4>
                    </div>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="max-w-4xl mx-auto text-center">
         <h2 className="mb-6" style={{ color: '#FFFFFF', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
  Transform Your Space with DecorVista
</h2>
          <p className="text-xl mb-8 text-gray-200" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          </p>
          <button
            onClick={onGetStarted}
            className="px-10 py-4 rounded-lg transition-all hover:scale-105 shadow-lg text-lg inline-flex items-center space-x-3"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white'
            }}
          >
            <Sparkles className="w-6 h-6" />
            <span>Get Started</span>
          </button>
        </div>
      </section>
    </div>
  );
}
