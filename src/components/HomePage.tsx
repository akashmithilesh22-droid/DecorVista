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
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNjY1Nzk5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury home interior"
            className="w-full h-full object-cover"
          />
          {/* Strong dark overlay for maximum text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
          {/* Additional vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-white" style={{ 
              textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' 
            }}>
              Transform Your Space with DecorVista
            </h1>
            <p className="text-2xl mb-10 leading-relaxed" style={{ 
              color: '#f0f0f0',
              textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.6)' 
            }}>
              Personalized Home Decor Solutions – Tailored to Your Style, Climate, and Budget
            </p>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl transition-all hover:scale-105 hover:shadow-2xl shadow-xl text-lg group"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Start Designing Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ 
              backgroundColor: 'var(--color-secondary)' 
            }}>
              <span className="text-sm" style={{ color: 'var(--color-primary)' }}>✨ Our Key Features</span>
            </div>
            <h2 className="mb-6">Discover DecorVista</h2>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
              Making home decoration simple, personalized, and affordable for every Indian household
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                      >
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <h4 className="group-hover:translate-x-1 transition-transform">{feature.title}</h4>
                    </div>
                    <p className="leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ 
          backgroundColor: 'var(--color-primary)' 
        }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ 
          backgroundColor: 'var(--color-accent)' 
        }} />
        
        <div className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16">
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'white'
            }}>
              <span className="text-sm">🏡 Ready to Begin?</span>
            </div>
            <h2 className="mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
              Start your personalized home decor journey today with our interactive 3-step customization tool
            </p>
            <button
              onClick={onGetStarted}
              className="px-12 py-5 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl text-lg inline-flex items-center gap-3 group"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Get Started Free</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}