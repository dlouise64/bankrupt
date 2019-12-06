import React from 'react'

const Jail: React.FC = () => (
	<svg viewBox="0 0 150 147">
  <defs>
    <rect id="a" width="142" height="138.296" rx="21"/>
    <filter id="b" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
      <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
      <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
      <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/>
    </filter>
    <mask id="c" width="142" height="138.296" x="0" y="0" fill="white">
      <use href="#a"/>
    </mask>
  </defs>
  <g fill="none" fill-rule="evenodd" transform="translate(4 2)">
    <use fill="black" filter="url(#b)" href="#a"/>
    <use fill="#FFFFFF" stroke="#FFFFFF" stroke-width="14" mask="url(#c)" href="#a"/>
    <g transform="translate(28 26)">
      <circle cx="43.5" cy="43.5" r="43.5" fill="#9B89B8" stroke="#9B89B8"/>
      <path fill="#FFFFFF" d="M70.1333333,14 L17.8666667,14 C16.8358,14 16,14.8255391 16,15.84375 L16,71.15625 C16,72.1744609 16.8358,73 17.8666667,73 L70.1333333,73 C71.1642,73 72,72.1744609 72,71.15625 L72,15.84375 C72,14.8255391 71.1642,14 70.1333333,14 Z M45.8666667,17.6875 L55.2,17.6875 L55.2,25.0625 L45.8666667,25.0625 L45.8666667,17.6875 Z M32.8,17.6875 L42.1333333,17.6875 L42.1333333,25.0625 L32.8,25.0625 L32.8,17.6875 Z M29.0666667,25.0625 C28.0358,25.0625 27.2,25.8880391 27.2,26.90625 L27.2,60.09375 C27.2,61.1119609 28.0358,61.9375 29.0666667,61.9375 L29.0666667,69.3125 L19.7333333,69.3125 L19.7333333,17.6875 L29.0666667,17.6875 L29.0666667,25.0625 Z M42.1333333,69.3125 L32.8,69.3125 L32.8,61.9375 L42.1333333,61.9375 L42.1333333,69.3125 Z M55.2,69.3125 L45.8666667,69.3125 L45.8666667,61.9375 L55.2,61.9375 L55.2,69.3125 Z M57.0666667,58.25 L30.9333333,58.25 L30.9333333,28.75 L57.0666667,28.75 L57.0666667,58.25 Z M68.2666667,69.3125 L58.9333333,69.3125 L58.9333333,61.9375 C59.9642,61.9375 60.8,61.1119609 60.8,60.09375 L60.8,26.90625 C60.8,25.8880391 59.9642,25.0625 58.9333333,25.0625 L58.9333333,17.6875 L68.2666667,17.6875 L68.2666667,69.3125 Z"/>
      <path fill="#FFFFFF" d="M36.8666667,55.023789 L51.8,55.023789 C52.8309834,55.023789 53.6666667,54.2020349 53.6666667,53.1884923 L53.6666667,45.8473058 C53.6666667,44.8336485 52.8309834,44.0120092 51.8,44.0120092 L51.7995334,44.0120092 L51.8,44.0117798 L51.8,40.3411865 C51.8,36.2933251 48.4503833,33 44.3333333,33 C40.2162833,33 36.8666667,36.2933251 36.8666667,40.3411865 L36.8666667,44.0117798 L36.8671333,44.0120092 L36.8666667,44.0120092 C35.8356833,44.0120092 35,44.8336485 35,45.8473058 L35,53.1884923 C35,54.2020349 35.8356833,55.023789 36.8666667,55.023789 Z M44.3333333,51.3529663 C43.30235,51.3529663 42.4666667,50.5312122 42.4666667,49.5176697 C42.4666667,48.5040124 43.30235,47.682373 44.3333333,47.682373 C45.3643167,47.682373 46.2,48.5040124 46.2,49.5176697 C46.2,50.5312122 45.3643167,51.3529663 44.3333333,51.3529663 Z M40.6,40.3411865 C40.6,38.3168543 42.2744,36.6705933 44.3333333,36.6705933 C46.3922667,36.6705933 48.0666667,38.3168543 48.0666667,40.3411865 L48.0666667,44.0120092 L40.6,44.0120092 L40.6,40.3411865 Z"/>
    </g>
  </g>
</svg>

)

export default Jail
