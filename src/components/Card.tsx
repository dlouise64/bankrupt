import React from 'react'
import styled from 'styled-components'

interface IProps {
	empty?: boolean
	borderBase?: number
	color?: string
}
const Card: React.FC<IProps> = props =>
	props.empty ? (
		<EmptyCard />
	) : (
		<CardWrapper color={props.color} borderBase={22}>
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

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 16}px #fff;
	}

	@media only screen and (min-width: 375px) and (min-height: 812px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 16}px #fff;
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 12}px #fff;
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 10}px #fff;
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 8}px #fff;
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
	}
	@media only screen and (min-width: 1200px) and (min-height: 950px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1440px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 16}px #fff;
	}

	@media only screen and (min-width: 1200px) and (min-height: 900px) {
		box-shadow: inset 0 0 0
			${props => props.borderBase && props.borderBase - 5}px #fff;
	}

	@media only screen and (min-width: 1440px) and (min-height: 900px) {
		box-shadow: inset 0 0 0 ${props => props.borderBase}px #fff;
	}
`

export default Card
