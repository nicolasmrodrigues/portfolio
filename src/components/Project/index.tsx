import {
	Project as ProjectStyle,
	ProjectLink,
	ProjectLinksContainer
} from './styles'
import Title from '../Title'
import Text from '../Text'
import { removeSkeleton } from '../../utils'
import { useState } from 'react'
import Skeleton from '../Skeleton'

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
}: Props) => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<ProjectStyle>
			<img
				src={imageLink}
				onLoad={() => removeSkeleton(setIsLoading)}
				className="loading"
			/>
			{isLoading && <Skeleton />}
			<Title as="h3">{title}</Title>
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
}

export default Project
