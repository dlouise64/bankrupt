import React from 'react'
import styled from 'styled-components'
import colour from '../data/colors'

interface IProps {
	empty?: boolean
	color?: string
	type_color?: string
	type: string
}
const Card: React.FC<IProps> = props =>
	props.empty ? (
		<EmptyCard />
	) : (
		<CardWrapper color={props.color}>
			<CardBody color={props.type_color} type={props.type}>
				{props.children}
			</CardBody>
		</CardWrapper>
	)

const CardBody = styled.div`
	color: ${colour.white};
	text-align: center;
	h2 {
		margin-top: 20px;
		// font-size: 17px;
		text-transform: uppercase;
		color: ${(props: IProps) => (props.color ? props.color : colour.white)};
	}
	p {
		// font-size: 17px;
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 10px;
		text-align: center;
	}

	// ${props => props.type === 'draw' && 'font-size: 60px'}

	// large screens
	@media all and (min-width: 1690px) {
		h2 {
			${props =>
				props.type === 'text' &&
				'margin: 0; font-size: 26px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
		}
	}

	// laptop
	@media all and (max-width: 1690px) {
		h2 {
			// color: red;
			font-size: 12px;
			// letter-spacing: 1px;
			margin-top: 14px;
			${props =>
				props.type === 'text' &&
				'margin: 0; font-size: 18px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'}

			${props =>
				props.type === 'draw' &&
				'margin: 0; font-size: 36px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
		}
		p {
			font-size: 12px;
			bottom: 5px;
		}
	}

	// Ipad pro
	@media all and (max-width: 1280px) {
		h2 {
			font-size: 10px;
			${props =>
				props.type === 'text' &&
				'margin: 0; font-size: 10px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
		}
	}

	// Ipad
	@media all and (max-width: 980px) {
		h2 {
			font-size: 10px;
			${props =>
				props.type === 'text' &&
				'margin: 0; font-size: 10px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
		}
	}

	// other
	@media all and (max-width: 736px) {
		h2 {
			font-size: 10px;
			${props =>
				props.type === 'text' &&
				'margin: 0; font-size: 10px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
		}
	}

	// large phones
	@media all and (max-width: 480px) {
		h2 {
			font-size: 10px;
			${props =>
				props.type === 'text' &&
				'margin: 0; font-size: 10px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'}
		}
	}
`

const EmptyCard = styled.div`
	background: transparent;
`
const CardWrapper = styled.div`
	cursor: pointer;
	position: relative;
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
