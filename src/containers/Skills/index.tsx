import { SkillsList, Skills as SkillsStyle } from './styles'
import Title from '../../components/Title'
import Icon from '../../components/IconLink'

const Skills = () => {
	const skills = [
		'html',
		'css',
		'javascript',
		'jquery',
		'typescript',
		'bootstrap',
		'git',
		'github',
		'webpack',
		'vite',
		'vue',
		'react',
		'redux',
		'babel',
		'gulp',
		'sass',
		'less',
		'styledcomponents',
		'python',
		'jest',
		'cypress'
	]

	const formatSkill = (skill: string) => {
		if (skill === 'css') return 'CSS'
		if (skill === 'html') return 'HTML'
		if (skill === 'jquery') return 'jQuery'
		if (skill === 'styledcomponents') return 'Styled components'

		return skill[0].toUpperCase() + skill.substring(1)
	}

	return (
		<SkillsStyle id="skills">
			<Title as="h2" alignment="center">
				Minhas Habilidades
			</Title>
			<SkillsList>
				{skills.map((skill, index) => (
					<li key={index}>
						<Icon
							id={skill}
							href={`https://www.google.com/search?&q=${formatSkill(skill)}`}
							title={`Clique para pesquisar sobre: ${formatSkill(skill)}`}
							src={`/skill-icons/${skill}.svg`}
						></Icon>
					</li>
				))}
			</SkillsList>
		</SkillsStyle>
	)
}

export default Skills
