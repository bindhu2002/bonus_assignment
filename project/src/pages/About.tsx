import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import {
  Code,
  Database,
  Brain,
  GitBranch,
  Terminal,
  LineChart,
  Users,
  Clock,
  MessageSquare
} from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code, category: 'Programming' },
  { name: 'SQL', icon: Database, category: 'Database' },
  { name: 'TensorFlow', icon: Brain, category: 'AI/ML' },
  { name: 'Git', icon: GitBranch, category: 'Tools' },
  { name: 'Shell Scripting', icon: Terminal, category: 'Programming' },
  { name: 'Data Analysis', icon: LineChart, category: 'Analytics' },
  { name: 'Collaboration', icon: Users, category: 'Soft Skills' },
  { name: 'Time Management', icon: Clock, category: 'Soft Skills' },
  { name: 'Communication', icon: MessageSquare, category: 'Soft Skills' }
];

const timeline = [
  {
    year: '2023 - 2025',
    title: 'Masters in Computer Science',
    organization: 'Auburn University',
    description: 'Focusing on AI, Machine Learning, and Data Science'
  },
  {
    year: '2022 - 2023',
    title: 'Process Executive',
    organization: 'Cognizant Technology Solutions',
    description: 'Led data analysis projects and process optimization initiatives'
  }
];

const About: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`pt-20 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            I am a dedicated Data Scientist with a passion for solving complex problems through data-driven approaches.
            My journey in technology is driven by curiosity and a constant desire to learn and innovate.
            I specialize in developing AI and ML solutions that bring tangible value to businesses and users alike.
          </p>
        </section>

        {/* Skills Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center space-x-3">
                  <skill.icon className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">{skill.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {skill.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Experience & Education</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative pl-8 border-l-2 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                <div className="mb-1 text-blue-500 font-semibold">{item.year}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.organization}
                </p>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;