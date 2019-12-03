import React from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'

it('renders <Container /> crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Container />, div)
	ReactDOM.unmountComponentAtNode(div)
})
