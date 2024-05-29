import { useState } from 'react'
import Navegation from '../Navegation'
import {
	Header as HeaderStyle,
	Container,
	Title,
	List,
	ListLink,
	NavButton,
	TitleLink,
	Overlay
} from './styles'
import { removeSkeleton } from '../../utils'
import Skeleton from '../Skeleton'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [scroll, setScroll] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	const links = [
		['Início', '#'],
		['Sobre', '#aboutMe'],
		['Habilidades', '#skills'],
		['Projetos', '#projects'],
		['Contato', '#contact']
	]

	window.onscroll = () => {
		setScroll(window.scrollY)
	}

	const changeNavVisibility = () => {
		setIsVisible(!isVisible)
	}

	return (
		<HeaderStyle $scroll={scroll}>
			<Container>
				<TitleLink href="#">
					<img
						id="favicon"
						src="/favicon.png"
						onLoad={() => removeSkeleton(setIsLoading, 'favicon')}
						className="loading"
					/>
					{isLoading && <Skeleton />}
					<Title as="h1">Nícolas Medeiros</Title>
				</TitleLink>
				<NavButton onClick={changeNavVisibility}>Menu</NavButton>
				<Navegation $isVisible={isVisible}>
					<>
						<Overlay onClick={changeNavVisibility} />
						<div>
							<NavButton onClick={changeNavVisibility}>X</NavButton>
							<List>
								{links.map((link, index) => (
									<li key={index}>
										<ListLink onClick={changeNavVisibility} href={link[1]}>
											{link[0]}
										</ListLink>
									</li>
								))}
							</List>
						</div>
					</>
				</Navegation>
			</Container>
		</HeaderStyle>
	)
}

export default Header
