import React, { useState, createContext, useEffect } from 'react'
import styled from 'styled-components'
import Container from './Layout/Container'
import { AppContext } from '../App'
import ICard from '../interfaces/ICard'
import Card from './Card'
import PreviewCard from './PreviewCard'
import TokenPosition from '../lib/TokenPosition'
import PlayerToken from './PlayerToken'

const initialState = {
	showPreviewCard: false,
	clickedCard: {}
}

export const BoardContext: React.Context<any> = createContext(initialState)

interface IProps {
	handlePreviewCard?: any
	handleLandedOnCard?: any
	onClick?: any
	landedOn?: number
}

interface Stuff {
	class?: any
	style?: any
	type?: any
	cards?: any
}

const Board: React.FC<Stuff> = (props: any) => {
	console.log('hereere', props)
	const [showPreviewCard, setPreviewCard] = useState(
		initialState.showPreviewCard
	)
	const [clickedCard, setClickedCard] = useState(initialState.clickedCard)

	// Dice logic
	const [diceRolled, setDiceRolled] = useState(0)
	const [dicesPlayed, setDicesPlayed]: [number[], any] = useState([])
	const [recentSum, setRecentSum] = useState(0)

	// player
	const [p1LandedOnCard, setp1LandedOnCard] = useState('')
	const [playerBank, setPlayerBank] = useState(750)
	const [tokenBoardPosition, setPlayerTokenBoardPosition] = useState({})

	useEffect(() => {
		setPlayerTokenBoardPosition({
			position: 'absolute',
			zIndex: 1,
			bottom: '20px',
			left: '40px'
		})
	}, [setPlayerTokenBoardPosition])

	function handlePreviewCard(card: { type: string; name: string }) {
		if (
			card.type !== 'empty' &&
			card.name !== 'Start' &&
			card.name !== 'Jail'
		) {
			setClickedCard(card)
			setPreviewCard(!showPreviewCard)
			updateCssStyles()
		}
	}

	function rollTheDice(value: any) {
		const roll: number = Math.floor(Math.random() * 6 + 1)

		const find_card = value.cards.find(
			(card: any) => card.position === recentSum && card.name !== 'Start'
		)
		console.log('find', find_card, recentSum)

		setDiceRolled(roll)
		setDicesPlayed((dicesPlayed: number[]) => [...dicesPlayed, roll])
		moveTokenOnBoard()
		// setp1LandedOnCard(landedOn)
	}

	function moveTokenOnBoard() {
		// drawAChanceCard()
		// TODO: need to add logic for change cards
		// move the players token on the board
		const sumOfDicesRolled = dicesPlayed.reduce((a, b) => a + b, 0)
		const wentPastStart = sumOfDicesRolled > 19
		const resetSumOfDices = sumOfDicesRolled - 20

		if (wentPastStart) {
			setPlayerBank(playerBank + 200)
			setDicesPlayed([resetSumOfDices]) // if player has moved past Start, reset the initial dice
			setRecentSum(resetSumOfDices) // needed for handleExit()
			TokenPosition(resetSumOfDices, setPlayerTokenBoardPosition) // Set the token board position
		} else {
			setRecentSum(sumOfDicesRolled) // needed for handleExit()
			TokenPosition(sumOfDicesRolled, setPlayerTokenBoardPosition) // Set the token board position
		}
	}

	function handleLandedOnCard(props: any) {
		// setp1LandedOnCard(props)
		// rollTheDice()
	}

	return (
		<BoardContext.Provider value={showPreviewCard}>
			<AppContext.Consumer>
				{value => (
					<Container>
						<PlayerToken tokenBoardPosition={tokenBoardPosition} />
						<BoardWrapper>
							<Grid>
								<Cards
									handlePreviewCard={handlePreviewCard}
									landedOn={recentSum}
									handleLandedOnCard={handleLandedOnCard}
								/>
								<div id="show" className="hidden">
									<PreviewCard
										card={clickedCard}
										handlePreviewCard={handlePreviewCard}
									/>
								</div>
							</Grid>
						</BoardWrapper>

						<button onClick={() => rollTheDice(value)}>Roll the Dice</button>
						<p>You rolled a {diceRolled}</p>
						<p>P1 landed on {p1LandedOnCard}</p>
						{/* {console.log(
							'in appcontext',
							value.cards.find((card: any) => card.position === recentSum)
						)} */}
					</Container>
				)}
			</AppContext.Consumer>
		</BoardContext.Provider>
	)
}

const Cards: React.FC<IProps> = (props: any) => {
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
function updateCssStyles() {
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
