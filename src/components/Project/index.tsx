import {
	Project as ProjectStyle,
	ProjectImage,
	ProjectLink,
	ProjectLinksContainer
} from './styles'
import Title from '../Title'
import Text from '../Text'

type Props = {
	imageLink: string
	title: string
	description: string
	deployLink: string
	repoLink: string
}

const Project = ({
	imageLink,
	title,
	description,
	deployLink,
	repoLink
}: Props) => (
	<ProjectStyle>
		<ProjectImage src={imageLink} alt="" />
		<Title as="h3" fontSize={24}>
			{title}
		</Title>
		<Text>{description}</Text>
		<ProjectLinksContainer>
			<ProjectLink href={deployLink} target="_blank">
				Deploy
			</ProjectLink>
			<ProjectLink href={repoLink} target="_blank">
				Repositório
			</ProjectLink>
		</ProjectLinksContainer>
	</ProjectStyle>
)

export default Project
