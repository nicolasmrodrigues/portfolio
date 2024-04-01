import { Title as TitleStyle } from './styles'

export type Props = {
	children: string
	alignment?: 'center' | 'start'
	fontSize?: number
}

const Title = ({ children, alignment = 'start', fontSize }: Props) => (
	<TitleStyle alignment={alignment} fontSize={fontSize}>
		{children}
	</TitleStyle>
)

export default Title
