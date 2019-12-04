import React from 'react'
import styled from 'styled-components'

interface IProps {
	empty?: boolean
}
const Card: React.FC<IProps> = props =>
	props.empty ? <EmptyCard /> : <CardWrapper>{props.children}</CardWrapper>

const EmptyCard = styled.div`
	background: transparent;
`
const CardWrapper = styled.div`
	background: #ccc;
	border-radius: 20%;
	width: 100%;
	height: 0;
	padding-bottom: 96%;

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		box-shadow: inset 0 0 0 4px #fff;
	}

	@media only screen and (min-width: 375px) and (min-height: 812px) {
		box-shadow: inset 0 0 0 4px #fff;
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		box-shadow: inset 0 0 0 8px #fff;
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		box-shadow: inset 0 0 0 10px #fff;
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		box-shadow: inset 0 0 0 12px #fff;
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		box-shadow: inset 0 0 0 15px #fff;
	}
	@media only screen and (min-width: 1200px) and (min-height: 950px) {
		box-shadow: inset 0 0 0 15px #fff;
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1440px) {
		box-shadow: inset 0 0 0 4px #fff;
	}

	@media only screen and (min-width: 1200px) and (min-height: 900px) {
		box-shadow: inset 0 0 0 15px #fff;
	}

	@media only screen and (min-width: 1440px) and (min-height: 900px) {
		box-shadow: inset 0 0 0 20px #fff;
	}
`

export default Card
