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
