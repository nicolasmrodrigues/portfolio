import Icon from '../IconLink'
import Title from '../Title'
import { Contact as ContactStyle, IconsList } from './styles'

const Contact = () => (
	<ContactStyle id="contact">
		<Title as="h2" alignment="center">
			Entre em Contato
		</Title>
		<IconsList>
			<Icon
				href="mailto:nicolasmedeiros090@gmail.com"
				src="https://skillicons.dev/icons?theme=light&i=gmail"
				title="Clique para me enviar um email"
				alt="Logo do Gmail"
			/>
			<Icon
				href="https://www.linkedin.com/in/nicolasmrodrigues/"
				src="https://skillicons.dev/icons?i=linkedin"
				title="Clique para acessar meu LinkedIn"
				alt="Logo do LinkedIn"
			/>
			<Icon
				href="https://github.com/nicolasmrodrigues"
				src="https://skillicons.dev/icons?theme=light&i=github"
				title="Clique para acessar meu GitHub"
				alt="Logo do GitHub"
			/>
		</IconsList>
	</ContactStyle>
)

export default Contact
