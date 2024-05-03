import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Inter", sans-serif;
		list-style: none;
	}

	body {
		background-color: #282d34;
		overflow-x: hidden;
	}
`

export const Container = styled.div`
	max-width: 1232px;
	width: 95%;
	margin: 0 auto;
`

export default GlobalStyle
