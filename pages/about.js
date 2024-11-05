import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const team = [
  {
    name: 'Varil',
    role: 'Founder & CEO',
    title: 'The Brains Behind 1942',
    image: '/team/varil.jpg',
    gradient: 'from-accent-primary to-accent-secondary'
  },
  {
    name: 'Milo',
    role: 'Marketing Strategist',
    title: 'Creative Bug',
    image: '/team/milo.jpg',
    gradient: 'from-accent-secondary to-accent-tertiary'
  },
  {
    name: 'Aava',
    role: 'Content Specialist',
    title: 'Master of Words and Storytelling',
    image: '/team/aava.jpg',
    gradient: 'from-accent-tertiary to-accent-primary'
  },
  {
    name: 'Chris',
    role: 'SEO Expert',
    title: 'The Search Whisperer',
    image: '/team/chris.jpg',
    gradient: 'from-accent-primary to-accent-tertiary'
  },
  {
    name: 'Nova',
    role: 'AI Chatbot Architect',
    title: 'Conversation Guru',
    image: '/team/nova.jpg',
    gradient: 'from-accent-secondary to-accent-primary'
  },
  {
    name: 'Zane',
    role: 'Social Media Manager',
    title: 'Viral Visionary',
    image: '/team/zane.jpg',
    gradient: 'from-accent-tertiary to-accent-secondary'
  },
  {
    name: 'Kayla',
    role: 'Design Lead',
    title: 'Visual Maestro',
    image: '/team/kayla.jpg',
    gradient: 'from-accent-primary to-accent-secondary'
  },
  {
    name: 'Marsh',
    role: 'Analytics Specialist',
    title: 'Data Detective',
    image: '/team/marsh.jpg',
    gradient: 'from-accent-secondary to-accent-tertiary'
  }
]

const StorySection = () => (
  <section className="relative py-20 px-4 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-7xl font-bold mb-16 text-center text-dark-50 glow-text"
      >
        Our Story
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="dark-glass p-8 rounded-xl gradient-border relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-transparent" />
          <h3 className="text-2xl font-bold text-accent-primary mb-4">Founded in 2024</h3>
          <p className="text-dark-100 leading-relaxed">
            A collective vision of tech enthusiasts who saw a gap in the industry, recognizing the untapped potential of AI in professional workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="dark-glass p-8 rounded-xl gradient-border relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-secondary to-transparent" />
          <h3 className="text-2xl font-bold text-accent-secondary mb-4">The Mission</h3>
          <p className="text-dark-100 leading-relaxed">
            Bridging the gap between cutting-edge AI technology and practical, real-world applications for busy professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="dark-glass p-8 rounded-xl gradient-border relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-tertiary to-transparent" />
          <h3 className="text-2xl font-bold text-accent-tertiary mb-4">Our Approach</h3>
          <p className="text-dark-100 leading-relaxed">
            Combining innovation with practicality to create AI solutions that are powerful, accessible, and immediately valuable.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center text-dark-100 text-lg"
      >
        We're not just implementing AI – we're reimagining how it can enhance and streamline existing workflows.
      </motion.div>
    </div>
  </section>
)

export default function About() {
  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <Head>
        <title>Our Story | 1942 Studio - Pioneering AI Innovation</title>
        <meta name="description" content="Learn about 1942 Studio's journey in revolutionizing digital presence through AI innovation. Meet our team of experts and discover our story." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <StorySection />

        {/* Team Section */}
        <section className="px-4 py-20 dark-glass">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-dark-50 glow-text">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="dark-glass rounded-xl p-6 text-center h-full transform transition-all duration-300 group-hover:scale-105">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-75`} />
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold mb-1 text-dark-50">{member.name}</h3>
                      <h4 className="text-accent-primary mb-2">{member.role}</h4>
                      <p className="text-dark-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {member.title}
                      </p>
                    </motion.div>
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-20 blur-sm" />
                      <div className="absolute inset-0 rounded-xl border border-accent-primary animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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