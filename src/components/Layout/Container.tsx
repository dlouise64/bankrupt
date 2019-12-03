import React from 'react'
import styled from 'styled-components'

const Container: React.FC = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
	@media (min-width: 768px) {
		width: 65%;
	}

	@media (min-width: 1440px) {
		width: 40%;
	}
	margin: 0 auto;
`
export default Container
