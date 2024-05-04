import { Title as TitleStyle } from './styles'

export type Props = {
	children: string
	alignment?: 'center' | 'start'
	as?: string
}

const Title = ({ children, alignment = 'start', as }: Props) => (
	<TitleStyle as={as} alignment={alignment}>
		{children}
	</TitleStyle>
)

export default Title
