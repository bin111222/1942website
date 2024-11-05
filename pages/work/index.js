import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { caseStudies } from '../../data/case-studies'

export default function Work() {
  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <Head>
        <title>Our Work | 1942 Studio - Featured Projects</title>
        <meta name="description" content="Explore our portfolio of AI-driven digital solutions and successful client projects." />
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
              Featured Work
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
                <Link key={study.id} href={`/work/${study.slug}`}>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-[400px] rounded-xl overflow-hidden dark-glass gradient-border">
                      <Image
                        src={study.thumbnail}
                        layout="fill"
                        objectFit="cover"
                        alt={study.title}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-dark-50 mb-2">{study.title}</h3>
                        <p className="text-dark-100 mb-4">{study.description}</p>
                        <div className="flex flex-wrap gap-2">
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
                    </div>
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 