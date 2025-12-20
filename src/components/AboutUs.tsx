import { Target, Heart, Users, Award } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make quality home decoration accessible and personalized for every Indian household, regardless of budget or location.'
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We believe every home deserves to be beautiful and functional, reflecting the unique personality of its inhabitants.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated group of interior designers, climate experts, and technology professionals working together to serve you.'
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'Delivering climate-appropriate, budget-friendly, and stylish home decor solutions with exceptional customer service.'
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6">About DecorVista</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
            India's premier personalized home decor service, combining technology with design expertise
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h3 className="mb-6">Our Story</h3>
            <div className="space-y-4">
              <p>
                DecorVista was founded with a simple vision: to democratize beautiful home design in India. 
                We recognized that finding the right furniture and decor that fits your space, climate, and 
                budget can be overwhelming.
              </p>
              <p>
                Our innovative platform combines artificial intelligence with expert interior design knowledge 
                to provide personalized recommendations. We understand India's diverse climates – from humid 
                coastal regions to dry desert areas – and recommend materials that will last.
              </p>
              <p>
                With thousands of satisfied customers across India, we've helped transform homes from Mumbai 
                to Delhi, from Chennai to Kolkata, making dreams of beautiful living spaces a reality.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1630672790237-38eeb57cb60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjU4MTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Our team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="inline-flex p-3 rounded-lg mb-4"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <Icon className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                </div>
                <h4 className="mb-3">{value.title}</h4>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2" style={{ color: 'var(--color-primary)' }}>
                10,000+
              </div>
              <p style={{ color: 'var(--color-text-light)' }}>Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ color: 'var(--color-primary)' }}>
                500+
              </div>
              <p style={{ color: 'var(--color-text-light)' }}>Furniture Options</p>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ color: 'var(--color-primary)' }}>
                50+
              </div>
              <p style={{ color: 'var(--color-text-light)' }}>Cities Served</p>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ color: 'var(--color-primary)' }}>
                98%
              </div>
              <p style={{ color: 'var(--color-text-light)' }}>Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="mb-8">Why Choose DecorVista?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-5xl mb-4">🎨</div>
              <h4 className="mb-2">Personalized Design</h4>
              <p>
                Every recommendation is tailored to your specific needs, preferences, and constraints
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🌡️</div>
              <h4 className="mb-2">Climate-Smart</h4>
              <p>
                We recommend materials and finishes that thrive in your local climate conditions
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="mb-2">Budget-Friendly</h4>
              <p>
                Find beautiful solutions within your budget, with transparent pricing in INR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
