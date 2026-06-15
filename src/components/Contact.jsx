import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'
import { contact } from '../data/portfolioData'

const contactItems = [
  { icon: <MdEmail size={18} />, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: <MdPhone size={18} />, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
  { icon: <MdLocationOn size={18} />, label: 'Location', value: 'Kurunegala, Sri Lanka', href: null },
]

const socialLinks = [
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: contact.linkedin },
  { icon: <FiGithub size={18} />, label: 'GitHub', href: contact.github },
  { icon: <SiBehance size={18} />, label: 'Behance', href: contact.behance },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 md:py-32 bg-background-main relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-primary-dark text-white p-5 md:p-8 shadow-premium"
        >
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-6">
            <div className="p-4 md:p-6 flex flex-col justify-between gap-10">
              <div>
                <span className="text-accent-cyan text-xs font-bold uppercase tracking-[0.18em]">07 / Contact</span>
                <h2 className="section-title text-white text-4xl md:text-6xl mt-4 leading-tight">
                  Let us design something clear and beautiful.
                </h2>
                <p className="text-white/68 text-lg leading-relaxed mt-6 max-w-lg">
                  Have a design idea, portfolio question, or collaboration in mind? Send a message and I will get back to you.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {contactItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 mb-2 text-accent-cyan">
                      {item.icon}
                      <p className="text-white/60 text-xs font-bold uppercase tracking-[0.14em]">{item.label}</p>
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm font-semibold hover:text-accent-cyan transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-semibold">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white hover:text-primary-dark transition-colors"
                    aria-label={s.label}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white text-text-body rounded-[1.5rem] p-6 md:p-8">
              <h3 className="section-title text-3xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-muted text-xs font-bold uppercase tracking-[0.14em] mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Amani Dulfi"
                      className="premium-input"
                    />
                  </div>
                  <div>
                    <label className="block text-text-muted text-xs font-bold uppercase tracking-[0.14em] mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="hello@example.com"
                      className="premium-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-muted text-xs font-bold uppercase tracking-[0.14em] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell me about your project..."
                    className="premium-input resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="primary-btn w-full py-4 text-sm font-bold inline-flex items-center justify-center gap-2"
                >
                  {sent ? 'Message Sent' : 'Send Message'}
                  <FiSend size={16} />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
