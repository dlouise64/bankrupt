import React from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import { AppContext } from '../App'
import ICard from '../interfaces/ICard'
import Card from './Card'
import PreviewCard from './PreviewCard'

const Board: React.FC = () => {
	return (
		<>
			<Container>
				<BoardWrapper>
					<Grid>
						<PreviewCard />
						<Cards />
					</Grid>
				</BoardWrapper>
			</Container>
		</>
	)
}

const Cards: React.FC = () => {
	return (
		<AppContext.Consumer>
			{value =>
				value.cards.map((card: ICard, i: number) => {
					return <Card card={card} key={i} />
				})
			}
		</AppContext.Consumer>
	)
}

const BoardWrapper = styled.div`
	background: #f19e75;
	width: 92vw;
	min-width: 325px;
	min-height: 294px;
	padding: 5px;
	max-width: calc(100vh - 2em);
	max-height: calc(100vh - 2em);
	overflow: hidden;
	border-radius: 12px;
	margin: 1% auto 0;
	position: absolute;
   bottom: 16%;
   left: 0;
	right: 0;
	
	@media (min-width: 765px) {
		position: static;
	}
}
`

const Grid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-template-rows: repeat(6, minmax(auto, 1fr));
`

export default Board
