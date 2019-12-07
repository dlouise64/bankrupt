import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import { AppContext } from '../App'
import ICard from '../interfaces/ICard'
import Card from './Card'
import PreviewCard from './PreviewCard'
import { useSpring, animated } from 'react-spring'

interface IProps {
	handlePreviewCard?: any
	onClick?: any
}

interface Stuff {
	class?: any
	style?: any
}
const Board: React.FC<Stuff> = () => {
	const [showPreviewCard, setPreviewCard] = useState(false)

	function handlePreviewCard() {
		setPreviewCard(!showPreviewCard)
		const show = document.getElementById('show')
		if (
			(show && show.getAttribute('class') === 'hidden') ||
			(show && show.getAttribute('class') === 'hidden fade')
		) {
			show && show.setAttribute('class', 'show')
		} else {
			show && show.setAttribute('class', 'hidden fade')
		}
	}

	return (
		<>
			<Container>
				<BoardWrapper>
					<button
						style={{
							position: 'absolute',
							left: 0,
							zIndex: 2
						}}
						onClick={() => handlePreviewCard()}>
						test
					</button>
					<Grid>
						<Cards handlePreviewCard={handlePreviewCard} />
						<div id="show" className="hidden">
							<PreviewCard />
						</div>
					</Grid>
				</BoardWrapper>
			</Container>
		</>
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
}
`

const Grid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(6, minmax(auto, 1fr));
	grid-template-rows: repeat(6, minmax(auto, 1fr));
`

export default Board
