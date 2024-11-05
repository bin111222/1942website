import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const services = [
  {
    title: "AI-Powered SEO",
    description: "Optimize your content with advanced AI algorithms for maximum visibility.",
    icon: "🎯"
  },
  {
    title: "Smart Content Generation",
    description: "Create engaging content automatically tailored to your audience.",
    icon: "✍️"
  },
  {
    title: "Personalized Marketing",
    description: "AI-driven strategies that adapt to your customers' behavior.",
    icon: "🎨"
  },
  {
    title: "Data Analytics",
    description: "Deep insights into your digital performance with AI analysis.",
    icon: "📊"
  }
]

export default function ServicesBento() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 