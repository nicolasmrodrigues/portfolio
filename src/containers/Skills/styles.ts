import styled from 'styled-components'

export const Skills = styled.section`
	padding-top: 136px;
`

export const SkillsList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
	gap: 32px;
	justify-items: center;
	margin: 32px auto 0 auto;
	max-width: 943px;

	@media (max-width: 768px) {
		row-gap: 32px;
		column-gap: 0;
	}
`
