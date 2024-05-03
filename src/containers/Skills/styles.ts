import styled from 'styled-components'

export const Skills = styled.section`
	padding-top: 136px;
`

export const SkillsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (max-width: 768px) {
		justify-content: start;
	}
`
