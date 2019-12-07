import React from 'react'
import styled from 'styled-components'

interface IPreviewCard {
	card?: {
		color?: string
		name?: string
		property_details?: {
			price?: number
			rent?: number
			mortgage?: number
		}
	}
}
const PreviewCard: React.FC<IPreviewCard> = props => (
	<PreviewCardWrapper>
		{console.log('here', props.card && props.card)}
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
				<rect id="ba" width="486" height="46" x="28" y="170" rx="8" />
				<mask id="fa" width="486" height="46" x="0" y="0" fill="white">
					<use href="#ba" />
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
				{props.card && props.card.property_details && (
					<>
						<use
							fill="#EBEBEB"
							stroke="#EBEBEB"
							stroke-width="2"
							mask="url(#fa)"
							href="#ba"
						/>
						<rect width="486" height="46" x="28" y="138" rx="8" />
						<text
							fill="#494949"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700">
							<tspan x="62.504" y="158">
								Price
							</tspan>
						</text>
						<text
							fill="#494949"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700">
							<tspan x="415.484" y="158">
								${' '}
								{props.card &&
									props.card.property_details &&
									props.card.property_details.price}
							</tspan>
						</text>
						<text
							fill="#494949"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700">
							<tspan x="62.502" y="247">
								Mortgage
							</tspan>
						</text>
						<text
							fill="#494949"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700">
							<tspan x="414.484" y="247">
								${' '}
								{props.card &&
									props.card.property_details &&
									props.card.property_details.mortgage}
							</tspan>
						</text>
						<text
							fill="#353535"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700">
							<tspan x="62.832" y="202">
								Rent
							</tspan>
						</text>
						<text
							fill="#353535"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700">
							<tspan x="428" y="202">
								${' '}
								{props.card &&
									props.card.property_details &&
									props.card.property_details.rent}
							</tspan>
						</text>
						<path stroke="#979797" />
					</>
				)}
			</g>
		</svg>
	</PreviewCardWrapper>
)

const PreviewCardWrapper = styled.section`
	width: 100%;
`
export default PreviewCard
