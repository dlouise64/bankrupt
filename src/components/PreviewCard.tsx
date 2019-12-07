import React from 'react'
import styled from 'styled-components'

interface IPreviewCard {
	card?: {
		color?: string
		name?: string
	}
}
const PreviewCard: React.FC<IPreviewCard> = props => (
	<PreviewCardWrapper>
		{console.log('here', props.card && props.card.color)}
		<svg viewBox="-175 -175 893 842">
			<defs>
				<rect id="c1" width="535" height="524" rx="30" />
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
					<feColorMatrix
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
						in="shadowBlurOuter1"
					/>
				</filter>
				<rect id="a1" width="486" height="81" x="28" y="30" rx="20" />
				<mask id="d1" width="486" height="81" x="0" y="0" fill="white">
					<use href="#a1" />
				</mask>
			</defs>
			<g fill="none" fill-rule="evenodd" transform="translate(4 2)">
				<use fill="black" filter="url(#b1)" href="#c1" />
				<use fill="#FFFFFF" href="#c1" />
				<use
					fill={props.card && props.card.color}
					stroke={props.card && props.card.color}
					stroke-width="2"
					mask="url(#d1)"
					href="#a1"
				/>
				<text
					fill="#FFFFFF"
					stroke="#000000"
					stroke-width="2"
					font-family="LilitaOne, Lilita One"
					font-size="35"
					letter-spacing="1.818"
					textAnchor="middle"
					alignmentBaseline="central">
					<tspan x="30.5%" y="84">
						{props.card && props.card.name && props.card.name.toUpperCase()}
					</tspan>
				</text>
			</g>
		</svg>
	</PreviewCardWrapper>
)

const PreviewCardWrapper = styled.section`
	width: 100%;
`
export default PreviewCard
