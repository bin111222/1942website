import { useEffect, useState } from 'react'
import ImageLoader from './ImageLoader'
import { createPlaceholderSVG } from './PlaceholderImage'

export default function TeamMember({ member }) {
  const [imageSrc, setImageSrc] = useState(member.image)

  useEffect(() => {
    // Create fallback SVG if image fails to load
    const handleImageError = () => {
      const svgString = createPlaceholderSVG(member.name)
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml' })
      const svgUrl = URL.createObjectURL(svgBlob)
      setImageSrc(svgUrl)
      return () => URL.revokeObjectURL(svgUrl)
    }

    // Try to load the actual image
    const img = new Image()
    img.src = member.image
    img.onerror = handleImageError
  }, [member.name, member.image])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="dark-glass rounded-xl p-6 text-center h-full transform transition-all duration-300 group-hover:scale-105">
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <ImageLoader
            src={imageSrc}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold mb-1 text-dark-50">{member.name}</h3>
        <h4 className="text-accent-primary mb-2">{member.role}</h4>
        <p className="text-dark-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.title}
        </p>
      </div>
    </motion.div>
  )
} 