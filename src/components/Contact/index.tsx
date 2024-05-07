import Icon from '../IconLink'
import Title from '../Title'
import { Contact as ContactStyle, IconsList } from './styles'

const Contact = () => (
	<ContactStyle id="contact">
		<Title as="h2" alignment="center">
			Entre em Contato
		</Title>
		<IconsList>
			<li>
				<Icon
					href="mailto:nicolasmedeiros090@gmail.com"
					src="/media-icons/gmail.svg"
					title="Clique para me enviar um email"
					alt="Logo do Gmail"
				/>
			</li>
			<li>
				<Icon
					href="https://www.linkedin.com/in/nicolasmrodrigues/"
					src="/media-icons/linkedin.svg"
					title="Clique para acessar meu LinkedIn"
					alt="Logo do LinkedIn"
				/>
			</li>
			<li>
				<Icon
					href="https://github.com/nicolasmrodrigues"
					src="/media-icons/github.svg"
					title="Clique para acessar meu GitHub"
					alt="Logo do GitHub"
				/>
			</li>
		</IconsList>
	</ContactStyle>
)

export default Contact
