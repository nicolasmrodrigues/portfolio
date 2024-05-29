import styled from 'styled-components'

export const IconsList = styled.ul`
	display: grid;
	grid-template-columns: 90px 90px 90px;
	justify-content: center;
	gap: 40px;
	margin-top: 32px;

	@media (max-width: 768px) {
		margin: 32px 0 0 0;
		grid-template-columns: 70px 70px 70px;
		gap: 24px;
	}
`
