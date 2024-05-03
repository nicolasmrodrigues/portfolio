import { SkillsList, Skills as SkillsStyle } from './styles'
import Title from '../../components/Title'
import Icon from '../../components/IconLink'

const Skills = () => {
	const skills = [
		'html',
		'css',
		'js',
		'jquery',
		'bootstrap',
		'git',
		'github',
		'webpack',
		'vite',
		'vue',
		'react',
		'redux',
		'gulp',
		'sass',
		'less',
		'styledcomponents',
		'python'
	]

	const formatSkill = (skill: string) => {
		if (skill === 'js') return 'Javascript'
		if (skill === 'css') return 'CSS'
		if (skill === 'html') return 'HTML'
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
							href={`https://www.google.com/search?&q=${formatSkill(skill)}`}
							title={`Clique para pesquisar sobre: ${formatSkill(skill)}`}
							src={`https://skillicons.dev/icons?theme=light&i=${skill}`}
							alt={`Logo de ${formatSkill(skill)}`}
						></Icon>
					</li>
				))}
			</SkillsList>
		</SkillsStyle>
	)
}

export default Skills
