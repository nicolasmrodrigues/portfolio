import Icon from '../../components/IconLink'
import Section from '../../components/Section'
import { IconsList } from './styles'

const Contact = () => (
	<Section title="Entre em Contato" id="contact">
		<>
			<IconsList>
				<li>
					<Icon
						id="gmail"
						href="mailto:nicolasmedeiros090@gmail.com"
						src="/media-icons/gmail.svg"
						title="Clique para me enviar um email"
						alt="Logo do Gmail"
					/>
				</li>
				<li>
					<Icon
						id="linkedin"
						href="https://www.linkedin.com/in/nicolasmrodrigues/"
						src="/media-icons/linkedin.svg"
						title="Clique para acessar meu LinkedIn"
						alt="Logo do LinkedIn"
					/>
				</li>
				<li>
					<Icon
						id="github-media"
						href="https://github.com/nicolasmrodrigues"
						src="/media-icons/github.svg"
						title="Clique para acessar meu GitHub"
						alt="Logo do GitHub"
					/>
				</li>
			</IconsList>
		</>
	</Section>
)

export default Contact
