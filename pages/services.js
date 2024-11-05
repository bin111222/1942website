import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GlassCard from '../components/GlassCard'

const services = [
  {
    title: "AI-Powered Website Design & Development",
    description: "Transform your digital presence with intelligent tools that automate design, development, and optimization processes.",
    icon: "🎨",
    features: [
      "AI-driven website builders for automated layout and content",
      "Personalized user experiences with AI algorithms",
      "Predictive analytics for user behavior insights",
      "Mobile-first responsive design optimization"
    ],
    benefits: [
      "Faster development time",
      "Improved user engagement",
      "Better conversion rates",
      "Data-driven design decisions"
    ]
  },
  {
    title: "Branding & Graphic Design Amplified by AI",
    description: "Create stunning visual identities using AI-powered design tools that ensure consistency and impact.",
    icon: "✨",
    features: [
      "AI-powered logo design and brand identity creation",
      "Automated graphic creation for marketing materials",
      "Intelligent brand asset management system",
      "AI-driven visual content optimization"
    ],
    benefits: [
      "Consistent brand identity",
      "Rapid design iterations",
      "Cost-effective solutions",
      "Scalable design systems"
    ]
  },
  {
    title: "Content Creation Reimagined",
    description: "Transform your content strategy with AI-powered tools that create engaging, optimized content at scale.",
    icon: "📝",
    features: [
      "AI-powered copywriting and content optimization",
      "Automated video editing and production",
      "AI-generated imagery and video content",
      "Strategic content planning with AI insights"
    ],
    benefits: [
      "Efficient content creation",
      "Improved user engagement",
      "Data-driven content optimization",
      "Scalable content strategy"
    ]
  },
  {
    title: "SEO & Online Presence Optimization",
    description: "Maximize your digital visibility with AI-driven SEO strategies and analytics.",
    icon: "🎯",
    features: [
      "AI-powered keyword research and analysis",
      "Automated content optimization for search",
      "AI-driven social media management",
      "Strategic link building automation"
    ],
    benefits: [
      "Improved search engine rankings",
      "Increased organic traffic",
      "Data-driven SEO strategies",
      "Scalable SEO solutions"
    ]
  },
  {
    title: "AI-Driven Digital Marketing",
    description: "Leverage AI to create targeted, data-driven marketing campaigns that deliver results.",
    icon: "📊",
    features: [
      "AI-optimized ad campaign management",
      "Personalized email marketing automation",
      "Intelligent chatbot integration",
      "Conversion rate optimization with AI"
    ],
    benefits: [
      "Targeted marketing campaigns",
      "Increased conversion rates",
      "Data-driven marketing strategies",
      "Scalable marketing solutions"
    ]
  }
]

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "1942 Studio",
    "url": "https://www.1942studio.com",
    "description": "AI-driven digital solutions for modern businesses",
    "offers": services.map(service => ({
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "1942 Studio"
      }
    }))
  }

  return (
    <div className="min-h-screen bg-dark-900 grid-bg">
      <Head>
        <title>AI-Powered Digital Services | 1942 Studio</title>
        <meta name="description" content="Transform your digital presence with our AI-powered services including website development, branding, content creation, and digital marketing solutions." />
        <meta name="keywords" content="AI website development, AI branding, content creation, digital marketing, SEO optimization" />
        <link rel="canonical" href="https://www.1942studio.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-dark-50 glow-text"
            >
              AI-Powered Digital Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-dark-100 max-w-3xl mx-auto"
            >
              Harness the power of AI to deliver cutting-edge creative solutions, saving you time and amplifying your brand's impact.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Service Info */}
                  <div className="h-full">
                    <GlassCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    >
                      <div className="mt-6">
                        <h4 className="text-accent-primary font-semibold mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-dark-100">
                              <span className="mr-2 text-accent-primary">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Benefits */}
                  <div className="h-full">
                    <div className="dark-glass rounded-xl p-6 h-full gradient-border glow">
                      <h4 className="text-xl font-semibold mb-4 text-dark-50">Benefits</h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, i) => (
                          <motion.li
                            key={benefit}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center text-dark-100"
                          >
                            <span className="w-8 h-8 flex items-center justify-center bg-accent-primary/10 rounded-full mr-3">
                              <span className="text-accent-primary">✓</span>
                            </span>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 dark-glass">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-50 glow-text">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-dark-100 mb-8">
              Contact us today to explore how our AI-powered solutions can elevate your brand.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-accent-primary text-dark-900 rounded-lg hover:bg-accent-secondary transition-all duration-300"
            >
              Get Started
            </motion.a>
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