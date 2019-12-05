import React from 'react'
import styled from 'styled-components'

interface IProps {
	empty?: boolean
	borderBase?: number
	color?: string
	type_color?: string
	type: string
}
const Card: React.FC<IProps> = props =>
	props.empty ? (
		<EmptyCard />
	) : (
		<CardWrapper
			color={props.color}
			type_color={props.type_color}
			type={props.type}
			borderBase={22}>
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
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 18}px #fff;
		p {
			margin-top: 10px;
			font-size: ${props =>
				props.type && props.type === 'draw' ? '20px' : '6px'};
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
