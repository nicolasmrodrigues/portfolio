import Icon from '../Icon'
import Title from '../Title'
import { Contact as ContactStyle, IconsList, IconItem } from './styles'

const Contact = () => (
	<ContactStyle id="contact">
		<Title alignment="center">Entre em Contato</Title>
		<IconsList>
			<IconItem>
				<a href="mailto:nicolasmedeiros090@gmail.com">
					<Icon src="https://skillicons.dev/icons?theme=light&i=gmail" />
				</a>
			</IconItem>
			<IconItem>
				<a
					href="https://www.linkedin.com/in/nicolasmrodrigues/"
					target="_blank"
					rel="noreferrer"
				>
					<Icon src="https://skillicons.dev/icons?i=linkedin" />
				</a>
			</IconItem>
			<IconItem>
				<a
					href="https://github.com/nicolasmrodrigues"
					target="_blank"
					rel="noreferrer"
				>
					<Icon src="https://skillicons.dev/icons?theme=light&i=github" />
				</a>
			</IconItem>
		</IconsList>
	</ContactStyle>
)

export default Contact
