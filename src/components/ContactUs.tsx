import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ 
            backgroundColor: 'var(--color-secondary)' 
          }}>
            <span className="text-sm" style={{ color: 'var(--color-primary)' }}>💬 Let's Talk</span>
          </div>
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div>
            <h3 className="mb-8" style={{ color: 'var(--color-primary)' }}>Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 group">
                <div
                  className="p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all group-hover:scale-110"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--color-primary)' }}>Our Office</h4>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                    123 Design Street, Bandra West<br />
                    Mumbai, Maharashtra 400050<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div
                  className="p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all group-hover:scale-110"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <Phone className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--color-primary)' }}>Phone</h4>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                    +91 22 1234 5678<br />
                    Mon-Sat: 9:00 AM - 7:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div
                  className="p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all group-hover:scale-110"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <Mail className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--color-primary)' }}>Email</h4>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                    hello@decorvista.in<br />
                    support@decorvista.in
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-72 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1Nzk5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100">
            <h3 className="mb-8" style={{ color: 'var(--color-primary)' }}>Send Us a Message</h3>
            
            {submitted ? (
              <div
                className="p-8 rounded-2xl text-center shadow-lg"
                style={{ backgroundColor: 'var(--color-success)', color: 'white' }}
              >
                <div className="text-5xl mb-4">✓</div>
                <h4 className="mb-3 text-white text-2xl">Message Sent!</h4>
                <p className="text-white text-lg">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-lg" style={{ color: 'var(--color-primary)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none transition-all shadow-sm focus:shadow-md text-lg"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-lg" style={{ color: 'var(--color-primary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none transition-all shadow-sm focus:shadow-md text-lg"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-lg" style={{ color: 'var(--color-primary)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none transition-all shadow-sm focus:shadow-md text-lg"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                    placeholder="+91"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-lg" style={{ color: 'var(--color-primary)' }}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:outline-none transition-all resize-none shadow-sm focus:shadow-md text-lg"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-lg group"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white'
                  }}
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-center mb-12" style={{ color: 'var(--color-primary)' }}>Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="mb-3" style={{ color: 'var(--color-primary)' }}>How long does delivery take?</h4>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                Delivery typically takes 2-4 weeks depending on your location and product availability. 
                Custom items may take longer.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="mb-3" style={{ color: 'var(--color-primary)' }}>Do you offer installation services?</h4>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                Yes! We provide professional installation services for all furniture. Installation costs 
                are calculated based on the complexity and your location.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="mb-3" style={{ color: 'var(--color-primary)' }}>What is your return policy?</h4>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                We offer a 30-day return policy for most items. Custom-made furniture is non-returnable 
                unless there are manufacturing defects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h4 className="mb-3" style={{ color: 'var(--color-primary)' }}>Do you ship across India?</h4>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                Yes, we ship to all major cities and towns across India. Shipping costs vary based on 
                distance and order size.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}