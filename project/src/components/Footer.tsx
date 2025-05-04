import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const Footer: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Bindhu Sree Kodavalaganti. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/bindhu2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bindhusree-kodavalaganti-217b5031b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bindhusreekodavalaganti@gmail.com"
              className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;