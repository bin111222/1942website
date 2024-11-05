import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const caseStudies = [
  {
    id: 'sculptique',
    title: 'The Sculptique Website',
    slug: 'sculptique',
    description: 'AI-driven website with custom chatbot integration',
    image: '/case-studies/sculptique/hero.svg',
    category: 'Web Development',
    tags: ['AI Integration', 'Web Design', 'Chatbot']
  },
  {
    id: 'hks-clinic',
    title: 'HKS Clinic Digital Presence',
    slug: 'hks-clinic',
    description: 'Complete digital transformation and brand identity',
    image: '/case-studies/hks/hero.svg',
    category: 'Branding & Web',
    tags: ['Branding', 'Web Design', 'SEO']
  }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <Head>
        <title>Case Studies | 1942 Studio - Our Work</title>
        <meta name="description" content="Explore our portfolio of successful projects and digital transformations." />
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
              Our Work
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-dark-100 max-w-3xl mx-auto"
            >
              Discover how we've helped businesses transform their digital presence
            </motion.p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Link 
                  key={study.id} 
                  href={`/case-studies/${study.slug}`}
                >
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-[400px] rounded-xl overflow-hidden dark-glass gradient-border">
                      <Image
                        src={study.image}
                        layout="fill"
                        objectFit="cover"
                        alt={study.title}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-accent-primary text-sm mb-2 block">{study.category}</span>
                        <h3 className="text-2xl font-bold text-dark-50 mb-2">{study.title}</h3>
                        <p className="text-dark-100 mb-4">{study.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm rounded-full bg-dark-600/50 text-accent-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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