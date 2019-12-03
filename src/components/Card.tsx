import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => {
	return <CardWrapper>{children}</CardWrapper>
}

const CardWrapper = styled.div`
	background: #ccc;
	border-radius: 20%;
	width: 100%;
	height: 0;
	padding-bottom: 96%;
	box-shadow: inset 0 0 0 3px #fff;
`

export default Card
