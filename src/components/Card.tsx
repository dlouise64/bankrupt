import React from 'react'
import styled from 'styled-components'

interface IProps {
	empty?: boolean
	borderBase?: number
	color?: string
	type_color?: string
	type: string
	name?: string
}
const Card: React.FC<IProps> = props =>
	props.empty ? (
		<EmptyCard />
	) : (
		<CardWrapper
			color={props.color}
			type_color={props.type_color}
			type={props.type}
			borderBase={22}
			name={props.name}>
			{props.children}
		</CardWrapper>
	)

const EmptyCard = styled.div`
	background: transparent;
`

const CardWrapper = styled.div<IProps>`
	background: ${props => props.color};
	border-radius: 16%;
	width: 100%;
	height: 0;
	padding-bottom: 96%;
	position: relative;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: white;

	p {
		font-size: 20px;
		width: 100%;
		left: 0;
		top: 1px;
		position: absolute;
		text-align: center;
		color: ${props => props.type_color && props.type_color};
	}

	span {
		position: absolute;
		bottom: 43px;
		width: 100%;
		left: 0;
		font-size: 25px;
		color: rgba(244, 244, 244, 0.8);
	}

	box-shadow: inset 0 0 0
		${props => props.borderBase && props.borderBase - 18}px #fff;
	p {
		// color: red;
		margin-top: ${props =>
			props.type === 'utility'
				? props.name === 'Water works' && '.9vh'
				: '1.2vh'};
		font-size: ${props =>
			props.type && props.type === 'draw'
				? '5.8vh'
				: props => (props.type === 'utility' ? '1.5vw' : '1.5vw')};
	}

	span {
		position: absolute;
		bottom: 1.5vh;
		width: 100%;
		left: 0;
		font-size: 2vw;
		color: rgba(244, 244, 244, 0.8);
	}

	svg {
		height: 3.6vh;
		position: absolute;
		width: 100%;
		left: 0;
		bottom: ${props => (props.name === 'Water works' ? '1.6vh' : '2.7vh')};
	}

	@media only screen and (min-width: 320px) {
		letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			// color: red;
			margin-top: ${props =>
				props.type === 'utility'
					? props.name === 'Water works' && '.9vh'
					: '1.2vh'};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '4.2vh'
					: props => (props.type === 'utility' ? '2vw' : '2vw')};
		}

		span {
			position: absolute;
			bottom: 1.5vh;
			width: 100%;
			left: 0;
			font-size: 2vw;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 3.6vh;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '1vh' : '1.7vh')};
		}
	}

	// Iphone 4
	@media only screen and (min-width: 320px) and (min-height: 480px) {
		letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			// color: red;
			margin-top: ${props =>
				props.type === 'utility'
					? props.name === 'Water works' && '.9vh'
					: '1.2vh'};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '5.2vh'
					: props => (props.type === 'utility' ? '2vw' : '2vw')};
		}

		span {
			position: absolute;
			bottom: 1.5vh;
			width: 100%;
			left: 0;
			font-size: 2vw;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 3.6vh;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '1vh' : '1.7vh')};
		}
	}

	// Iphone 5
	@media only screen and (min-width: 320px) and (min-height: 568px) {
		letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			// color: purple;
			margin-top: ${props =>
				props.type === 'utility'
					? props.name === 'Water works' && '.9vh'
					: '1.2vh'};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '4.2vh'
					: props => (props.type === 'utility' ? '2vw' : '2vw')};
		}

		span {
			position: absolute;
			bottom: 1.5vh;
			width: 100%;
			left: 0;
			font-size: 2vw;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 2.9vh;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '1vh' : '1.8vh')};
		}
	}

	@media only screen and (min-width: 360px) {
		letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			// color: blue;
			margin-top: ${props =>
				props.type === 'utility'
					? props.name === 'Water works' && '.9vh'
					: '1.2vh'};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '4.2vh'
					: props => (props.type === 'utility' ? '2vw' : '2vw')};
		}

		span {
			position: absolute;
			bottom: 1.5vh;
			width: 100%;
			left: 0;
			font-size: 2vw;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 3vh;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '1vh' : '1.7vh')};
		}
	}

	// IphoneX
	@media only screen and (min-width: 375px) {
		letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			// color: blue;
			margin-top: ${props =>
				props.type === 'utility'
					? props.name === 'Water works' && '.5vh'
					: '1.2vh'};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '4vh'
					: props => (props.type === 'utility' ? '2vw' : '2vw')};
		}

		span {
			position: absolute;
			bottom: 1.5vh;
			width: 100%;
			left: 0;
			font-size: 2vw;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 3.2vh;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '.9vh' : '1.4vh')};
		}
	}

	// IphoneX
	@media only screen and (min-width: 375px) and (min-height: 812px) {
		letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			// color: blue;
			margin-top: ${props =>
				props.type === 'utility'
					? props.name === 'Water works' && '.5vh'
					: '1.2vh'};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '3.3vh'
					: props => (props.type === 'utility' ? '2vw' : '2vw')};
		}

		span {
			position: absolute;
			bottom: 1.5vh;
			width: 100%;
			left: 0;
			font-size: 2vw;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 2.5vh;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '.9vh' : '1.4vh')};
		}
	}

	h2 {
		color: ${props => props.type_color};
	}
`

export default Card
