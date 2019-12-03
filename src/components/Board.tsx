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
							empty={card.type === 'empty' && true}
							color={card.color}
							type_color={card.type_color}
							type={card.type}>
							<h2>{card.name}</h2>
							{card.property_details && <p>$ {card.property_details.price}</p>}
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

	@media (min-width: 768px) {
		border-radius: 22px;
	}

	@media (min-width: 1440px) {
		border-radius: 20px;
	}
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-template-rows: repeat(6, minmax(auto, 1fr));
	grid-gap: 2px;
`

export default Board
