import { IconContext } from 'react-icons'
import { FaArrowDown } from 'react-icons/fa'
import { Container, Hero as HeroStyle, IconLink, Subtitle } from './styles'
import DownloadButton from '../DownloadButton'
import { useState } from 'react'
import { removeSkeleton } from '../../utils'
import Skeleton from '../Skeleton'
const Hero = () => {
	const [isLoading, setIsLoading] = useState(true)
	return (
		<>
			<HeroStyle>
				<Container>
					<Subtitle>Olá 👋, eu sou Nícolas Medeiros</Subtitle>
					<Subtitle>Bem vindo ao meu portfólio!</Subtitle>
					<DownloadButton />
				</Container>
				<Container>
					<img
						src="/computers.png"
						alt=""
						className="loading"
						onLoad={() => removeSkeleton(setIsLoading)}
					/>
					{isLoading && <Skeleton />}
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
