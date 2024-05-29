import styled from 'styled-components'

export const SkillsList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, 90px);
	gap: 32px 48px;
	margin: 32px auto 0 auto;
	max-width: 918px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, 70px);
		justify-content: center;
	}
`
