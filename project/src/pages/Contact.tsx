import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`pt-20 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300`}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`mt-1 block w-full rounded-md shadow-sm p-3 ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center px-4 py-3 rounded-md transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center mt-4"
                >
                  Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center mt-4"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`p-8 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <div className="space-y-6">
              <a
                href="mailto:bindhusreekodavalaganti@gmail.com"
                className="flex items-center space-x-3 text-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2"
              >
                <Mail size={24} />
                <span>bindhusreekodavalaganti@gmail.com</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2"
              >
                <Github size={24} />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2"
              >
                <Linkedin size={24} />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.3765841460557!2d-85.4851!3d32.6032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cf33f125cf2c7%3A0x7f0420fe1c9358fc!2sAuburn%20University!5e0!3m2!1sen!2sus!4v1710338000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;