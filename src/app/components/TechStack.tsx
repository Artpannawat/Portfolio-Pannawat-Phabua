import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Sparkles, 
  Smartphone,
  GitBranch,
  Cloud
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiVuedotjs,
  SiTypescript,
  SiPhp,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPython,
  SiFlutter,
  SiGooglecolab,
  SiOpencv,
  SiVercel,
  SiGit,
  SiFigma,
  SiGoogle,
  SiOpenai,
  SiZap,
} from 'react-icons/si';

const techStack = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'cyan',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    category: 'Backend & Database',
    icon: Database,
    color: 'purple',
    technologies: [
      { name: 'PHP', icon: SiPhp },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    color: 'emerald',
    technologies: [
      { name: 'React Native', icon: SiReact },
      { name: 'Flutter', icon: SiFlutter },
    ],
  },
  {
    category: 'AI & Specialized',
    icon: Sparkles,
    color: 'pink',
    technologies: [
      { name: 'AI / Gemini API', icon: SiGoogle },
      { name: 'NLP', icon: SiOpenai },
      { name: 'Google Colab', icon: SiGooglecolab },
      { name: 'Computer Vision', icon: SiOpencv },
      { name: 'Roboflow', icon: SiZap },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    color: 'blue',
    technologies: [
      { name: 'Git', icon: SiGit },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Figma', icon: SiFigma },
    ],
  },
];

export function TechStack() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'rgba(0, 212, 255, 0.3)',
          shadow: 'rgba(0, 212, 255, 0.2)',
          gradient: 'from-cyan-400 to-cyan-600',
          text: 'text-cyan-400',
          bg: 'bg-cyan-500/10',
        };
      case 'purple':
        return {
          border: 'rgba(168, 85, 247, 0.3)',
          shadow: 'rgba(168, 85, 247, 0.2)',
          gradient: 'from-purple-400 to-purple-600',
          text: 'text-purple-400',
          bg: 'bg-purple-500/10',
        };
      case 'emerald':
        return {
          border: 'rgba(16, 185, 129, 0.3)',
          shadow: 'rgba(16, 185, 129, 0.2)',
          gradient: 'from-emerald-400 to-emerald-600',
          text: 'text-emerald-400',
          bg: 'bg-emerald-500/10',
        };
      case 'pink':
        return {
          border: 'rgba(236, 72, 153, 0.3)',
          shadow: 'rgba(236, 72, 153, 0.2)',
          gradient: 'from-pink-400 to-pink-600',
          text: 'text-pink-400',
          bg: 'bg-pink-500/10',
        };
      case 'blue':
        return {
          border: 'rgba(59, 130, 246, 0.3)',
          shadow: 'rgba(59, 130, 246, 0.2)',
          gradient: 'from-blue-400 to-blue-600',
          text: 'text-blue-400',
          bg: 'bg-blue-500/10',
        };
      default:
        return {
          border: 'rgba(0, 212, 255, 0.3)',
          shadow: 'rgba(0, 212, 255, 0.2)',
          gradient: 'from-cyan-400 to-cyan-600',
          text: 'text-cyan-400',
          bg: 'bg-cyan-500/10',
        };
    }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#16041c] to-[#0a0a0f]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            const colors = getColorClasses(stack.color);
            
            return (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative rounded-3xl p-6 transition-all duration-300"
                style={{
                  background: 'rgba(10, 10, 15, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 60px ${colors.shadow}`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${colors.bg} transition-transform duration-300 group-hover:scale-110`}
                      style={{
                        border: `1px solid ${colors.border}`,
                        boxShadow: `0 0 20px ${colors.shadow}`,
                      }}
                    >
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>
                    {stack.category}
                  </h3>

                  {/* Technologies */}
                  <div className="space-y-3">
                    {stack.technologies.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/tech"
                      >
                        <tech.icon className="w-6 h-6 text-gray-400 group-hover/tech:text-white transition-colors" />
                        <span className="text-gray-300 font-medium group-hover/tech:text-white transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full"
            style={{
              background: 'rgba(10, 10, 15, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
            }}
          >
            <Cloud className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300 font-medium">
              Constantly learning and exploring new technologies
            </span>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
