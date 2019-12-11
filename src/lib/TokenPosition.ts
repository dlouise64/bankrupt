function TokenPosition(position: number, setPlayerTokenBoardPosition: any) {
	const tokenDefaultStyles = {
		position: 'absolute',
		zIndex: 6000
	}
	switch (position) {
		case 0:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '20px',
				left: '40px'
			})
		case 1:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '153px',
				left: '40px'
			})
		case 2:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '260px',
				left: '40px'
			})
		case 3:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '380px',
				left: '40px'
			})
		case 4:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '480px',
				left: '40px'
			})
		case 5:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '600px',
				left: '40px	'
			})
		case 6:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '600px',
				left: '160px'
			})
		case 7:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '600px',
				left: '280px'
			})
		case 8:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '600px',
				left: '400px'
			})
		case 9:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '600px',
				left: '520px'
			})
		case 10:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '600px',
				left: '640px'
			})
		case 11:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '490px',
				left: '640px'
			})
		case 12:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '380px',
				left: '640px'
			})
		case 13:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '250px',
				left: '640px'
			})
		case 14:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '160px',
				left: '640px'
			})
		case 15:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '40px',
				left: '640px'
			})
		case 16:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '40px',
				left: '520px'
			})
		case 17:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '40px',
				left: '400px'
			})
		case 18:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '40px',
				left: '280px'
			})
		case 19:
			return setPlayerTokenBoardPosition({
				...tokenDefaultStyles,
				bottom: '40px',
				left: '160px'
			})
		default:
	}
}

export default TokenPosition
