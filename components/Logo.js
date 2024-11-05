import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/">
      <a className="relative block w-[300px] h-[80px]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src="/brand/1942.png"
            alt="1942 Studio"
            layout="fill"
            objectFit="contain"
            priority
            className="filter drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]"
          />
        </motion.div>
      </a>
    </Link>
  )
} 