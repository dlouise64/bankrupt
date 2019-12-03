import React from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import Card from './Card'
import cards from '../data/cards'

const Board: React.FC = () => {
	return (
		<Container>
			<BoardWrapper>
				<Grid>
					{cards.map((card, i: number) => (
						<Card
							key={i}
							empty={card.type === 'empty' && true}
							color={card.color}>
							<h2>{card.name}</h2>
						</Card>
					))}
				</Grid>
			</BoardWrapper>
		</Container>
	)
}

const BoardWrapper = styled.div`
	padding: 1.5%;
	border-radius: 0.625rem;
	background: #f19e75;
	height: auto;

	@media (min-width: 768px) {
		border-radius: 10px;
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
