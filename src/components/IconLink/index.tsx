import { Icon as IconSyles } from './styles'

export type Props = {
	href: string
	src: string
	alt?: string
	title?: string
}

const Icon = ({ href, src, alt, title }: Props) => (
	<IconSyles href={href} title={title} target="_blank">
		<img src={src} alt={alt} />
	</IconSyles>
)

export default Icon
