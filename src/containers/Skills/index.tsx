import { SkillsList, Skills as SkillsStyle } from './styles'
import Title from '../../components/Title'
import Skill from '../../components/Skill'

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

	return (
		<SkillsStyle id="skills">
			<Title as="h2" alignment="center">
				Minhas Habilidades
			</Title>
			<SkillsList>
				{skills.map((skill, index) => (
					<Skill
						key={index}
						skillIconLink={`https://skillicons.dev/icons?theme=light&i=${skill}`}
					></Skill>
				))}
			</SkillsList>
		</SkillsStyle>
	)
}

export default Skills
