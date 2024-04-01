import Icon from '../Icon'
import { Skill as SkillStyle } from './styles'

type Props = {
	skillIconLink: string
	alt?: string
}

const Skill = ({ skillIconLink, alt }: Props) => (
	<SkillStyle>
		<Icon src={skillIconLink} alt={alt} />
	</SkillStyle>
)

export default Skill
