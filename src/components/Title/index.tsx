import { Title as TitleStyle } from './styles'

export type Props = {
	children: string
	alignment?: 'center' | 'start'
	fontSize?: number
	as?: string
}

const Title = ({ children, alignment = 'start', fontSize, as }: Props) => (
	<TitleStyle as={as} alignment={alignment} fontSize={fontSize}>
		{children}
	</TitleStyle>
)

export default Title
