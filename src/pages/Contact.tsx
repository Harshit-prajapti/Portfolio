import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harshitkumbhkar1@gmail.com',
      link: 'mailto:your.email@example.com',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9039140984',
      link: 'tel:+15551234567',
      color: 'from-cyan-600 to-blue-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Inodre, M.P.',
      color: 'from-green-600 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Harshit-prajapti',
      color: 'hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/harshit-kumbhkar-7b07a4305/',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      color: 'hover:bg-cyan-500 hover:text-white'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Connect on Social Media</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all ${social.color} animate-slide-up hover:scale-110`}
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl">
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Quick Response</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I typically respond to messages within 24 hours during business days. For urgent matters,
                feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:scale-105 transition-transform font-medium text-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Open to Opportunities</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
            I'm currently available for freelance projects and full-time positions. Whether you're looking for
            a dedicated team member or need help with a specific project, let's connect and create something amazing together.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:scale-105 transition-transform font-medium"
          >
            <Mail size={20} />
            <span>Schedule a Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
