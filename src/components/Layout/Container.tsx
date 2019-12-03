import React from 'react'
import styled from 'styled-components'

const Container: React.FC = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
	margin: 0 auto;
	margin-top: 4%;
	height: 100vh;
	@media (min-width: 768px) {
		width: 80vh;
	}

	@media (min-width: 1440px) {
		width: 40%;
	}
`
export default Container
