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
			<Board />
		</AppContext.Provider>
	)
}

export default App
