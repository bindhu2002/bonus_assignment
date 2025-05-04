import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { ExternalLink } from 'lucide-react';
import type { Certification } from '../types';

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Machine Learning Specialization',
    platform: 'Coursera',
    date: '2024',
    verificationUrl: 'https://coursera.org/verify/specialization/ML123',
    logoUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Deep Learning Nanodegree',
    platform: 'Udacity',
    date: '2023',
    verificationUrl: 'https://confirm.udacity.com/123ABC',
    logoUrl: 'https://images.unsplash.com/photo-1550432163-9cb326104944?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Data Science Professional Certificate',
    platform: 'IBM',
    date: '2023',
    verificationUrl: 'https://credentials.ibm.com/123456',
    logoUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80'
  }
];

const Certifications: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`pt-20 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Certifications
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.logoUrl}
                  alt={cert.platform}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.platform}
                </p>
                <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Issued: {cert.date}
                </p>
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Verify Certificate
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;