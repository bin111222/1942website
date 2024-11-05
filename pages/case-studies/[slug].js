import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

// Temporary case studies data (move to data/case-studies.js later)
const caseStudiesData = {
  'sculptique': {
    title: 'The Sculptique Website',
    description: 'AI-driven website with custom chatbot integration',
    heroImage: '/case-studies/sculptique/hero.svg',
    challenge: 'The Sculptique needed a modern website that could handle complex customer inquiries automatically while providing detailed analytics about user behavior and preferences.',
    solution: 'We developed a custom AI-powered chatbot that could understand and respond to complex queries about their services. The website was built with Next.js for optimal performance and integrated with advanced analytics tools.',
    results: [
      '40% increase in leads',
      '65% reduction in customer service workload',
      '85% positive feedback on chatbot interactions',
      'Improved user engagement metrics'
    ],
    technologies: ['Next.js', 'AI Chatbot', 'Custom CMS', 'Analytics Dashboard'],
    images: [
      {
        src: '/case-studies/sculptique/homepage.svg',
        caption: 'Modern, responsive homepage design'
      },
      {
        src: '/case-studies/sculptique/chatbot.svg',
        caption: 'AI-powered chatbot interface'
      },
      {
        src: '/case-studies/sculptique/analytics.svg',
        caption: 'Custom analytics dashboard'
      }
    ]
  },
  'hks-clinic': {
    title: 'HKS Clinic Digital Presence',
    description: 'Complete digital transformation and brand identity',
    heroImage: '/case-studies/placeholder-hero.svg',
    challenge: 'HKS Clinic needed to establish a strong digital presence and streamline their patient booking process while maintaining a professional and trustworthy image.',
    solution: 'We created a comprehensive digital strategy including a new brand identity, website with online booking system, and targeted digital marketing campaigns.',
    results: [
      '200% increase in online bookings',
      'Enhanced brand visibility',
      '150% increase in organic traffic',
      'Reduced administrative workload'
    ],
    technologies: ['Next.js', 'Booking System', 'SEO', 'Analytics'],
    images: [
      {
        src: '/case-studies/hks/branding.svg',
        caption: 'New brand identity system'
      },
      {
        src: '/case-studies/hks/website.svg',
        caption: 'Responsive website design'
      },
      {
        src: '/case-studies/hks/booking.svg',
        caption: 'Online booking system'
      }
    ]
  }
}

export default function CaseStudy() {
  const router = useRouter()
  const { slug } = router.query
  const study = caseStudiesData[slug]

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!study) {
    return (
      <div className="min-h-screen bg-dark-900 grid-bg">
        <Navbar />
        <div className="pt-20 px-4 text-center">
          <h1 className="text-4xl text-dark-50">Case Study Not Found</h1>
          <Link href="/case-studies">
            <a className="text-accent-primary hover:text-accent-secondary">
              Back to Case Studies
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <Head>
        <title>{study.title} | 1942 Studio Case Study</title>
        <meta name="description" content={study.description} />
      </Head>

      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh]">
          <Image
            src={study.heroImage}
            layout="fill"
            objectFit="cover"
            alt={study.title}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-6xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-dark-50 mb-4 glow-text"
              >
                {study.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-dark-100 max-w-2xl"
              >
                {study.description}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          {/* Challenge Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-dark-50 mb-6 glow-text">The Challenge</h2>
            <div className="dark-glass rounded-xl p-8 gradient-border glow">
              <p className="text-dark-100">{study.challenge}</p>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-dark-50 mb-6 glow-text">Our Solution</h2>
            <div className="dark-glass rounded-xl p-8 gradient-border glow">
              <p className="text-dark-100">{study.solution}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-dark-600/50 text-accent-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Results Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-dark-50 mb-6 glow-text">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <motion.div
                  key={result}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="dark-glass rounded-xl p-6 gradient-border glow"
                >
                  <p className="text-dark-50">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Project Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-dark-50 mb-6 glow-text">Project Gallery</h2>
            <div className="space-y-8">
              {study.images.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-[400px] rounded-xl overflow-hidden gradient-border glow"
                >
                  <Image
                    src={image.src}
                    layout="fill"
                    objectFit="cover"
                    alt={image.caption}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900">
                    <p className="text-dark-100">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

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