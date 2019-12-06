import React from 'react'

const Start: React.FC = () => (
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
    <path fill="#9C8AB8" stroke="#9C8AB8" d="M65.3768799,43.328975 C68.6401296,37.5581755 73.9295828,37.5558413 77.1941524,43.328975 L103.192152,89.3043847 C106.455402,95.0751841 103.722256,99.7533414 97.0960166,99.7533414 L45.4750157,99.7533414 C38.8449634,99.7533414 36.1143107,95.0775183 39.3788804,89.3043847 L65.3768799,43.328975 Z"/>
  </g>
</svg>



)

export default Start
