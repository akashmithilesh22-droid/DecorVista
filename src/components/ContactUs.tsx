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
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h4 className="mb-1">Our Office</h4>
                  <p style={{ color: 'var(--color-text-light)' }}>
                    123 Design Street, Bandra West<br />
                    Mumbai, Maharashtra 400050<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <Phone className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <p style={{ color: 'var(--color-text-light)' }}>
                    +91 8988180854<br />
                    Mon-Sat: 9:00 AM - 7:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <Mail className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p style={{ color: 'var(--color-text-light)' }}>
                    akashkumar.cs24@bmsce.ac.in<br />
                    akashkumar.cs24@bmsce.ac.in
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1Nzk5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div
                className="p-6 rounded-lg text-center"
                style={{ backgroundColor: 'var(--color-success)', color: 'white' }}
              >
                <div className="text-4xl mb-2">✓</div>
                <h4 className="mb-2 text-white">Message Sent!</h4>
                <p className="text-white">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-colors"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-colors"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-colors"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                    placeholder="+91"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none transition-colors resize-none"
                    style={{ borderColor: 'var(--color-secondary)' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--color-secondary)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white'
                  }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="mb-2">How long does delivery take?</h4>
              <p>
                Delivery typically takes 2-4 weeks depending on your location and product availability. 
                Custom items may take longer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="mb-2">Do you offer installation services?</h4>
              <p>
                Yes! We provide professional installation services for all furniture. Installation costs 
                are calculated based on the complexity and your location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="mb-2">What is your return policy?</h4>
              <p>
                We offer a 30-day return policy for most items. Custom-made furniture is non-returnable 
                unless there are manufacturing defects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="mb-2">Do you ship across India?</h4>
              <p>
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
