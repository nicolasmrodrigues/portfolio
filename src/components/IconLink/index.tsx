import { useState } from 'react'
import { Icon as IconSyles } from './styles'
import Skeleton from '../Skeleton'
import { removeSkeleton } from '../../utils'

export type Props = {
	href?: string
	src: string
	alt?: string
	title?: string
	id: string
}

const Icon = ({ href, src, alt, title, id }: Props) => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<IconSyles href={href} title={title} target="_blank">
			<img
				id={id}
				src={src}
				alt={alt}
				onLoad={() => removeSkeleton(setIsLoading, id)}
				className="loading"
			/>
			{isLoading && <Skeleton />}
		</IconSyles>
	)
}

export default Icon
