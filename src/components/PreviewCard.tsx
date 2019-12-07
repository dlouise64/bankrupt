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
										fontSize="24"
										fontWeight="700">
										<tspan x="73" y="419">
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
				</g>
			</svg>
		</PreviewCardWrapper>
	)
}

const PreviewCardWrapper = styled.section`
	width: 100%;
`
export default PreviewCard
