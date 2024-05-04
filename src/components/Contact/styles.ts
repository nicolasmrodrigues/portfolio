import styled from 'styled-components'

export const Contact = styled.section`
	padding-top: 136px;
`

export const IconsList = styled.ul`
	display: flex;
	justify-content: center;
	gap: 40px;
	margin-top: 32px;

	@media (max-width: 768px) {
		margin: 0;
		gap: 24px;
	}
`
