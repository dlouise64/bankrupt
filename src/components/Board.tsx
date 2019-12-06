import React from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import { AppContext } from '../App'
import { ReactComponent as Jail } from '../images/jail.svg'
import { ReactComponent as Electricity } from '../images/flash.svg'
import { ReactComponent as WaterWorks } from '../images/tap.svg'
import { ReactComponent as Railway } from '../images/train.svg'
import { ReactComponent as Airlines } from '../images/airliner.svg'

interface ICard {
	type?: string
	color?: string
	name?: string
	property_details?: {
		price?: number
	}
	type_color?: string
}

const Board: React.FC = () => {
	return (
		<Container>
			<BoardWrapper>
				<Grid>
					<Cards />
				</Grid>
			</BoardWrapper>
		</Container>
	)
}

const Cards: React.FC = () => {
	function showIcon(name: string) {
		switch (name) {
			case 'Jail':
				return <Jail />
			case 'Electricity':
				return <Electricity />
			case 'Water works':
				return <WaterWorks />
			case 'Railway':
				return <Railway />
			case 'Airlines':
				return <Airlines />
			default:
				return null
		}
	}
	return (
		<AppContext.Consumer>
			{value =>
				value.cards.map((card: ICard, i: number) => {
					return (
						<CardWrapper key={i} type={card.type}>
							<Tile
								name={card.name}
								color={card.color}
								type_color={card.type_color}
								type={card.type}
								property_details={card.property_details}
							/>
						</CardWrapper>
					)
				})
			}
		</AppContext.Consumer>
	)
}

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
					// fill="red"
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
						// fill="red"
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
const BoardWrapper = styled.div`
	// padding: 1.5%;
	// border-radius: 0.625rem;
	// background: #f19e75;
	// border-radius: 20px;
	// position: absolute;
	// bottom: 6em;
	// left: 0;
	// right: 0;
	// height: auto;

	position: sticky;
	background: #f19e75;
	// top: 1em;
	width: 50vw;
	min-width: 325px;
	min-height: 294px;
	padding: 5px;
	max-width: calc(100vh - 2em);
	max-height: calc(100vh - 2em);
	overflow: hidden;
	// border: 10px solid #6d5720;
	border-radius: 12px;
	margin: 1% auto 0;

	position: absolute;
   bottom: 10%;
   left: 0;
	right: 0;
	
	@media (min-width: 765px) {
		position: static;
	}
}
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
const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-template-rows: repeat(6, minmax(auto, 1fr));
	// grid-gap: 2px;

	// @media only screen and (min-width: 1280px) and (min-height: 600px) {
	// 	grid-gap: 10px;
	// }

	// @media only screen and (min-width: 1280px) and (min-height: 900px) {
	// 	grid-gap: 12px;
	// }
`

export default Board
