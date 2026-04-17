import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, Heart, Send } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:pannawatphabua@gmail.com',
      color: 'cyan',
      handle: 'pannawatphabua@gmail.com',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Artpannawat',
      color: 'purple',
      handle: 'github.com/Artpannawat',
    },
    {
      name: 'Phone',
      icon: Phone,
      url: 'tel:+660612681485',
      color: 'pink',
      handle: '+66 061 268 1485',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'rgba(0, 212, 255, 0.3)',
          shadow: 'rgba(0, 212, 255, 0.4)',
          text: 'text-cyan-400',
          hover: 'group-hover:text-cyan-300',
        };
      case 'blue':
        return {
          border: 'rgba(59, 130, 246, 0.3)',
          shadow: 'rgba(59, 130, 246, 0.4)',
          text: 'text-blue-400',
          hover: 'group-hover:text-blue-300',
        };
      case 'purple':
        return {
          border: 'rgba(168, 85, 247, 0.3)',
          shadow: 'rgba(168, 85, 247, 0.4)',
          text: 'text-purple-400',
          hover: 'group-hover:text-purple-300',
        };
      case 'pink':
        return {
          border: 'rgba(236, 72, 153, 0.3)',
          shadow: 'rgba(236, 72, 153, 0.4)',
          text: 'text-pink-400',
          hover: 'group-hover:text-pink-300',
        };
      default:
        return {
          border: 'rgba(0, 212, 255, 0.3)',
          shadow: 'rgba(0, 212, 255, 0.4)',
          text: 'text-cyan-400',
          hover: 'group-hover:text-cyan-300',
        };
    }
  };

  return (
    <footer id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-[#0a0a0f] to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Send className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
              Let's Connect
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's build something
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              extraordinary together.
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out for opportunities or collaboration. I'm always excited to work on innovative projects and connect with fellow developers.
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            const colors = getColorClasses(link.color);
            
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: 'rgba(10, 10, 15, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${colors.border}`,
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 40px ${colors.shadow}`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon with micro-interaction */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 rounded-xl mb-4 ${colors.text}`}
                    style={{
                      background: `${colors.border.replace('0.3', '0.1')}`,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Label */}
                  <h3 className={`text-xl font-bold mb-2 ${colors.text} ${colors.hover} transition-colors`}>
                    {link.name}
                  </h3>
                  
                  {/* Handle */}
                  <p className="text-gray-400 text-sm break-all group-hover:text-gray-300 transition-colors">
                    {link.handle}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap mb-6">
            <span>© 2026 Full-Stack Developer Portfolio.</span>
            <span className="flex items-center gap-2">
              Crafted with
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
              and code
            </span>
          </p>

          {/* Additional Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>Loei Tech Graduate</span>
            <span>•</span>
            <span>Software Engineer</span>
            <span>•</span>
            <span>Thailand</span>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none" />
      </div>
    </footer>
  );
}
