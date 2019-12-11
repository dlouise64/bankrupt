import React from 'react'
import Board from './components/Board'
import cards from './data/cards'

const initialState = {
	cards: []
}

export const AppContext: React.Context<any> = React.createContext(initialState)

const App: React.FC = () => {
	return (
		<AppContext.Provider value={{ cards: cards }}>
			<div className="main">
				<h1>Oops, this game is not built for landscape</h1>
				<Board cards={cards} />
			</div>
		</AppContext.Provider>
	)
}

export default App
