import { motion } from 'framer-motion'
import Image from 'next/image'
import NeumorphicButton from './NeumorphicButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 max-w-[90rem] mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-20"
        >
          <Image src="/globe.svg" width={400} height={400} alt="" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
        >
          Revolutionize Your Online Presence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          At 1942 Studio, we leverage cutting-edge AI technology to transform your digital footprint and amplify your impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <NeumorphicButton href="/services">
            Discover How
          </NeumorphicButton>
        </motion.div>
      </div>
    </section>
  )
} 