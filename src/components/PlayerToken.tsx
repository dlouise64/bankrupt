import React from 'react'
import Token from '../images/monopoly_token_ship.png'

function PlayerToken(props: any) {
	return <img src={Token} style={props.tokenBoardPosition} alt="token" />
}

export default PlayerToken
