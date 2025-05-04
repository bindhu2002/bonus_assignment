import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useThemeStore } from '../store/themeStore';
import { Code, Brain, Database, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 50 }).map((_, i) => (
    <motion.div
      key={i}
      className={`absolute w-1 h-1 ${i % 2 === 0 ? 'bg-blue-500/20' : 'bg-purple-500/20'} rounded-full`}
      animate={{
        x: mousePosition.x + Math.random() * 100 - 50,
        y: mousePosition.y + Math.random() * 100 - 50,
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 0.5,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));

  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-500" />

      {/* Particle effect container */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* 3D Rotating Icons */}
      <div className="absolute right-10 top-1/3 transform -translate-y-1/2">
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-40 h-40"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Code className="absolute text-blue-500 transform hover:scale-110 transition-transform duration-300 cursor-pointer" size={32} style={{ top: '0%', left: '50%' }} />
            <Brain className="absolute text-purple-500 transform hover:scale-110 transition-transform duration-300 cursor-pointer" size={32} style={{ top: '50%', right: '0%' }} />
            <Database className="absolute text-green-500 transform hover:scale-110 transition-transform duration-300 cursor-pointer" size={32} style={{ bottom: '0%', left: '50%' }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } text-shadow hover:scale-105 transition-transform duration-300 relative z-10`}>
              Bindhu Sree Kodavalaganti
              <motion.span
                className="absolute -top-6 -right-6 text-yellow-400"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={24} />
              </motion.span>
            </h1>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg rounded-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="text-xl md:text-2xl mb-8 h-12 relative">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Data Scientist',
                2000,
                'AI Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-500 transition-colors duration-300`}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed hover:text-opacity-90 transition-opacity duration-300 backdrop-blur-sm bg-white/10 p-6 rounded-lg`}
          >
            Hi, I'm Bindhu Sree Kodavalaganti, a passionate Software Developer and Data Scientist specializing in AI and Machine Learning. 
            I transform complex data into actionable insights and build intelligent solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium 
                hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 
                shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get in Touch
                <motion.span
                  className="ml-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={20} />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"/>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;