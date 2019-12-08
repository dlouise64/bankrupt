import React from 'react'
import styled from 'styled-components'
import Hotel from '../images/hotel.png'
interface IPreviewCard {
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
	const { card } = props
	return (
		<PreviewCardWrapper>
			<svg viewBox="-175 -175 893 842">
				<defs>
					<linearGradient
						x1="93.2547048%"
						y1="100%"
						x2="7.09383633%"
						y2="100%"
						id="linearGradient-7">
						<stop stop-color="#036300" offset="0%"></stop>
						<stop stop-color="#168900" offset="11.2703045%"></stop>
						<stop stop-color="#168900" offset="87.8567761%"></stop>
						<stop stop-color="#196C01" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="50%"
						y1="0%"
						x2="50%"
						y2="100%"
						id="linearGradient-8">
						<stop stop-color="#48C700" offset="0%"></stop>
						<stop stop-color="#13A600" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="93.2547048%"
						y1="100%"
						x2="7.09383633%"
						y2="100%"
						id="linearGradient-9">
						<stop stop-color="#1F5AA2" offset="0%"></stop>
						<stop stop-color="#3184C4" offset="9.27523889%"></stop>
						<stop stop-color="#3083C3" offset="89.3120593%"></stop>
						<stop stop-color="#1F57A0" offset="100%"></stop>
					</linearGradient>
					<linearGradient
						x1="50%"
						y1="0%"
						x2="50%"
						y2="100%"
						id="linearGradient-10">
						<stop stop-color="#3A92D4" offset="0%"></stop>
						<stop stop-color="#3284C5" offset="100%"></stop>
					</linearGradient>
					<rect id="sOne" width="535" height="515" rx="30" />
					<filter
						id="rOne"
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
					<rect id="aOne" width="481" height="91" x="28" y="15" rx="14" />
					<mask id="tOne" width="481" height="91" x="0" y="0" fill="white">
						<use href="#aOne" />
					</mask>
					<rect id="bOne" width="486" height="46" x="28" y="163" rx="8" />
					<mask id="uOne" width="486" height="46" x="0" y="0" fill="white">
						<use href="#bOne" />
					</mask>
					<rect id="cOne" width="135" height="123" rx="14" />
					<mask id="vOne" width="135" height="123" x="0" y="0" fill="white">
						<use href="#cOne" />
					</mask>
					<rect id="dOne" width="135" height="123" rx="14" />
					<mask id="wOne" width="135" height="123" x="0" y="0" fill="white">
						<use href="#dOne" />
					</mask>
					<rect id="eOne" width="135" height="123" rx="14" />
					<mask id="xOne" width="135" height="123" x="0" y="0" fill="white">
						<use href="#eOne" />
					</mask>
					<path
						id="fOne"
						d="M-1.99810135,37.9952534 C-0.894580447,35.2364511 1.64454808,33 3.66632099,33 L40.333679,33 C42.3585322,33 44.8944152,35.236038 45.9981014,37.9952534 L50.0018986,48.0047466 C51.1054196,50.7635489 49.7574344,53 47.0004714,53 L-3.00047137,53 C-5.76163479,53 -7.10558482,50.763962 -6.00189865,48.0047466 L-1.99810135,37.9952534 Z"
					/>
					<mask id="yOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#fOne" />
					</mask>
					<path
						id="gOne"
						d="M-2.61020798,37.9952534 C-1.50668707,35.2364511 1.03244146,33 3.05421437,33 L39.7215724,33 C41.7464256,33 44.2823086,35.236038 45.3859947,37.9952534 L49.389792,48.0047466 C50.4933129,50.7635489 49.1453278,53 46.3883647,53 L-3.612578,53 C-6.37374141,53 -7.71769144,50.763962 -6.61400527,48.0047466 L-2.61020798,37.9952534 Z"
					/>
					<filter
						id="zOne"
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
					<mask id="AOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#gOne" />
					</mask>
					<path
						id="hOne"
						d="M-1.99810135,37.9952534 C-0.894580447,35.2364511 1.64454808,33 3.66632099,33 L40.333679,33 C42.3585322,33 44.8944152,35.236038 45.9981014,37.9952534 L50.0018986,48.0047466 C51.1054196,50.7635489 49.7574344,53 47.0004714,53 L-3.00047137,53 C-5.76163479,53 -7.10558482,50.763962 -6.00189865,48.0047466 L-1.99810135,37.9952534 Z"
					/>
					<mask id="BOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#hOne" />
					</mask>
					<path
						id="iOne"
						d="M-2.61020798,37.9952534 C-1.50668707,35.2364511 1.03244146,33 3.05421437,33 L39.7215724,33 C41.7464256,33 44.2823086,35.236038 45.3859947,37.9952534 L49.389792,48.0047466 C50.4933129,50.7635489 49.1453278,53 46.3883647,53 L-3.612578,53 C-6.37374141,53 -7.71769144,50.763962 -6.61400527,48.0047466 L-2.61020798,37.9952534 Z"
					/>
					<filter
						id="COne"
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
					<mask id="DOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#iOne" />
					</mask>
					<path
						id="jOne"
						d="M-1.99810135,37.9952534 C-0.894580447,35.2364511 1.64454808,33 3.66632099,33 L40.333679,33 C42.3585322,33 44.8944152,35.236038 45.9981014,37.9952534 L50.0018986,48.0047466 C51.1054196,50.7635489 49.7574344,53 47.0004714,53 L-3.00047137,53 C-5.76163479,53 -7.10558482,50.763962 -6.00189865,48.0047466 L-1.99810135,37.9952534 Z"
					/>
					<mask id="EOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#jOne" />
					</mask>
					<path
						id="kOne"
						d="M-2.61020798,37.9952534 C-1.50668707,35.2364511 1.03244146,33 3.05421437,33 L39.7215724,33 C41.7464256,33 44.2823086,35.236038 45.3859947,37.9952534 L49.389792,48.0047466 C50.4933129,50.7635489 49.1453278,53 46.3883647,53 L-3.612578,53 C-6.37374141,53 -7.71769144,50.763962 -6.61400527,48.0047466 L-2.61020798,37.9952534 Z"
					/>
					<filter
						id="FOne"
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
					<mask id="GOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#kOne" />
					</mask>
					<path
						id="lOne"
						d="M-1.99810135,37.9952534 C-0.894580447,35.2364511 1.64454808,33 3.66632099,33 L40.333679,33 C42.3585322,33 44.8944152,35.236038 45.9981014,37.9952534 L50.0018986,48.0047466 C51.1054196,50.7635489 49.7574344,53 47.0004714,53 L-3.00047137,53 C-5.76163479,53 -7.10558482,50.763962 -6.00189865,48.0047466 L-1.99810135,37.9952534 Z"
					/>
					<mask id="HOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#lOne" />
					</mask>
					<path
						id="mOne"
						d="M-2.61020798,37.9952534 C-1.50668707,35.2364511 1.03244146,33 3.05421437,33 L39.7215724,33 C41.7464256,33 44.2823086,35.236038 45.3859947,37.9952534 L49.389792,48.0047466 C50.4933129,50.7635489 49.1453278,53 46.3883647,53 L-3.612578,53 C-6.37374141,53 -7.71769144,50.763962 -6.61400527,48.0047466 L-2.61020798,37.9952534 Z"
					/>
					<filter
						id="IOne"
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
					<mask id="JOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#mOne" />
					</mask>
					<path
						id="nOne"
						d="M-1.99810135,37.9952534 C-0.894580447,35.2364511 1.64454808,33 3.66632099,33 L40.333679,33 C42.3585322,33 44.8944152,35.236038 45.9981014,37.9952534 L50.0018986,48.0047466 C51.1054196,50.7635489 49.7574344,53 47.0004714,53 L-3.00047137,53 C-5.76163479,53 -7.10558482,50.763962 -6.00189865,48.0047466 L-1.99810135,37.9952534 Z"
					/>
					<mask id="KOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#nOne" />
					</mask>
					<path
						id="oOne"
						d="M-2.61020798,37.9952534 C-1.50668707,35.2364511 1.03244146,33 3.05421437,33 L39.7215724,33 C41.7464256,33 44.2823086,35.236038 45.3859947,37.9952534 L49.389792,48.0047466 C50.4933129,50.7635489 49.1453278,53 46.3883647,53 L-3.612578,53 C-6.37374141,53 -7.71769144,50.763962 -6.61400527,48.0047466 L-2.61020798,37.9952534 Z"
					/>
					<filter
						id="LOne"
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
					<mask id="MOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#oOne" />
					</mask>
					<path
						id="pOne"
						d="M-1.99810135,37.9952534 C-0.894580447,35.2364511 1.64454808,33 3.66632099,33 L40.333679,33 C42.3585322,33 44.8944152,35.236038 45.9981014,37.9952534 L50.0018986,48.0047466 C51.1054196,50.7635489 49.7574344,53 47.0004714,53 L-3.00047137,53 C-5.76163479,53 -7.10558482,50.763962 -6.00189865,48.0047466 L-1.99810135,37.9952534 Z"
					/>
					<mask id="NOne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#pOne" />
					</mask>
					<path
						id="qOne"
						d="M-2.61020798,37.9952534 C-1.50668707,35.2364511 1.03244146,33 3.05421437,33 L39.7215724,33 C41.7464256,33 44.2823086,35.236038 45.3859947,37.9952534 L49.389792,48.0047466 C50.4933129,50.7635489 49.1453278,53 46.3883647,53 L-3.612578,53 C-6.37374141,53 -7.71769144,50.763962 -6.61400527,48.0047466 L-2.61020798,37.9952534 Z"
					/>
					<filter
						id="OOne"
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
					<mask id="POne" width="56.775" height="20" x="0" y="0" fill="white">
						<use href="#qOne" />
					</mask>
				</defs>
				<g fill="none" fill-rule="evenodd" transform="translate(4 2)">
					<use fill="black" filter="url(#rOne)" href="#sOne" />
					<use fill="#FFFFFF" href="#sOne" />
					<use
						fill={card && card.color}
						stroke={card && card.color}
						stroke-width="2"
						mask="url(#tOne)"
						href="#aOne"
					/>
					<text
						fill="#FFFFFF"
						stroke="#000000"
						stroke-width="2"
						fontFamily="LilitaOne, Lilita One"
						fontSize="48"
						letter-spacing="1.818"
						textAnchor="middle"
						alignmentBaseline="central">
						<tspan x="30.5%" y="80">
							{card && card.name && card.name === '?'
								? card.draw_name
								: card && card.name && card.name.toUpperCase()}
						</tspan>
					</text>
					{card && card.property_details && (
						<>
							<use
								fill="#EBEBEB"
								stroke="#EBEBEB"
								stroke-width="2"
								mask="url(#uOne)"
								href="#bOne"
							/>
							<text
								fill="#494949"
								fontFamily="ArchivoBlack-Regular, Archivo Black"
								fontSize="24"
								fontWeight="700">
								<tspan x="49.004" y="151">
									Price
								</tspan>
							</text>
							<text
								fill="#494949"
								fontFamily="ArchivoBlack-Regular, Archivo Black"
								fontSize="24"
								fontWeight="700">
								<tspan x="420.484" y="151">
									${' '}
									{card && card.property_details && card.property_details.price}
								</tspan>
							</text>
							<text
								fill="#494949"
								fontFamily="ArchivoBlack-Regular, Archivo Black"
								fontSize="24"
								fontWeight="700">
								<tspan x="49.002" y="239">
									Mortgage
								</tspan>
							</text>
							<text
								fill="#494949"
								fontFamily="ArchivoBlack-Regular, Archivo Black"
								fontSize="24"
								fontWeight="700">
								<tspan x="419.484" y="239">
									${' '}
									{card &&
										card.property_details &&
										card.property_details.mortgage}
								</tspan>
							</text>
							<text
								fill="#353535"
								fontFamily="ArchivoBlack-Regular, Archivo Black"
								fontSize="24"
								fontWeight="700">
								<tspan x="49.332" y="195">
									Rent
								</tspan>
							</text>
							<text
								fill="#353535"
								fontFamily="ArchivoBlack-Regular, Archivo Black"
								fontSize="24"
								fontWeight="700">
								<tspan x="435.488" y="195">
									${' '}
									{card && card.property_details && card.property_details.rent}
								</tspan>
							</text>
							<path stroke="#979797" />

							{card && card.type === 'place' && (
								<>
									<g transform="translate(49 258)">
										<use
											fill="#D8D8D8"
											stroke="#D8D8D8"
											stroke-width="2"
											mask="url(#vOne)"
											opacity=".515"
											href="#cOne"
										/>
										<text
											fill="#2A292A"
											fontFamily="ArchivoBlack-Regular, Archivo Black"
											fontSize="24"
											fontWeight="700">
											<tspan x="35.332" y="47">
												Rent
											</tspan>
										</text>
										<text
											fill="#2A292A"
											fontFamily="ArchivoBlack-Regular, Archivo Black"
											fontSize="24"
											fontWeight="700"
											textAnchor="middle"
											alignmentBaseline="central">
											<tspan x="7%" y="79">
												${' '}
												{card.property_details.hotel_rents &&
													card.property_details.hotel_rents[0]}
											</tspan>
										</text>
									</g>
									<g transform="translate(201 258)">
										<use
											fill="#D8D8D8"
											stroke="#D8D8D8"
											stroke-width="2"
											mask="url(#wOne)"
											opacity=".515"
											href="#dOne"
										/>
										<text
											fill="#2A292A"
											fontFamily="ArchivoBlack-Regular, Archivo Black"
											fontSize="24"
											fontWeight="700">
											<tspan x="35.332" y="47">
												Rent
											</tspan>
										</text>
										<text
											fill="#2A292A"
											fontFamily="ArchivoBlack-Regular, Archivo Black"
											fontSize="24"
											fontWeight="700"
											textAnchor="middle"
											alignmentBaseline="central">
											<tspan x="7%" y="79">
												${' '}
												{card.property_details.hotel_rents &&
													card.property_details.hotel_rents[1]}
											</tspan>
										</text>
									</g>
									<g transform="translate(354 258)">
										<use
											fill="#D8D8D8"
											stroke="#D8D8D8"
											stroke-width="2"
											mask="url(#xOne)"
											opacity=".515"
											href="#eOne"
										/>
										<text
											fill="#2A292A"
											fontFamily="ArchivoBlack-Regular, Archivo Black"
											fontSize="24"
											fontWeight="700">
											<tspan x="35.332" y="47">
												Rent
											</tspan>
										</text>
										<text
											fill="#2A292A"
											fontFamily="ArchivoBlack-Regular, Archivo Black"
											fontSize="24"
											fontWeight="700"
											textAnchor="middle"
											alignmentBaseline="central">
											<tspan x="7%" y="79">
												${' '}
												{card.property_details.hotel_rents &&
													card.property_details.hotel_rents[2]}
											</tspan>
										</text>
									</g>

									<text
										fill="#9A9A9A"
										fontFamily="ArchivoBlack-Regular, Archivo Black"
										fontSize="18"
										fontWeight="700">
										<tspan x="140" y="405">
											Each hotel upgrade costs: ${' '}
											{card &&
												card.property_details &&
												card.property_details.upgrade}
										</tspan>
									</text>
								</>
							)}
						</>
					)}
					{card && card.type === 'utility' && (
						<text
							fill="#9A9A9A"
							fontFamily="ArchivoBlack-Regular, Archivo Black"
							fontSize="24"
							fontWeight="700"
							textAnchor="middle"
							alignmentBaseline="central">
							<tspan x="30%" y="419">
								Each upgrade costs: ${' '}
								{card && card.property_details && card.property_details.upgrade}
							</tspan>
						</text>
					)}

					{card && card.type === 'draw' && (
						<text
							fill="#2F2E2F"
							fontFamily="ArchivoBlack-Regular, Archivo Black"
							fontSize="24"
							fontWeight="700"
							textAnchor="middle"
							alignmentBaseline="central">
							<tspan x="30%" y="250">
								{card && card.description}
							</tspan>
						</text>
					)}

					{card && card.name === 'Tax' && (
						<text
							fill="#2F2E2F"
							fontFamily="ArchivoBlack-Regular, Archivo Black"
							fontSize="24"
							fontWeight="700"
							textAnchor="middle"
							alignmentBaseline="central">
							<tspan x="30%" y="250">
								Pay 7% of your assets
							</tspan>
							<tspan x="30%" y="285">
								to the bank when
							</tspan>
							<tspan x="30%" y="320">
								you land on this card
							</tspan>
						</text>
					)}

					{card && card.name === 'Jail' && (
						<text
							fill="#2F2E2F"
							fontFamily="ArchivoBlack-Regular, Archivo Black"
							fontSize="24"
							fontWeight="700"
							textAnchor="middle"
							alignmentBaseline="central">
							<tspan x="30%" y="250">
								{card && card.description}
							</tspan>
						</text>
					)}
					<g id="Button1" transform="translate(79.000000, 416.000000)">
						<path
							d="M0,29.008123 C0,18.5102265 8.5023203,10 19.0067727,10 L161.993227,10 C172.490378,10 181,18.5138803 181,29.008123 L181,51.991877 C181,62.4897735 172.491885,71 162.001231,71 L122.916016,71 L19.0034645,71 C8.50814086,71 0,62.4861197 0,51.991877 L0,29.008123 Z"
							id="Rectangle-2"
							fill="url(#linearGradient-7)"></path>
						<rect
							id="Rectangle-2"
							stroke="#16BD00"
							stroke-width="2"
							fill="url(#linearGradient-8)"
							x="1"
							y="0"
							width="180"
							height="61"
							rx="19"></rect>
						<text
							id="BUY"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700"
							fill="#FFFFFF"
							onClick={() => alert('Buy Button')}>
							<tspan x="62.8359375" y="38">
								BUY
							</tspan>
						</text>
					</g>
					<g id="Button2" transform="translate(278.000000, 416.000000)">
						<rect
							id="Rectangle-2"
							fill="url(#linearGradient-9)"
							x="0"
							y="10"
							width="181"
							height="61"
							rx="19"></rect>
						<rect
							id="Rectangle-2"
							stroke="#39A2D3"
							stroke-width="2"
							fill="url(#linearGradient-10)"
							x="1"
							y="0"
							width="180"
							height="61"
							rx="19"></rect>
						<text
							id="PASS"
							font-family="ArchivoBlack-Regular, Archivo Black"
							font-size="24"
							font-weight="700"
							fill="#FFFFFF"
							onClick={() => alert('Pass Button')}>
							<tspan x="56.1679688" y="38">
								PASS
							</tspan>
						</text>
					</g>
				</g>
			</svg>
		</PreviewCardWrapper>
	)
}

const PreviewCardWrapper = styled.section`
	width: 100%;

	svg {
		z-index: 100;
	}
`
export default PreviewCard
