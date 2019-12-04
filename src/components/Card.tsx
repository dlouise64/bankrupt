import React from 'react'
import styled from 'styled-components'

interface IProps {
	empty?: boolean
	borderBase?: number
	color?: string
	type_color?: string
}
const Card: React.FC<IProps> = props =>
	props.empty ? (
		<EmptyCard />
	) : (
		<CardWrapper
			color={props.color}
			type_color={props.type_color}
			borderBase={20}>
			{props.children}
		</CardWrapper>
	)

const EmptyCard = styled.div`
	background: transparent;
`

const CardWrapper = styled.div<IProps>`
	background: ${props => props.color};
	border-radius: 20%;
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
			${props => props.borderBase && props.borderBase - 16}px #fff;
		p {
			margin-top: 10px;
			font-size: 7px;
		}
	}

	@media only screen and (min-width: 375px) and (min-height: 812px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 16}px #fff;
		p {
			font-size: 7px;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 12}px #fff;
		p {
			font-size: 7px;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 10}px #fff;
		p {
			margin-top: 22px;
			font-size: 14px;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 8}px #fff;
		p {
			margin-top: 28px;
			font-size: 20px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
		p {
			margin-top: 43px;
			font-size: 31px;
		}
	}
	@media only screen and (min-width: 1200px) and (min-height: 950px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
		p {
			font-size: 7px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1440px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 16}px #fff;
		p {
			font-size: 7px;
		}
	}

	@media only screen and (min-width: 1200px) and (min-height: 900px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
		p {
			margin-top: 45px;
			font-size: 31px;
		}
	}

	@media only screen and (min-width: 1440px) and (min-height: 900px) {
		box-shadow: inset 0 0 0 ${props => props.borderBase}px #fff;
		p {
			margin-top: 55px;
			font-size: 40px;
		}
	}

	h2 {
		color: ${props => props.type_color};
	}
`

export default Card
