import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    // Set initial window size
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
        animate={{
          x: mousePosition.x * 100,
          y: mousePosition.y * 100,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        animate={{
          x: mousePosition.x * -100,
          y: mousePosition.y * -100,
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(255,61,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating Particles with Trails */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-accent-primary rounded-full"
          style={{
            boxShadow: '0 0 20px 2px var(--accent-primary)',
          }}
          initial={{
            x: Math.random() * (windowSize.width || 0),
            y: Math.random() * (windowSize.height || 0),
            opacity: 0,
          }}
          animate={{
            x: Math.random() * (windowSize.width || 0),
            y: Math.random() * (windowSize.height || 0),
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Cyberpunk Scanner Lines */}
      <div className="absolute inset-0 opacity-15">
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={`scanner-${i}`}
            className="absolute h-[2px] w-full"
            style={{
              top: `${(i + 1) * 33}%`,
              background: 'linear-gradient(90deg, transparent 0%, var(--accent-primary) 50%, transparent 100%)',
              boxShadow: '0 0 20px var(--accent-primary)',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Digital Rain Effect */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              className="absolute w-[1px]"
              style={{
                left: `${(i + 1) * 4}%`,
                height: Math.random() * 100 + 50,
                background: `linear-gradient(180deg, var(--accent-primary), transparent)`,
              }}
              animate={{
                y: [-100, windowSize.height],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: 'loop',
                delay: Math.random() * 2,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* Glowing Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          className="absolute inset-0 border-l-2 border-t-2 rounded-tl-3xl"
          style={{ borderImage: 'linear-gradient(45deg, var(--accent-primary), transparent) 1' }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <motion.div
          className="absolute inset-0 border-r-2 border-t-2 rounded-tr-3xl"
          style={{ borderImage: 'linear-gradient(45deg, var(--accent-secondary), transparent) 1' }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <motion.div
          className="absolute inset-0 border-l-2 border-b-2 rounded-bl-3xl"
          style={{ borderImage: 'linear-gradient(45deg, var(--accent-tertiary), transparent) 1' }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          className="absolute inset-0 border-r-2 border-b-2 rounded-br-3xl"
          style={{ borderImage: 'linear-gradient(45deg, var(--accent-primary), transparent) 1' }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </div>
    </div>
  )
} 