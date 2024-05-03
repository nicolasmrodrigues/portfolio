import { Icon as IconSyles } from './styles'

export type Props = {
	src: string
	alt?: string
}

const Icon = ({ src, alt }: Props) => <IconSyles src={src} alt={alt} />

export default Icon
