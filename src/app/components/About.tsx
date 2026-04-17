import { motion } from 'motion/react';
import { User, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
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
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey from hardware foundations to modern technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105">
              <div
                className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(10, 10, 15, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                }}
              >
                {/* Glowing border on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(0, 212, 255, 0.3)',
                  }}
                />

                <img
                  src="https://via.placeholder.com/400x500/1a1a2e/8b5cf6?text=Professional+Photo+Here"
                  alt="Professional Profile"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(10, 10, 15, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 212, 255, 0.5)',
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                }}
              >
                <User className="w-6 h-6 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Storytelling Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-pink-400" />
              <span className="text-sm font-semibold text-pink-400 uppercase tracking-wider">
                My Story
              </span>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I am a Full-Stack Developer whose journey began in hardware and IT support, giving me a solid foundation in how systems truly work.
              </p>

              <p>
                Today, I am passionate about using modern technologies—spanning AI, Web, and Mobile development—to build impactful solutions for real-world problems.
              </p>

              <p>
                Whether it's an accounting system for rubber plantation farmers or an AI-driven healthcare app for the elderly, I build with empathy and precision.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/5 border border-cyan-400/20 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <div className="text-cyan-400 font-semibold mb-1">Hardware Foundation</div>
                <div className="text-sm text-gray-400">IT Support & Technical Sales</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/5 border border-purple-400/20 hover:bg-purple-400/10 transition-all duration-300"
              >
                <div className="text-purple-400 font-semibold mb-1">Modern Tech Stack</div>
                <div className="text-sm text-gray-400">AI, Web, Mobile Development</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}