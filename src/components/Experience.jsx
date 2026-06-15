import { motion } from 'framer-motion'
import { MdPalette, MdCampaign, MdPeople, MdLeaderboard, MdAutoAwesome, MdStorefront } from 'react-icons/md'
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
    <section id="experience" className="py-28 designed-section relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-14"
        >
          <div>
            <span className="section-kicker">07 / Entrepreneurship</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">Experience</h2>
          </div>
          <p className="section-subtitle text-base max-w-md">
            A creative business role that connects product design, branding, social media, and customer experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="experience-card motion-strip rounded-[1.75rem] p-6 md:p-8"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
            <div>
              <span className="experience-badge inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-4">
                <MdStorefront size={16} />
                Founder and Creative Designer
              </span>
              <h3 className="section-title text-2xl md:text-3xl mb-2">Magic Craft Gallery</h3>
              <p className="text-text-muted text-sm flex flex-wrap items-center gap-3">
                <span>Tharayaya, Kurunegala</span>
                <span>/</span>
                <span>Nov 2023 - Present</span>
              </p>

              <p className="text-text-body leading-relaxed mt-6 text-base md:text-lg">
                Successfully manages an online handmade craft business specializing in customized gifts and decor products. Responsible for product design, branding, social media management, and customer engagement, demonstrating creativity, leadership, and entrepreneurial skills.
              </p>

              <div className="experience-metric-row mt-7 grid grid-cols-3 gap-3">
                {['Brand', 'Design', 'Growth'].map((item, index) => (
                  <div key={item} className="rounded-2xl p-4">
                    <span className="text-primary-purple text-xs font-bold">0{index + 1}</span>
                    <p className="text-text-heading text-sm font-bold mt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="experience-visual rounded-[1.5rem] p-5">
              <div className="experience-orb">
                <MdAutoAwesome size={30} />
              </div>
              <div className="grid sm:grid-cols-2 gap-3 relative z-10">
                {highlights.map((h, index) => (
                  <motion.div
                    key={h.label}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="experience-mini-card flex items-start gap-3 rounded-2xl px-4 py-3.5 group"
                    style={{ animationDelay: `${index * 0.18}s` }}
                  >
                    <span className="experience-mini-icon mt-0.5 flex-shrink-0">{h.icon}</span>
                    <div>
                      <p className="text-text-heading text-sm font-semibold">{h.label}</p>
                      <p className="text-text-muted text-xs mt-0.5">{h.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
