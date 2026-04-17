import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#120418] to-[#0a0a0f]" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A luxurious showcase of modern AI and full-stack solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative rounded-[2rem] overflow-hidden min-h-[520px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.16),0_0_60px_rgba(168,85,247,0.18)]"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
            <div className="relative z-10 flex h-full flex-col p-8">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                Featured
              </span>
              <h3 className="mt-8 text-4xl font-bold text-white leading-tight">Artificer Summarizer</h3>
              <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
                Advanced AI-powered text summarization platform integrating Google's Gemini LLM and NLP techniques for instant, accurate insights.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['AI / LLM', 'Gemini API', 'NLP', 'Vercel'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-4">
                <a
                  href="https://project-artificer-summarizer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.24)]"
                >
                  Live Demo ↗
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden min-h-[240px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(168,85,247,0.18)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Huen-suk AI (Elderly Care Assistant)</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  A healthcare web app driven by empathy for elderly heart disease patients, featuring medication tracking and an AI food scanner.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AI Integration', 'UI/UX Design', 'Healthcare App', 'Vercel'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href="https://huen-suk.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.24)]"
                  >
                    Live Demo ↗
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://para-project.vercel.app/weather"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden min-h-[240px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(16,185,129,0.22)]"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(18px)',
                border: '1px solid rgba(16,185,129,0.18)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-transparent" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    Para-Project (Rubber Plantation Assistant)
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Specialized dashboard featuring real-time weather forecasting and comprehensive income-expense tracking for plantation farmers.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Weather API', 'Financial Dashboard', 'Tailwind CSS'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-emerald-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.24)]">
                    Live Demo ↗
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-6 group relative rounded-[2rem] overflow-hidden min-h-[220px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(168,85,247,0.18)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div>
                <Sparkles className="mb-4 h-8 w-8 text-purple-300" />
                <h3 className="text-2xl font-bold text-white mb-3">Notes & Mobile Apps</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A polished suite of note-taking and mobile productivity apps built with TypeScript and Python.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['TypeScript', 'Python'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-6 group relative rounded-[2rem] overflow-hidden min-h-[220px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(168,85,247,0.18)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-semibold text-purple-200">
                  AI Project
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white mb-3">Plant Disease Detection AI</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Developed a Computer Vision object detection model to identify and classify diseases in plant leaves. Managed datasets and annotations using Roboflow and trained the model leveraging Google Colab.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Google Colab', 'Computer Vision', 'Object Detection', 'Roboflow'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
