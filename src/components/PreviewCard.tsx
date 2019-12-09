import React from 'react'
import styled from 'styled-components'

import { BoardContext } from './Board'

interface IPreviewCard {
	handlePreviewCard?: Function
	card?: {
		color?: string
		name?: string
		description?: string
		property_details?: {
			price?: number
			rent?: number
			mortgage?: number
			hotel_rents?: number[]
			upgrade?: number
		}
		type?: string
		draw_name?: string
	}

	style?: {
		position?: string
		zIndex?: string
	}
}

const PreviewCard: React.FC<IPreviewCard> = props => {
	return (
		<BoardContext.Consumer>
			{value => {
				return (
					<PreviewCardWrapper>
						{props.card && (
							<svg viewBox="-175 -175 893 842">
								<defs>
									<rect id="h" width="535" height="515" rx="30" />
									<filter
										id="g"
										width="200%"
										height="200%"
										x="-50%"
										y="-50%"
										filterUnits="objectBoundingBox">
										<feOffset
											dy="2"
											in="SourceAlpha"
											result="shadowOffsetOuter1"
										/>
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
									<linearGradient
										id="i"
										x1="93.255%"
										x2="7.094%"
										y1="100%"
										y2="100%">
										<stop stopColor="#036300" offset="0%" />
										<stop stopColor="#168900" offset="11.27%" />
										<stop stopColor="#168900" offset="87.857%" />
										<stop stopColor="#196C01" offset="100%" />
									</linearGradient>
									<linearGradient id="j" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop stopColor="#48C700" offset="0%" />
										<stop stopColor="#13A600" offset="100%" />
									</linearGradient>
									<linearGradient
										id="pass-button-top"
										x1="93.255%"
										x2="7.094%"
										y1="100%"
										y2="100%">
										<stop stopColor="#1F5AA2" offset="0%" />
										<stop stopColor="#3184C4" offset="9.275%" />
										<stop stopColor="#3083C3" offset="89.312%" />
										<stop stopColor="#1F57A0" offset="100%" />
									</linearGradient>
									<linearGradient
										id="pass-button-bottom"
										x1="50%"
										x2="50%"
										y1="0%"
										y2="100%">
										<stop stopColor="#3A92D4" offset="0%" />
										<stop stopColor="#3284C5" offset="100%" />
									</linearGradient>
									<rect id="a" width="486" height="46" rx="8" />
									<mask id="m" width="486" height="46" x="0" y="0" fill="white">
										<use href="#a" />
									</mask>
									<rect id="b" width="135" height="109" y="1" rx="14" />
									<mask
										id="n"
										width="135"
										height="109"
										x="0"
										y="0"
										fill="white">
										<use href="#b" />
									</mask>
									<rect id="c" width="135" height="109" y="1" rx="14" />
									<mask
										id="o"
										width="135"
										height="109"
										x="0"
										y="0"
										fill="white">
										<use href="#c" />
									</mask>
									<rect id="d" width="135" height="109" y="1" rx="14" />
									<mask
										id="p"
										width="135"
										height="109"
										x="0"
										y="0"
										fill="white">
										<use href="#d" />
									</mask>
									<rect id="e" width="481" height="83" rx="14" />
									<mask id="q" width="481" height="83" x="0" y="0" fill="white">
										<use href="#e" />
									</mask>
									<ellipse id="s" cx="19" cy="22.5" rx="19" ry="18.5" />
									<filter
										id="r"
										width="200%"
										height="200%"
										x="-50%"
										y="-50%"
										filterUnits="objectBoundingBox">
										<feOffset
											dy="6"
											in="SourceAlpha"
											result="shadowOffsetOuter1"
										/>
										<feGaussianBlur
											stdDeviation="1"
											in="shadowOffsetOuter1"
											result="shadowBlurOuter1"
										/>
										<feColorMatrix
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.263275589 0"
											in="shadowBlurOuter1"
										/>
									</filter>
									<linearGradient id="u" x1="50%" x2="50%" y1="0%" y2="100%">
										<stop stopColor="#F75C61" offset="0%" />
										<stop stopColor="#E0383B" offset="100%" />
									</linearGradient>
									<ellipse id="f" cx="19" cy="18.5" rx="19" ry="18.5" />
									<mask id="t" width="38" height="37" x="0" y="0" fill="white">
										<use href="#f" />
									</mask>
									<path
										id="w"
										d="M11,27 L16.2913386,18.0856721 L11.503937,10 L16.0393701,10 L18.4330709,14.2939439 C18.5002628,14.4111281 18.580052,14.5659764 18.6724409,14.7584934 C18.7648299,14.9510103 18.8698157,15.1477095 18.9874016,15.3485968 C19.1049875,15.1644501 19.2099733,14.9803062 19.3023622,14.7961595 C19.3947511,14.6120129 19.4829392,14.4529795 19.5669291,14.3190547 L21.9858268,10 L26.5212598,10 L21.7086614,18.1107829 L27,27 L22.4141732,27 L19.592126,21.9778434 C19.5081361,21.8439186 19.4157485,21.6807001 19.3149606,21.4881832 C19.2141727,21.2956662 19.1049875,21.098967 18.9874016,20.8980798 L18.407874,21.9778434 L15.5858268,27 L11,27 Z"
									/>
									<filter
										id="v"
										width="200%"
										height="200%"
										x="-50%"
										y="-50%"
										filterUnits="objectBoundingBox">
										<feOffset
											dy="3"
											in="SourceAlpha"
											result="shadowOffsetOuter1"
										/>
										<feGaussianBlur
											stdDeviation="1"
											in="shadowOffsetOuter1"
											result="shadowBlurOuter1"
										/>
										<feColorMatrix
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.309358016 0"
											in="shadowBlurOuter1"
										/>
									</filter>
								</defs>
								<g fill="none" fillRule="evenodd" transform="translate(4 2)">
									<use fill="black" filter="url(#g)" href="#h" />
									<use fill="#FFFFFF" href="#h" />

									{props.card.type !== 'draw' && props.card.type !== 'tax' && (
										<Buttons handlePreviewCard={props.handlePreviewCard} />
									)}

									{props.card.type === 'draw' && (
										<DrawDescription description={props.card.description} />
									)}
									{props.card.type === 'tax' && <TaxDescription />}

									{props.card.property_details &&
										props.card.property_details.upgrade && (
											<HotelUpgrade
												price={props.card.property_details.upgrade}
											/>
										)}

									<TablePrices prices={props.card.property_details} />

									{props.card.property_details &&
										props.card.property_details.hotel_rents && (
											<HotelPrices
												prices={props.card.property_details.hotel_rents}
											/>
										)}
									{props.card.name && (
										<PreviewCardHeader
											bgColor={props.card.color}
											text={
												props.card.name === '?'
													? props.card.draw_name
													: props.card.name.toUpperCase()
											}
											handlePreviewCard={props.handlePreviewCard}
										/>
									)}
								</g>
							</svg>
						)}
					</PreviewCardWrapper>
				)
			}}
		</BoardContext.Consumer>
	)
}

