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
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0
				}}>
				<Board />
			</div>
		</AppContext.Provider>
	)
}

export default App
