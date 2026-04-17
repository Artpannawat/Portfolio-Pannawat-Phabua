import { motion } from 'motion/react';
import { Briefcase, Video, Wrench } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Developer (Intern)',
    company: 'iConnext',
    type: 'Intern',
    period: '2025',
    description: 'Engineered a dynamic Video Recommendation system, developing both the responsive frontend and the robust backend architecture. Optimized relational database queries using MySQL to ensure fast and scalable data retrieval.',
    skills: ['MySQL', 'Backend', 'Frontend', 'Database Design'],
    color: 'cyan',
    icon: Video,
  },
  {
    title: 'IT Support & Technical Sales (Intern)',
    company: 'Advice',
    type: 'Intern',
    period: '2024',
    description: 'Delivered comprehensive IT support and hardware troubleshooting. Acted as a technical sales consultant providing tailored IT solutions.',
    skills: ['IT Support', 'Hardware Troubleshooting', 'Technical Sales'],
    color: 'purple',
    icon: Wrench,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a0b2e]/50 to-[#0a0a0f]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building expertise across the technology stack with premium execution
          </p>
        </motion.div>

        {/* Premium Timeline Structure */}
        <div className="relative">
          {/* Vertical Timeline Line with Glow */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-ml-px">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent"
              style={{
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
              }}
            />
          </div>

          {/* Timeline Items */}
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 md:mb-24 ${
                  isLeft ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                }`}
              >
                <div className={`flex ${isLeft ? 'md:flex-row-reverse md:justify-end' : 'md:flex-row'} items-start gap-6 md:gap-0`}>
                  {/* Timeline Dot with Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Outer Glow Ring */}
                      <div
                        className="absolute inset-0 rounded-full animate-pulse"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: `radial-gradient(circle, ${exp.color === 'cyan' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(168, 85, 247, 0.3)'}, transparent)`,
                          transform: 'translate(-50%, -50%)',
                          left: '50%',
                          top: '50%',
                        }}
                      />
                      
                      {/* Icon Container */}
                      <div
                        className="relative w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: exp.color === 'cyan' 
                            ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(6, 182, 212, 0.3))'
                            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 38, 211, 0.3))',
                          backdropFilter: 'blur(10px)',
                          border: `2px solid ${exp.color === 'cyan' ? 'rgba(0, 212, 255, 0.5)' : 'rgba(168, 85, 247, 0.5)'}`,
                          boxShadow: `0 0 30px ${exp.color === 'cyan' ? 'rgba(0, 212, 255, 0.4)' : 'rgba(168, 85, 247, 0.4)'}`,
                        }}
                      >
                        <Icon className={`w-7 h-7 ${exp.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-24 md:ml-0 ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative rounded-3xl p-8 transition-all duration-300"
                      style={{
                        background: 'rgba(10, 10, 15, 0.6)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${exp.color === 'cyan' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`,
                        boxShadow: `0 0 40px ${exp.color === 'cyan' ? 'rgba(0, 212, 255, 0.1)' : 'rgba(168, 85, 247, 0.1)'}`,
                      }}
                    >
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at ${isLeft ? 'right' : 'left'}, ${exp.color === 'cyan' ? 'rgba(0, 212, 255, 0.15)' : 'rgba(168, 85, 247, 0.15)'}, transparent)`,
                        }}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <Briefcase className={`w-5 h-5 ${exp.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${exp.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'}`}>
                              {exp.type}
                            </span>
                          </div>
                          <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className={`text-xl font-semibold mb-4 ${exp.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`}>
                          {exp.company}
                        </p>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Timeline End Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 bottom-0 transform md:-translate-x-1/2 translate-y-1/2"
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
