import { Section as SectionStyle } from './styles'
import Title from '../Title'

type Props = {
	title: string
	id: string
	children: JSX.Element
}

const Section = ({ title, id, children }: Props) => (
	<SectionStyle id={id}>
		<Title as="h2" $alignment="center">
			{title}
		</Title>
		{children}
	</SectionStyle>
)

export default Section
