import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => {
	return (
		<CardWrapper>
			<CardBody>{children}</CardBody>
		</CardWrapper>
	)
}

const CardWrapper = styled.div`
	background: #fff;
	border-radius: 13%;
	padding: 5%;
	width: 90%;
	height: 0;
	padding-bottom: 89%;
`

const CardBody = styled.div`
	background: #ccc;
	height: inherit;
	border-radius: 10%;
	width: 100%;
	height: 0;
	padding-bottom: 94%;
`

export default Card
