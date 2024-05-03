import {
	AboutMe as AboutMeStyle,
	AboutMeContainer,
	Image,
	TextContainer,
	ImageContainer
} from './styles'
import Title from '../Title'
import Text from '../Text'

const AboutMe = () => (
	<AboutMeStyle id="aboutMe">
		<AboutMeContainer>
			<ImageContainer>
				<Image src="/profile-pic.jpg" alt="" />
			</ImageContainer>
			<TextContainer>
				<Title as="h2">Sobre Mim</Title>
				<Text>
					Eu sou um estudante de Desenvolvimento Web Full stack na EBAC (Escola
					Britânica de Artes Criativas e Tecnologia) onde estou aprendendo todas
					as habilidades e tecnologias necessárias para me tornar um excelente
					profissional nessa área na qual sempre fui apaixonado. Eu sou um
					estudante de Desenvolvimento Web Full stack na EBAC (Escola Britânica
					de Artes Criativas e Tecnologia) onde estou aprendendo todas as
					habilidades e tecnologias necessárias para me tornar um excelente
					profissional nessa área na qual sempre fui apaixonado. Eu sou um
					estudante de Desenvolvimento Web Full stack na EBAC (Escola Britânica
					de Artes Criativas e Tecnologia) onde estou aprendendo todas as
					habilidades e tecnologias necessárias para me tornar um excelente
					profissional nessa área na qual sempre fui apaixonado.
				</Text>
			</TextContainer>
		</AboutMeContainer>
	</AboutMeStyle>
)

export default AboutMe
