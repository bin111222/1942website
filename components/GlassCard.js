import { motion } from 'framer-motion'

export default function GlassCard({ title, description, icon, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative dark-glass rounded-xl p-6 glow overflow-hidden"
    >
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, #00D4FF, #FF3DFF, #7000FF, #00D4FF)`,
          backgroundSize: '300% 100%',
          animation: 'shimmer 3s linear infinite',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      >
        <div className="absolute inset-0 rounded-xl bg-dark-900" />
      </div>

      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
        style={{
          background: `linear-gradient(to right, #00D4FF, #FF3DFF, #7000FF, #00D4FF)`,
          backgroundSize: '300% 100%',
          animation: 'shimmer 3s linear infinite',
        }}
      />

      {/* Content */}
      <div className="relative">
        <motion.div 
          className="text-4xl mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-3 text-dark-50">{title}</h3>
        <p className="text-dark-100">{description}</p>
        {children && <div className="mt-4 text-dark-100">{children}</div>}
      </div>

      {/* Corner accents with animated gradients */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderImage: 'linear-gradient(to right, #00D4FF, #FF3DFF) 1',
          animation: 'borderPulse 2s ease-in-out infinite'
        }}
      />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderImage: 'linear-gradient(to right, #FF3DFF, #7000FF) 1',
          animation: 'borderPulse 2s ease-in-out infinite'
        }}
      />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderImage: 'linear-gradient(to right, #7000FF, #00D4FF) 1',
          animation: 'borderPulse 2s ease-in-out infinite'
        }}
      />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderImage: 'linear-gradient(to right, #FF3DFF, #00D4FF) 1',
          animation: 'borderPulse 2s ease-in-out infinite'
        }}
      />
    </motion.div>
  )
} 