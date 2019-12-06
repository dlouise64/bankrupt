import React from 'react'
import styled from 'styled-components'

const PreviewCard: React.FC = () => (
	<PreviewCardWrapper>
		<svg viewBox="0 0 543 532">
			<defs>
				<rect id="a1" width="59%" height="59%" x="21%" y="20.4%" rx="20" />
				<filter
					id="b1"
					width="200%"
					height="200%"
					x="-50%"
					y="-50%"
					filterUnits="objectBoundingBox">
					<feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
					<feGaussianBlur
						stdDeviation="2"
						in="shadowOffsetOuter1"
						result="shadowBlurOuter1"
					/>
					<feComposite
						in="shadowBlurOuter1"
						in2="SourceAlpha"
						operator="out"
						result="shadowBlurOuter1"
					/>
					<feColorMatrix
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
						in="shadowBlurOuter1"
					/>
				</filter>
				<mask id="c1" width="535" height="524" x="0" y="0" fill="white">
					<use href="#a1" />
				</mask>
			</defs>
			<g fill="none" fillRule="evenodd">
				<use fill="black" filter="url(#b1)" href="#a1" />
				<use
					fill="#FFFFFF"
					stroke="#FFFFFF"
					strokeWidth="2"
					mask="url(#c1)"
					href="#a1"
				/>
			</g>
		</svg>
	</PreviewCardWrapper>
)

const PreviewCardWrapper = styled.section`
	position: absolute;
	width: 100%;
	left: 0;
`
export default PreviewCard
