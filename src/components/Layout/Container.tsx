import React from 'react'
import styled from 'styled-components'

const Container: React.FC = ({ children }) => {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
	margin: 0 auto;
	// height: 100vh;

	// /* Extra small devices (phones, 600px and down) */
	// @media only screen and (max-width: 600px) {
	// 	margin-top: 40%;
	// }

	// @media only screen and (min-width: 375px) and (min-height: 812px) {
	// 	margin-top: 50%;
	// }

	// /* Small devices (portrait tablets and large phones, 600px and up) */
	// @media only screen and (min-width: 600px) {
	// 	margin-top: -130px;
	// }

	// /* Medium devices (landscape tablets, 768px and up) */
	// @media only screen and (min-width: 768px) {
	// 	margin-top: -85px;
	// 	transform: scale(0.43);
	// }

	// /* Large devices (laptops/desktops, 992px and up) */
	// @media only screen and (min-width: 992px) {
	// 	margin-top: 160px;
	// }

	// /* Extra large devices (large laptops and desktops, 1200px and up) */
	// @media only screen and (min-width: 1200px) {
	// 	margin-top: -130px;
	// 	transform: scale(0.4);
	// }
	// @media only screen and (min-width: 1200px) and (min-height: 950px) {
	// 	margin-top: -7%;
	// 	transform: scale(0.5);
	// }

	// /* Extra large devices (large laptops and desktops, 1200px and up) */
	// @media only screen and (min-width: 1440px) {
	// 	margin-top: -190px;
	// 	transform: scale(0.4);
	// }

	// @media only screen and (min-width: 1200px) and (min-height: 900px) {
	// 	margin-top: -8.5%;
	// 	transform: scale(0.5);
	// }

	// @media only screen and (min-width: 1440px) and (min-height: 900px) {
	// 	margin-top: -9.5%;
	// 	transform: scale(0.4);
	// }

	@media only screen and (min-width: 320px) {
		// margin-top: 0;
		// margin-bottom: 0;
		// position: relative;
	}
`
export default Container
