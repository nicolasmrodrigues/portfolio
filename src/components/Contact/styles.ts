import styled from 'styled-components'

export const Contact = styled.section`
	padding-top: 136px;
`

export const IconsList = styled.ul`
	display: grid;
	grid-template-columns: 100px 100px 100px;
	justify-content: center;
	gap: 40px;
	margin-top: 32px;

	@media (max-width: 768px) {
		margin: 32px 0 0 0;
		gap: 8px;
	}
`
