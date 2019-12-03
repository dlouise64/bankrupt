import React from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import Card from './Card'

const Board: React.FC = () => {
	return (
		<Container>
			<BoardWrapper>
				<Grid>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Grid>
			</BoardWrapper>
		</Container>
	)
}

const BoardWrapper = styled.div`
	padding: 1%;
	border-radius: 0.3125rem;
	background: #f19e75;

	@media (min-width: 48rem) {
		border-radius: 0.625rem;
	}

	@media (min-width: 90rem) {
		border-radius: 1.25rem;
	}
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-gap: 0.125rem;
`

export default Board
