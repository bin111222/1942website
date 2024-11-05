import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NeumorphicButton from '../components/NeumorphicButton'
import { useEffect, useRef, useState } from 'react'
import GlassCard from '../components/GlassCard'
import AnimatedBackground from '../components/AnimatedBackground'
import Link from 'next/link'

const services = [
  {
    title: "AI-Powered Website Design",
    description: "Streamline your web presence with intelligent tools that automate design, development, and optimization processes.",
    icon: "🎨",
    delay: 0.2
  },
  {
    title: "Branding & Design with AI",
    description: "Create stunning visual identities using AI-powered design tools that ensure consistency and impact.",
    icon: "✨",
    delay: 0.3
  },
  {
    title: "Smart Content Creation",
    description: "Transform your content strategy with AI-powered tools that create engaging, optimized content at scale.",
    icon: "📝",
    delay: 0.4
  }
]

const featuredWork = [
  {
    id: 'sculptique',
    title: 'The Sculptique Website',
    slug: 'sculptique',
    description: 'AI-driven website with custom chatbot integration',
    image: '/case-studies/sculptique/hero.svg',
    tags: ['Web Design', 'AI Integration']
  },
  {
    id: 'hks-clinic',
    title: 'HKS Clinic Digital Presence',
    slug: 'hks-clinic',
    description: 'Full-stack development with AI-powered analytics',
    image: '/case-studies/hks/hero.svg',
    tags: ['Platform', 'Analytics']
  }
]

export default function Home() {
  const mouseRef = useRef({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      mouseRef.current = {
        x: (clientX / window.innerWidth - 0.5) * 20,
        y: (clientY / window.innerHeight - 0.5) * 20
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { number: '35%', label: 'increase in leads' },
    { number: '40%', label: 'increase in online presence' },
    { number: '7+', label: 'years in the business' },
    { number: '200+', label: 'artists collaborated with' },
    { number: '1000+', label: 'marketing materials created' },
    { number: '100s', label: 'of hours of content shot' },
    { number: '1000+', label: 'images delivered' },
    { number: '500+', label: 'blogs written' }
    
  ]

  const clients = [
    { name: 'The Sculptique', logo: '/clients/sculptique.svg' },
    { name: 'HKS Clinic', logo: '/clients/hks.svg' },
    { name: 'Client 3', logo: '/clients/client3.svg' },
    { name: 'Client 4', logo: '/clients/client4.svg' },
    { name: 'Client 5', logo: '/clients/client5.svg' },
    { name: 'Client 6', logo: '/clients/client6.svg' }
  ]

  const StatsCard = ({ stat, index }) => {
    const [isInView, setIsInView] = useState(false)

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white border-opacity-20 shadow-lg group hover:shadow-xl transition-all duration-300"
        onViewportEnter={() => setIsInView(true)}
      >
        <motion.span
          className="block text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 200,
            delay: index * 0.1,
            duration: 0.8
          }}
        >
          {stat.number}
        </motion.span>
        <motion.span 
          className="text-gray-600 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: (index * 0.1) + 0.3 }}
        >
          {stat.label}
        </motion.span>
        
        {/* Decorative elements */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900 grid-bg relative">
      <AnimatedBackground />
      <Head>
        <title>1942 Studio | Building Digital Presence with AI-Driven Precision</title>
        <meta name="description" content="1942 Studio specializes in AI-driven website development, chatbots, and content creation to enhance your digital presence." />
        <meta name="keywords" content="AI website development, chatbots, content creation, digital presence" />
        <link rel="canonical" href="https://www.1942studio.com" />
      </Head>

      <Navbar />

      <main>
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(0,212,255,0.15) 0%, transparent 70%)'
              }}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
              style={{
                transform: mouseRef.current ? `translate(-50%, -50%) perspective(1000px) rotateY(${mouseRef.current.x}deg) rotateX(${-mouseRef.current.y}deg)` : undefined
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/globe.svg"
                  layout="fill"
                  className="text-accent-primary"
                  alt=""
                />
                {/* Interactive Particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-accent-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: Math.random() * 800 - 400,
                      y: Math.random() * 800 - 400,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary glow-text"
            >
              Building Your Digital Presence with AI-Driven Precision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-dark-100 mb-12 max-w-3xl mx-auto"
            >
              Transform your online presence with our cutting-edge AI solutions for web development, chatbots, and content creation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <NeumorphicButton href="/services">
                Discover Our Work
              </NeumorphicButton>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 px-4 relative overflow-hidden dark-glass">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center relative z-10"
          >
            <div className="relative inline-block">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary glow-text"
              >
                Tomorrow's Growth
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-secondary to-accent-tertiary glow-text"
              >
                Starts Today
              </motion.h2>
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="dark-glass p-6 rounded-xl gradient-border glow"
                >
                  <motion.span
                    className="block text-3xl md:text-4xl font-bold text-dark-50 mb-2 glow-text"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1
                    }}
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-dark-100">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 dark-glass">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-dark-50 glow-text"
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <GlassCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    className="h-full flex flex-col"
                  >
                    <div className="flex-grow" />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-dark-50 glow-text"
            >
              Featured Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredWork.map((project, index) => (
                <Link 
                  key={project.id} 
                  href={`/case-studies/${project.slug}`}
                >
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer gradient-border glow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/90" />
                    <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-6 text-dark-50 z-10">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-dark-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mt-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-sm px-3 py-1 bg-dark-500/50 rounded-full text-accent-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                </Link>
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