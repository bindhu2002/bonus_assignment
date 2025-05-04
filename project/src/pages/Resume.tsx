import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { Download, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const resumeUrl = '/resume.pdf';

  return (
    <div className={`pt-20 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold">Resume</h1>
          <a
            href={resumeUrl}
            download="Bindhu_Sree_Kodavalaganti_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download size={20} className="mr-2" />
            Download PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`rounded-lg shadow-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } p-8`}
        >
          {/* Fallback content in case PDF fails to load */}
          <div className="flex flex-col items-center justify-center min-h-[600px] space-y-4">
            <FileText size={48} className="text-gray-400" />
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The PDF viewer is loading. If it doesn't load, please use the download button above.
            </p>
          </div>

          <div className="aspect-[8.5/11] w-full">
            <iframe
              src={resumeUrl}
              className="w-full h-full border-0 rounded shadow-lg"
              title="Resume Preview"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;