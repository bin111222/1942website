import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormState({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <Head>
        <title>Contact Us | 1942 Studio - Get in Touch</title>
        <meta name="description" content="Contact 1942 Studio for AI-driven digital solutions. Let's discuss how we can help transform your online presence." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-dark-50 glow-text"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-dark-100 max-w-3xl mx-auto"
            >
              Let's discuss how we can transform your digital presence
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="dark-glass rounded-2xl p-8 md:p-12 gradient-border glow"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-dark-50 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-primary text-dark-50 placeholder-dark-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-dark-50 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-primary text-dark-50 placeholder-dark-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-dark-50 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-primary text-dark-50 placeholder-dark-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark-50 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-dark-600 border border-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-primary text-dark-50 placeholder-dark-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-dark-400 text-dark-200' 
                      : 'bg-accent-primary text-dark-900 hover:bg-accent-secondary'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-accent-primary/10 text-accent-primary' 
                      : 'bg-red-500/10 text-red-400'
                  }`}
                >
                  {submitStatus === 'success' 
                    ? 'Message sent successfully! We\'ll get back to you soon.' 
                    : 'Something went wrong. Please try again.'}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-accent-primary opacity-5 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-secondary opacity-5 blur-[100px]" />
        </div>
      </main>

      <Footer />
    </div>
  )
} 