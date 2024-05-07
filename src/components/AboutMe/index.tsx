import {
	AboutMe as AboutMeStyle,
	AboutMeContainer,
	TextContainer,
	ImageContainer
} from './styles'
import Title from '../Title'
import Text from '../Text'
import { useState } from 'react'
import { removeSkeleton } from '../../utils'
import Skeleton from '../Skeleton'

const AboutMe = () => {
	const [isLoading, setIsLoading] = useState(true)
	return (
		<AboutMeStyle id="aboutMe">
			<AboutMeContainer>
				<ImageContainer>
					<img
						src="/profile-pic.webp"
						onLoad={() => removeSkeleton(setIsLoading)}
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
