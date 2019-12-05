import React from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import Card from './Card'
import { AppContext } from '../App'
import { ReactComponent as Jail } from '../images/jail.svg'
import { ReactComponent as Electricity } from '../images/flash.svg'
import { ReactComponent as WaterWorks } from '../images/tap.svg'
import { ReactComponent as Railway } from '../images/train.svg'
import { ReactComponent as Airlines } from '../images/airliner.svg'
interface ICard {
	type: string
	color: string
	name: string
	property_details: {
		price: number
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
						<Card
							key={i}
							name={card.name}
							color={card.color}
							type_color={card.type_color}
							type={card.type}
							empty={card.type === 'empty' && true}>
							<p>{card.name}</p>
							{card.property_details && card.type !== 'utility' && (
								<span>$ {card.property_details.price}</span>
							)}
							{showIcon(card.name)}
						</Card>
					)
				})
			}
		</AppContext.Consumer>
	)
}

const BoardWrapper = styled.div`
	padding: 1.5%;
	border-radius: 0.625rem;
	background: #f19e75;
	height: auto;
	border-radius: 20px;

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		border-radius: 11px;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (min-width: 414px) and (min-height: 736px) {
		border-radius: 14px;
	}

	@media only screen and (min-width: 375px) and (min-height: 812px) {
		border-radius: 14px;
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		border-radius: 25px;
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		border-radius: 25px;
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		border-radius: 32px;
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		border-radius: 44px;
	}
	@media only screen and (min-width: 1200px) and (min-height: 950px) {
		border-radius: 44px;
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1440px) {
		border-radius: 45px;
	}

	@media only screen and (min-width: 1200px) and (min-height: 900px) {
		border-radius: 45px;
	}

	@media only screen and (min-width: 1440px) and (min-height: 900px) {
		border-radius: 60px;
	}

	@media only screen and (min-height: 480px) {
		margin-top: 50%;
	}

	@media only screen and (min-height: 800px) {
		margin-top: 50%;
	}

	// @media only screen and (min-height: 736px) {
	// 	margin-top: 60%;
	// }

	// @media only screen and (min-height: 812px) {
	// 	margin-top: 60%;
	// }

	// @media only screen and (min-height: 1024px) {
	// 	margin-top: 60%;
	// }
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-template-rows: repeat(6, minmax(auto, 1fr));
	grid-gap: 2px;

	@media only screen and (min-width: 1280px) and (min-height: 600px) {
		grid-gap: 10px;
	}

	@media only screen and (min-width: 1280px) and (min-height: 900px) {
		grid-gap: 12px;
	}
s`

export default Board
