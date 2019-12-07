import React from 'react'
import Utility from './Utility'
import Jail from './Jail'
import Start from './Start'
import Tax from './Tax'
import ICard from '../interfaces/ICard'
import styled from 'styled-components'

interface ICardEventWrapper {
	empty: boolean
	handlePreviewCard?: any
}
const Card: React.FC<ICard> = props => {
	const { card } = props
	return (
		<CardEventWrapper
			empty={card.type === 'empty'}
			onClick={() => props.handlePreviewCard(props.card)}>
			<CardWrapper card={card} type={card.type}>
				{card.type === 'place' && (
					<Tile
						card={card}
						name={card.name}
						color={card.color}
						type_color={card.type_color}
						type={card.type}
						property_details={card.property_details}
					/>
				)}
				{card.type === 'utility' && (
					<Utility
						card={card}
						name={card.name}
						color={card.color}
						type_color={card.type_color}
						type={card.type}
						property_details={card.property_details}
					/>
				)}
				{card.type === 'jail' && <Jail />}
				{card.type === 'draw' && (
					<Tile
						card={card}
						name={card.name}
						color={card.color}
						type_color={card.type_color}
						type={card.type}
						property_details={card.property_details}
					/>
				)}
				{card.type === 'text' && (
					<Tile
						card={card}
						name={card.name}
						color={card.color}
						type_color={card.type_color}
						type={card.type}
						property_details={card.property_details}
					/>
				)}
				{card.type === 'start' && <Start />}
				{card.type === 'tax' && <Tax />}
			</CardWrapper>
		</CardEventWrapper>
	)
}

const CardEventWrapper = styled.div<ICardEventWrapper>`
	z-index: 2;
	cursor: ${props => !props.empty && 'pointer'};
`
const CardWrapper = styled.div<ICard>`
	svg {
		width: 100%;
		display: ${props => (props.type === 'empty' ? 'none' : 'block')};

		g {
			text {
				text-transform: uppercase;
				letter-spacing: 1px;
			}
		}
	}
`

const Tile: React.FC<ICard> = props => {
	return (
		<svg width="100%" viewBox="0 0 150 147">
			<defs>
				<rect id="a" width="142" height="138.296" rx="21" />
				<filter
					id="b"
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
				<mask id="c" width="142" height="138.296" x="0" y="0" fill="white">
					<use href="#a" />
				</mask>
			</defs>
			<g fill="none" fillRule="evenodd" transform="translate(4 2)">
				<use fill="black" filter="url(#b)" href="#a" />
				<use
					fill={props.color}
					stroke="#FFFFFF"
					strokeWidth="14"
					mask="url(#c)"
					href="#a"
				/>
				<text
					fill={
						props.type === 'utility'
							? props.type_color
							: props.name === '?'
							? props.type_color
							: props.name === 'Tax'
							? props.type_color
							: '#fff'
					}
					fontFamily="ArchivoBlack-Regular, Archivo Black"
					fontSize={
						props.name === 'Water works'
							? 12
							: props.name === 'Electricity'
							? 14
							: props.name === '?'
							? 55
							: 18
					}
					fontWeight="700"
					textAnchor="middle"
					alignmentBaseline="central">
					<tspan x="48%" y={props.name === '?' ? '85' : '37.583'}>
						{props.name}
					</tspan>
				</text>
				{props.type === 'place' && (
					<text
						fill="#fff"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize={
							props.name === 'Water works'
								? 12
								: props.name === 'Electricity'
								? 14
								: props.name === '?'
								? 55
								: 18
						}
						fontWeight="700"
						textAnchor="middle"
						alignmentBaseline="central">
						<tspan x="48%" y={props.name === '?' ? '85' : '110'}>
							${props.property_details && props.property_details.price}
						</tspan>
					</text>
				)}
			</g>
		</svg>
	)
}

export default Card
