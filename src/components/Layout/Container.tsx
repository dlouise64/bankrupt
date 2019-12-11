import React from 'react'
import styled from 'styled-components'

const Container: React.FC = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
	margin: 0 auto;
	// position: relative;
	// width: 38vw;
	// height: 74vh;
`
export default Container
