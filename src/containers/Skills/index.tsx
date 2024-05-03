import { SkillsList, Skills as SkillsStyle } from './styles'
import Title from '../../components/Title'
import Skill from '../../components/Skill'

const Skills = () => (
	<SkillsStyle id="skills">
		<Title alignment="center">Minhas Habilidades</Title>
		<SkillsList>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=html"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=css"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=js"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=jquery"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=bootstrap"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=git"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=github"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=webpack"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=vite"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=vue"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=react"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=redux"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=gulp"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=sass"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=less"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=styledcomponents"></Skill>
			<Skill skillIconLink="https://skillicons.dev/icons?theme=light&i=python"></Skill>
		</SkillsList>
	</SkillsStyle>
)

export default Skills
