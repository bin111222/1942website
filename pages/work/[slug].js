import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { caseStudies } from '../../data/case-studies'

export default function CaseStudy() {
  const router = useRouter()
  const { slug } = router.query
  const study = caseStudies.find(s => s.slug === slug)

  if (!study) return null

  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <Head>
        <title>{study.title} | 1942 Studio Case Study</title>
        <meta name="description" content={study.description} />
      </Head>

      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[70vh]">
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
                className="text-4xl md:text-6xl font-bold text-dark-50 mb-4"
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
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          {/* Challenge Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-dark-50 mb-6">The Challenge</h2>
            <div className="dark-glass rounded-xl p-8 gradient-border">
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
            <h2 className="text-2xl font-bold text-dark-50 mb-6">Our Solution</h2>
            <div className="dark-glass rounded-xl p-8 gradient-border">
              <p className="text-dark-100">{study.solution}</p>
            </div>
          </motion.section>

          {/* Results Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-dark-50 mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <motion.div
                  key={result}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="dark-glass rounded-xl p-6 gradient-border"
                >
                  <p className="text-dark-50">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Project Images */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-dark-50 mb-6">Project Gallery</h2>
            <div className="space-y-8">
              {study.images.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-[400px] rounded-xl overflow-hidden gradient-border"
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
      </main>

      <Footer />
    </div>
  )
} 