import React, { useState, createContext } from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import { AppContext } from '../App'
import ICard from '../interfaces/ICard'
import Card from './Card'
import PreviewCard from './PreviewCard'

const initialState = {
	showPreviewCard: false,
	clickedCard: {}
}

export const BoardContext: React.Context<any> = createContext(initialState)

interface IProps {
	handlePreviewCard?: any
	onClick?: any
}

interface Stuff {
	class?: any
	style?: any
	type?: any
}

const Board: React.FC<Stuff> = () => {
	const [showPreviewCard, setPreviewCard] = useState(
		initialState.showPreviewCard
	)
	const [clickedCard, setClickedCard] = useState(initialState.clickedCard)

	function handlePreviewCard(card: { type: string; name: string }) {
		if (
			card.type !== 'empty' &&
			card.name !== 'Start' &&
			card.name !== 'Jail'
		) {
			setClickedCard(card)
			setPreviewCard(!showPreviewCard)
			previewCardAnimation()
		}
	}

	return (
		<BoardContext.Provider value={showPreviewCard}>
			<Container>
				<BoardWrapper>
					<Grid>
						<Cards handlePreviewCard={handlePreviewCard} />
						<div id="show" className="hidden">
							<PreviewCard
								card={clickedCard}
								handlePreviewCard={handlePreviewCard}
							/>
						</div>
					</Grid>
				</BoardWrapper>
			</Container>
		</BoardContext.Provider>
	)
}

const Cards: React.FC<IProps> = props => {
	return (
		<AppContext.Consumer>
			{value =>
				value.cards.map((card: ICard, i: number) => {
					return (
						<Card
							card={card}
							key={i}
							handlePreviewCard={props.handlePreviewCard}
						/>
					)
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
	@media (min-device-width: 768px) {
		max-width: calc(100vh - 10em);
	}
	@media (min-device-width: 1336px) {
		max-width: calc(100vh - 10em);
	}

	@media (min-device-width: 1440px) {
		max-width: calc(100vh - 15em);
	}

}
`

const Grid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-template-rows: repeat(6, minmax(auto, 1fr));
`

function previewCardAnimation() {
	const show = document.getElementById('show')
	if (
		(show && show.getAttribute('class') === 'hidden') ||
		(show && show.getAttribute('class') === 'hidden fade')
	) {
		if (show) {
			show.setAttribute('class', 'show')
			show.setAttribute('style', 'z-index: 5000')
		}
	} else {
		if (show) {
			show.setAttribute('class', 'hidden fade')
			show.setAttribute('style', 'z-index: 0')
		}
	}
}
export default Board
