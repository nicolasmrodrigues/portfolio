import {
	Container,
	Hero as HeroStyle,
	IconLink,
	Subtitle,
	Image
} from './styles'
import { IconContext } from 'react-icons'
import { FaArrowDown } from 'react-icons/fa'
const Hero = () => {
	return (
		<>
			<HeroStyle>
				<Container>
					<Subtitle>Olá 👋, eu sou Nícolas Medeiros</Subtitle>
					<Subtitle>Bem vindo ao meu portfólio!</Subtitle>
				</Container>
				<Container>
					<Image src="/computers.png" alt="" />
				</Container>
			</HeroStyle>
			<IconContext.Provider value={{ color: 'white', size: '2.5em' }}>
				<IconLink href="#aboutMe">
					<FaArrowDown />
				</IconLink>
			</IconContext.Provider>
		</>
	)
}

export default Hero
