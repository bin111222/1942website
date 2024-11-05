import Link from 'next/link'

export default function NeumorphicButton({ children, href }) {
  return (
    <Link href={href}>
      <a className="inline-block px-8 py-4 text-lg font-semibold text-dark-50 rounded-full bg-dark-600 shadow-[6px_6px_12px_#070707,-6px_-6px_12px_#0f0f0f] hover:shadow-[4px_4px_8px_#070707,-4px_-4px_8px_#0f0f0f] transition-all duration-300 gradient-border glow">
        {children}
      </a>
    </Link>
  )
} 