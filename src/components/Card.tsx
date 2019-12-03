import React from 'react'
import styled from 'styled-components'
import colour from '../data/colors'

interface IProps {
	empty?: boolean
	color?: string
}
const Card: React.FC<IProps> = props =>
	props.empty ? (
		<EmptyCard />
	) : (
		<CardWrapper color={props.color}>
			<CardBody>{props.children}</CardBody>
		</CardWrapper>
	)

const CardBody = styled.div`
	color: ${colour.white};
	text-align: center;
	h2 {
		font-size: 2vh;
	}
`

const EmptyCard = styled.div`
	background: transparent;
`
const CardWrapper = styled.div`
	background: ${props => props.color};
	border-radius: 20%;
	width: 100%;
	height: 0;
	padding-bottom: 96%;

	// large screens
	@media all and (min-width: 1690px) {
		box-shadow: inset 0 0 0 8px #fff;
	}

	// desktop
	@media all and (max-width: 1690px) {
		box-shadow: inset 0 0 0 6px #fff;
	}

	// Ipad pro
	@media all and (max-width: 1280px) {
		box-shadow: inset 0 0 0 8px #fff;
	}

	// Ipad
	@media all and (max-width: 980px) {
		box-shadow: inset 0 0 0 8px #fff;
	}

	// other
	@media all and (max-width: 736px) {
		box-shadow: inset 0 0 0 8px #fff;
	}

	// large phones
	@media all and (max-width: 480px) {
		box-shadow: inset 0 0 0 4px #fff;
	}
`

export default Card
