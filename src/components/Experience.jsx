import { motion } from 'framer-motion'
import { MdPalette, MdCampaign, MdPeople, MdLeaderboard, MdAutoAwesome } from 'react-icons/md'
import { SiInstagram } from 'react-icons/si'

const highlights = [
  { icon: <MdPalette size={18} />, label: 'Product Design', desc: 'Handmade crafts and custom gifts' },
  { icon: <MdAutoAwesome size={18} />, label: 'Branding', desc: 'Visual identity and packaging' },
  { icon: <SiInstagram size={16} />, label: 'Social Media', desc: 'Content creation and growth' },
  { icon: <MdPeople size={18} />, label: 'Customer Engagement', desc: 'Relationships and satisfaction' },
  { icon: <MdLeaderboard size={18} />, label: 'Leadership', desc: 'Managing operations solo' },
  { icon: <MdCampaign size={18} />, label: 'Marketing', desc: 'Online promotions and reach' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-background-main relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Entrepreneurship</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[1.75rem] border border-border-soft p-8 md:p-10 shadow-card"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start mb-8">
            <div>
              <span className="section-label inline-flex items-center gap-2 bg-background-lavender px-4 py-2 rounded-xl mb-4 border border-border-soft">
                Founder and Creative Designer
              </span>
              <h3 className="section-title text-2xl md:text-3xl mb-2">Magic Craft Gallery</h3>
              <p className="text-text-muted text-sm flex flex-wrap items-center gap-3">
                <span>Tharayaya, Kurunegala</span>
                <span>/</span>
                <span>Nov 2023 - Present</span>
              </p>
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-card flex-shrink-0"
              style={{ background: 'var(--gradient-button)' }}>
              <MdAutoAwesome size={28} className="text-white" />
            </div>
          </div>

          <p className="text-text-body leading-relaxed mb-8 text-base md:text-lg">
            Successfully manages an online handmade craft business specializing in customized gifts and decor products. Responsible for product design, branding, social media management, and customer engagement, demonstrating creativity, leadership, and entrepreneurial skills.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 bg-background-lavender rounded-2xl px-4 py-3.5 group transition-colors hover:bg-border-soft duration-200"
              >
                <span className="text-primary-purple mt-0.5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">{h.icon}</span>
                <div>
                  <p className="text-text-heading text-sm font-semibold">{h.label}</p>
                  <p className="text-text-muted text-xs mt-0.5">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