const DrawDescription = (props: { description: any }) => (
	<g>
		<text
			fill="#2F2E2F"
			fontFamily="ArchivoBlack-Regular, Archivo Black"
			fontSize="24"
			fontWeight="700"
			textAnchor="middle"
			alignmentBaseline="central">
			<tspan x="30%" y="235">
				{props.description && props.description}
			</tspan>
		</text>
	</g>
)

const TaxDescription = () => (
	<g>
		<text
			fill="#2F2E2F"
			fontFamily="ArchivoBlack-Regular, Archivo Black"
			fontSize="24"
			fontWeight="700"
			textAnchor="middle"
			alignmentBaseline="central">
			<tspan x="30%" y="200">
				Pay 7% of your assets
			</tspan>
			<tspan x="30%" y="235">
				to the bank when you
			</tspan>
			<tspan x="30%" y="270">
				land on this card
			</tspan>
		</text>
	</g>
)

interface IHotelUpgrade {
	price: any
}
const HotelUpgrade: React.FC<IHotelUpgrade> = props => (
	<text
		fill="#9A9A9A"
		fontFamily="ArchivoBlack-Regular, Archivo Black"
		fontSize="24"
		fontWeight="700">
		<tspan x="61.125" y="393">
			Each hotel upgrade costs: $ {props.price}
		</tspan>
	</text>
)

