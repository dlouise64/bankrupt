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
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			margin-top: ${props => (props.type === 'utility' ? '5px' : '9px')};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '20px'
					: props => (props.type === 'utility' ? '6px' : '7px')};
		}

		span {
			position: absolute;
			bottom: 9px;
			width: 100%;
			left: 0;
			font-size: 7px;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 16px;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '7px' : '11px')};
		}
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) and (min-height: 667px) {
		// letter-spacing: 0;
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			// color: red;
			margin-top: ${props => (props.type === 'utility' ? '5px' : '9px')};
			font-size: ${props =>
				props.type && props.type === 'draw'
					? '20px'
					: props => (props.type === 'utility' ? '8px' : '9px')};
		}

		span {
			position: absolute;
			bottom: 11px;
			width: 100%;
			left: 0;
			font-size: 9px;
			color: rgba(244, 244, 244, 0.8);
		}

		svg {
			height: 20px;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: ${props => (props.name === 'Water works' ? '6px' : '12px')};
		}
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (min-width: 414px) and (min-height: 736px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			margin-top: 10px;
			font-size: ${props =>
				props.type && props.type === 'draw' ? '20px' : '7px'};
		}
	}

	@media only screen and (min-width: 375px) and (min-height: 812px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			font-size: ${props =>
				props.type && props.type === 'draw' ? '20px' : '7px'};
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 12}px #fff;
		p {
			font-size: ${props =>
				props.type && props.type === 'draw' ? '20px' : '7px'};
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 12}px #fff;
		p {
			margin-top: 22px;
			font-size: ${props =>
				props.type && props.type === 'draw' ? '50px' : '14px'};
		}
		span {
			position: absolute;
			bottom: 25px;
			width: 100%;
			left: 0;
			font-size: 15px;
			color: rgba(244, 244, 244, 0.8);
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 8}px #fff;
		p {
			margin-top: 28px;
			font-size: ${props =>
				props.type && props.type === 'draw' ? '70px' : '20px'};
		}
		span {
			position: absolute;
			bottom: 32px;
			width: 100%;
			left: 0;
			font-size: 21px;
			color: rgba(244, 244, 244, 0.8);
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
		p {
			margin-top: 43px;
			font-size: ${props =>
				props.type && props.type === 'draw' ? '90px' : '26px'};
		}
		span {
			position: absolute;
			bottom: 45px;
			width: 100%;
			left: 0;
			font-size: 25px;
			color: rgba(244, 244, 244, 0.8);
		}
	}
	@media only screen and (min-width: 1200px) and (min-height: 950px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
		p {
			font-size: ${props =>
				props.type && props.type === 'draw' ? '90px' : '7px'};
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1440px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 16}px #fff;
		p {
			font-size: ${props =>
				props.type && props.type === 'draw' ? '20px' : '7px'};
		}
	}

	@media only screen and (min-width: 1200px) and (min-height: 900px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
		p {
			margin-top: 45px;
			font-size: ${props =>
				props.type && props.type === 'draw' ? '100px' : '31px'};
		}
	}

	@media only screen and (min-width: 1680px) and (min-height: 900px) {
		box-shadow: inset 0 0 0 ${props => props.borderBase}px #fff;
		p {
			margin-top: 55px;
			font-size: ${props =>
				props.type && props.type === 'draw' ? '140px' : '36px'};
		}
	}

	h2 {
		color: ${props => props.type_color};
	}
`

export default Card
