import styled from 'styled-components'

export const Skills = styled.section`
	padding-top: 136px;
`

export const SkillsList = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
	gap: 32px;

	@media (max-width: 768px) {
		gap: 0;
	}
`