interface IButtons {
	handlePreviewCard: any
}
const Buttons: React.FC<IButtons> = props => (
	<g>
		<g onClick={() => alert('buying...')}>
			<Button
				text="BUY"
				topFillId="i"
				bottomFillId="j"
				strokeColor="#16BD00"
				translate="translate(79 416)"
			/>
		</g>
		<g
			onClick={() => props.handlePreviewCard && props.handlePreviewCard(false)}>
			<Button
				text="PASS"
				topFillId="pass-button-top"
				bottomFillId="pass-button-bottom"
				strokeColor="#39A2D3"
				translate="translate(278 416)"
			/>
		</g>
	</g>
)
interface ITablePrices {
	prices: any
}
const TablePrices: React.FC<ITablePrices> = props => {
	if (props.prices) {
		return (
			<g>
				<g
					fill="#494949"
					transform="translate(49 203)"
					fontSize="24"
					fontFamily="ArchivoBlack-Regular, Archivo Black"
					fontWeight="700">
					<text>
						<tspan x=".002" y="26">
							Mortgage
						</tspan>
					</text>
					<text>
						<tspan x="370.484" y="26">
							$ {props.prices.mortgage}
						</tspan>
					</text>
				</g>
				<g transform="translate(28 153)">
					<use
						fill="#EBEBEB"
						stroke="#EBEBEB"
						strokeWidth="2"
						mask="url(#m)"
						href="#a"
					/>
					<text
						fill="#353535"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="24"
						fontWeight="700">
						<tspan x="21.332" y="32">
							Rent
						</tspan>
					</text>
					<text
						fill="#353535"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="24"
						fontWeight="700">
						<tspan x="408.488" y="32">
							$ {props.prices.rent}
						</tspan>
					</text>
				</g>
				<g
					fill="#494949"
					transform="translate(49 115)"
					fontSize="24"
					fontFamily="ArchivoBlack-Regular, Archivo Black"
					fontWeight="700">
					<text>
						<tspan x=".004" y="26">
							Price
						</tspan>
					</text>
					<text>
						<tspan x="371.484" y="26">
							$ {props.prices.price}
						</tspan>
					</text>
				</g>
			</g>
		)
	} else {
		return <g></g>
	}
}

interface IHotelPrices {
	prices: any
}
const HotelPrices: React.FC<IHotelPrices> = props => {
	if (props.prices !== undefined) {
		return (
			<g>
				<g transform="translate(354 250)">
					<use
						fill="#D8D8D8"
						stroke="#D8D8D8"
						strokeWidth="2"
						mask="url(#n)"
						opacity=".515"
						href="#b"
					/>
					<text
						fill="#2A292A"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="24"
						fontWeight="700">
						<tspan x="35.332" y="43">
							Rent
						</tspan>
					</text>
					<text
						fill="#2A292A"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="32"
						fontWeight="700"
						textAnchor="middle"
						alignmentBaseline="central">
						<tspan x="7%" y="78">
							$ {props.prices[2]}
						</tspan>
					</text>
				</g>
				<g transform="translate(201 250)">
					<use
						fill="#D8D8D8"
						stroke="#D8D8D8"
						strokeWidth="2"
						mask="url(#o)"
						opacity=".515"
						href="#c"
					/>
					<text
						fill="#2A292A"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="24"
						fontWeight="700">
						<tspan x="35.332" y="43">
							Rent
						</tspan>
					</text>
					<text
						fill="#2A292A"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="32"
						fontWeight="700"
						textAnchor="middle"
						alignmentBaseline="central">
						<tspan x="7%" y="78">
							$ {props.prices[1]}
						</tspan>
					</text>
				</g>
				<g transform="translate(49 250)">
					<use
						fill="#D8D8D8"
						stroke="#D8D8D8"
						strokeWidth="2"
						mask="url(#p)"
						opacity=".515"
						href="#d"
					/>
					<text
						fill="#2A292A"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="24"
						fontWeight="700">
						<tspan x="35.332" y="43">
							Rent
						</tspan>
					</text>
					<text
						fill="#2A292A"
						fontFamily="ArchivoBlack-Regular, Archivo Black"
						fontSize="32"
						fontWeight="700"
						textAnchor="middle"
						alignmentBaseline="central">
						<tspan x="7%" y="78">
							$ {props.prices[0]}
						</tspan>
					</text>
				</g>
			</g>
		)
	} else {
		return <g></g>
	}
}

