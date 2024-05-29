import {
	AboutMe as AboutMeStyle,
	AboutMeContainer,
	TextContainer,
	ImageContainer
} from './styles'
import Title from '../../components/Title'
import Text from '../../components/Text'
import { useState } from 'react'
import Skeleton from '../../components/Skeleton'
import { removeSkeleton } from '../../utils'

const AboutMe = () => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<AboutMeStyle id="aboutMe">
			<AboutMeContainer>
				<ImageContainer>
					<img
						id="profile-pic"
						src="/profile-pic.webp"
						onLoad={() => removeSkeleton(setIsLoading, 'profile-pic')}
						className="loading"
					/>
					{isLoading && <Skeleton />}
				</ImageContainer>
				<TextContainer>
					<Title as="h2">Sobre Mim</Title>
					<Text>
						Eu sou um estudante de Desenvolvimento Web Full stack na EBAC
						(Escola Britânica de Artes Criativas e Tecnologia) onde estou
						aprendendo todas as habilidades e tecnologias necessárias para me
						tornar um excelente profissional nessa área na qual sempre fui
						apaixonado. Eu sou um estudante de Desenvolvimento Web Full stack na
						EBAC (Escola Britânica de Artes Criativas e Tecnologia) onde estou
						aprendendo todas as habilidades e tecnologias necessárias para me
						tornar um excelente profissional nessa área na qual sempre fui
						apaixonado. Eu sou um estudante de Desenvolvimento Web Full stack na
						EBAC (Escola Britânica de Artes Criativas e Tecnologia) onde estou
						aprendendo todas as habilidades e tecnologias necessárias para me
						tornar um excelente profissional nessa área na qual sempre fui
						apaixonado.
					</Text>
				</TextContainer>
			</AboutMeContainer>
		</AboutMeStyle>
	)
}

export default AboutMe
