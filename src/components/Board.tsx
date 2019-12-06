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

const Airline: React.FC<ICard> = props => (
	<svg viewBox="0 0 150 147">
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
		<g fill="none" fill-rule="evenodd" transform="translate(4 2)">
			<use fill="black" filter="url(#b)" href="#a" />
			<use
				fill="#FFFFFF"
				stroke="#FFFFFF"
				stroke-width="14"
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
			<path
				fill="#DB9E9A"
				d="M96.6038115,59.2732331 C94.9044207,57.5751525 92.1542114,57.5751525 90.4548205,59.2758536 L80.1130381,69.9530594 C80.1130381,69.9530594 76.1063017,68.6152968 71.4103751,67.1320968 C72.1873517,64.8601279 71.4771976,63.435889 70.1132302,62.689048 C68.5160385,61.8164232 66.6174901,62.2081872 64.9220301,65.1274183 C61.2939551,64.050395 58.1585331,63.2026649 57.1024738,63.1633575 C54.079733,63.0454353 49.1047238,68.7371498 49.609169,69.8901675 C50.1136142,71.0405648 70.7657333,79.6030313 70.7657333,79.6030313 L57.3409388,93.4693793 C57.0107565,93.7982513 56.7054688,94.129744 56.436868,94.4573058 C56.436868,94.4573058 49.3117428,91.3611912 47.7630305,90.4767743 C46.2130078,89.591047 44,94.235874 44,94.235874 L53.6408002,100.19881 C53.5949415,100.239427 53.5503931,100.278735 53.5045344,100.323283 C52.4052369,101.421271 52.0016807,102.800961 52.5991535,103.401054 C53.1992468,103.998527 54.577627,103.593661 55.6782348,102.494363 C55.7463677,102.430161 55.8013981,102.358097 55.86429,102.291275 L56.5390674,102.963432 L63.1715396,112.863661 C63.1715396,112.863661 67.9107043,112.053928 66.6607283,109.377093 C65.4081319,106.700257 61.8219848,99.0313793 61.8219848,99.0313793 C62.0290039,98.8885624 62.230782,98.7300225 62.4129064,98.5413469 L76.532132,84.8689155 L76.7535639,85.094278 C76.7535639,85.094278 86.5018042,105.695298 87.7897774,106.987201 C89.0751302,108.277795 95.0302044,103.437741 94.74195,100.035029 C94.6397507,98.8518754 93.5994143,95.5120549 92.2891669,91.6559969 C92.5852828,91.4620803 92.8787782,91.2576817 93.1670327,91.0283884 C96.0207514,88.7944166 96.124261,86.7779459 94.9633819,85.3012971 C93.9413889,83.997601 92.2813055,83.5521169 89.9464447,85.0012505 C88.0963753,79.86115 86.4192586,75.4285832 86.4192586,75.4285832 L96.6090525,65.4287752 C98.3032024,63.7280741 98.3032024,60.9739342 96.6038115,59.2732331 Z"
			/>
		</g>
	</svg>
)

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
							{card.name !== 'Airlines' && (
								<Tile
									name={card.name}
									color={card.color}
									type_color={card.type_color}
									type={card.type}
									property_details={card.property_details}
								/>
							)}
							{card.name === 'Airlines' && (
								<Airline
									name={card.name}
									color={card.color}
									type_color={card.type_color}
									type={card.type}
									property_details={card.property_details}
								/>
							)}
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
	background: #f19e75;
	width: 50vw;
	min-width: 325px;
	min-height: 294px;
	padding: 5px;
	max-width: calc(100vh - 2em);
	max-height: calc(100vh - 2em);
	overflow: hidden;
	border-radius: 12px;
	margin: 1% auto 0;
	position: absolute;
   bottom: 18%;
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
`

export default Board
