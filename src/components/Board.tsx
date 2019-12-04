import React from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import Card from './Card'
import { AppContext } from '../App'

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
	return (
		<AppContext.Consumer>
			{value =>
				value.cards.map((card: ICard, i: number) => {
					return (
						<Card
							key={i}
							color={card.color}
							type_color={card.type_color}
							empty={card.type === 'empty' && true}>
							<p>{card.name}</p>
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
`

export default Board
