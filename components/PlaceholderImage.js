const colors = {
  varil: ['#00D4FF', '#FF3DFF'],
  milo: ['#FF3DFF', '#7000FF'],
  aava: ['#7000FF', '#00D4FF'],
  chris: ['#00D4FF', '#7000FF'],
  nova: ['#FF3DFF', '#00D4FF'],
  zane: ['#7000FF', '#FF3DFF'],
  kayla: ['#00D4FF', '#FF3DFF'],
  marsh: ['#FF3DFF', '#7000FF']
}

export const createPlaceholderSVG = (name) => {
  const [color1, color2] = colors[name.toLowerCase()] || ['#00D4FF', '#FF3DFF']
  
  return `
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#131314"/>
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="400" y2="400">
          <stop offset="0%" stop-color="${color1}"/>
          <stop offset="100%" stop-color="${color2}"/>
        </linearGradient>
      </defs>
      <circle cx="200" cy="160" r="80" fill="url(#grad)" opacity="0.8"/>
      <rect x="120" y="260" width="160" height="20" fill="url(#grad)" opacity="0.6"/>
      <text x="200" y="350" font-family="Montserrat" font-size="24" fill="white" text-anchor="middle">${name}</text>
    </svg>
  `
} 