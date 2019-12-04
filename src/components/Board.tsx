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
					<Card empty />
					<Card empty />
					<Card empty />
					<Card empty />
					<Card />

					<Card />
					<Card empty />
					<Card empty />
					<Card empty />
					<Card empty />
					<Card />

					<Card />
					<Card empty />
					<Card empty />
					<Card empty />
					<Card empty />
					<Card />

					<Card />
					<Card empty />
					<Card empty />
					<Card empty />
					<Card empty />
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
`

export default Board
