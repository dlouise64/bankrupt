import React from 'react'

const Tax: React.FC = () => (
	<svg viewBox="-696 894 150 147">
		<defs>
			<rect
				id="taxpath-1"
				x="0"
				y="0"
				width="142"
				height="138.295652"
				rx="21"></rect>
			<filter
				x="-50%"
				y="-50%"
				width="200%"
				height="200%"
				filterUnits="objectBoundingBox"
				id="taxfilter-2">
				<feOffset
					dx="0"
					dy="2"
					in="SourceAlpha"
					result="shadowOffsetOuter1"></feOffset>
				<feGaussianBlur
					stdDeviation="2"
					in="shadowOffsetOuter1"
					result="shadowBlurOuter1"></feGaussianBlur>
				<feComposite
					in="shadowBlurOuter1"
					in2="SourceAlpha"
					operator="out"
					result="shadowBlurOuter1"></feComposite>
				<feColorMatrix
					values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
					type="matrix"
					in="shadowBlurOuter1"></feColorMatrix>
			</filter>
			<mask
				id="taxmask-3"
				maskContentUnits="userSpaceOnUse"
				maskUnits="objectBoundingBox"
				x="0"
				y="0"
				width="142"
				height="138.295652"
				fill="white">
				<use href="#taxpath-1"></use>
			</mask>
			<rect
				id="taxpath-4"
				x="34"
				y="65"
				width="75"
				height="33"
				rx="16.5"></rect>
			<mask
				id="taxmask-5"
				maskContentUnits="userSpaceOnUse"
				maskUnits="objectBoundingBox"
				x="0"
				y="0"
				width="75"
				height="33"
				fill="white">
				<use href="#taxpath-4"></use>
			</mask>
		</defs>
		<g
			id="taxcard"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
			transform="translate(-692.000000, 896.000000)">
			<g id="taxRectangle-4">
				<use
					fill="black"
					fillOpacity="1"
					filter="url(#taxfilter-2)"
					href="#taxpath-1"></use>
				<use
					stroke="#FFFFFF"
					mask="url(#taxmask-3)"
					strokeWidth="14"
					fill="#FFFFFF"
					fillRule="evenodd"
					href="#taxpath-1"></use>
			</g>
			<use
				id="taxRectangle-5"
				stroke="#9C8AB8"
				mask="url(#taxmask-5)"
				strokeWidth="2"
				fill="#9C8AB8"
				href="#taxpath-4"></use>
			<text
				id="tax$160"
				fontFamily="ArchivoBlack-Regular, Archivo Black"
				fontSize="18"
				fontWeight="700"
				fill="#FFFFFF"
				textAnchor="middle"
				alignmentBaseline="central">
				<tspan x="48%" y="88">
					$ 120
				</tspan>
			</text>
			<text
				id="taxlabel"
				fontFamily="ArchivoBlack-Regular, Archivo Black"
				fontSize="18"
				fontWeight="700"
				fill="#9C8AB8"
				textAnchor="middle"
				alignmentBaseline="central">
				<tspan x="48%" y="37.583">
					Tax
				</tspan>
			</text>
		</g>
	</svg>
)

export default Tax
