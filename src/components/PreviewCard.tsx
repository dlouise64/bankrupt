import React from 'react'
import styled from 'styled-components'

interface IPreviewCard {
	card?: {
		color?: string
	}
}
const PreviewCard: React.FC<IPreviewCard> = props => (
	<PreviewCardWrapper>
		{console.log('here', props.card && props.card.color)}
		<svg viewBox="-175 -175 893 842">
			<defs>
				<rect id="a1" width="535" height="519" rx="30" />
				<filter
					id="c1"
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
				<mask id="d1" width="535" height="524" x="0" y="0" fill="white">
					<use href="#a1" />
				</mask>
				<rect id="b1" width="486" height="81" x="28" y="30" rx="20" />
				<mask id="e1" width="486" height="81" x="0" y="0" fill="white">
					<use href="#b1" />
				</mask>
			</defs>
			<g fill="none" fill-rule="evenodd" transform="translate(4 2)">
				<use fill="black" filter="url(#c1)" href="#a1" />
				<use
					fill="#FFFFFF"
					stroke="#FFFFFF"
					stroke-width="2"
					mask="url(#d1)"
					href="#a1"
				/>
				<use
					fill={props.card && props.card.color}
					stroke={props.card && props.card.color}
					stroke-width="2"
					mask="url(#e1)"
					href="#b1"
				/>
			</g>
		</svg>
	</PreviewCardWrapper>
)

const PreviewCardWrapper = styled.section`
	width: 100%;
`
export default PreviewCard