interface IPreviewCardHeader {
	text: any
	handlePreviewCard: any
	bgColor: any
}
const PreviewCardHeader: React.FC<IPreviewCardHeader> = props => (
	<g transform="translate(28 15)">
		<use
			fill={props.bgColor ? props.bgColor : 'white'}
			stroke={props.bgColor ? props.bgColor : 'white'}
			strokeWidth="2"
			mask="url(#q)"
			href="#e"
		/>
		<text
			fill="#FFFFFF"
			stroke="#000000"
			strokeWidth="2"
			fontFamily="LilitaOne, Lilita One"
			fontSize="43"
			letterSpacing=""
			textAnchor="middle"
			alignmentBaseline="central">
			<tspan x="27%" y="57">
				{props.text}
			</tspan>
		</text>
		<g onClick={() => props.handlePreviewCard(false)}>
			<ExitButton />
		</g>
	</g>
)

const ExitButton = () => {
	return (
		<ExitButtonWrapper>
			<g transform="translate(456 20)">
				<use fill="black" filter="url(#r)" href="#s" />
				<use fill="#9A2021" href="#s" />
				<use
					fill="url(#u)"
					stroke="#EC6269"
					strokeWidth="6"
					mask="url(#t)"
					href="#f"
				/>
				<g>
					<use fill="black" filter="url(#v)" href="#w" />
					<use fill="#FFFFFF" href="#w" />
				</g>
			</g>
		</ExitButtonWrapper>
	)
}

const ExitButtonWrapper = styled.g`
	cursor: pointer;
`

interface IButton {
	text: string
	topFillId: string
	bottomFillId: string
	strokeColor: string
	translate: string
}

const Button: React.FC<IButton> = props => (
	<ButtonWrapper>
		<g transform={props.translate}>
			<path
				fill={`url(#${props.topFillId.toString()})`}
				d="M0,29.008123 C0,18.5102265 8.5023203,10 19.0067727,10 L161.993227,10 C172.490378,10 181,18.5138803 181,29.008123 L181,51.991877 C181,62.4897735 172.491885,71 162.001231,71 L122.916016,71 L19.0034645,71 C8.50814086,71 0,62.4861197 0,51.991877 L0,29.008123 Z"
			/>
			<rect
				width="180"
				height="61"
				x="1"
				fill={`url(#${props.bottomFillId.toString()})`}
				stroke={props.strokeColor.toString()}
				strokeWidth="2"
				rx="19"
			/>
			<text
				fill="#FFFFFF"
				fontFamily="ArchivoBlack-Regular, Archivo Black"
				fontSize="24"
				fontWeight="700">
				<tspan x="62.836" y="38">
					{props.text}
				</tspan>
			</text>
		</g>
	</ButtonWrapper>
)

const ButtonWrapper = styled.g`
	cursor: pointer;
`

const PreviewCardWrapper = styled.section`
	width: 100%;

	svg {
		z-index: 1005;
	}
`
export default PreviewCard
