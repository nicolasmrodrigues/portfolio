import { useState } from 'react'
import Navegation from '../Navegation'
import {
	Header as HeaderStyle,
	HeaderContainer,
	Title,
	List,
	ListLink,
	NavButton,
	TitleLink,
	HeaderIcon
} from './styles'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [scroll, setScroll] = useState(0)

	window.onscroll = () => {
		setScroll(window.scrollY)
	}

	return (
		<HeaderStyle className={scroll > 128 ? 'background' : ''}>
			<HeaderContainer>
				<TitleLink href="#">
					<HeaderIcon src="/favicon.png" alt="" />
					<Title>Nícolas Medeiros</Title>
				</TitleLink>
				<NavButton onClick={() => setIsVisible(!isVisible)}>Menu</NavButton>
				<Navegation isVisible={isVisible}>
					<NavButton onClick={() => setIsVisible(!isVisible)}>X</NavButton>
					<List>
						<li>
							<ListLink onClick={() => setIsVisible(!isVisible)} href="#">
								Início
							</ListLink>
						</li>
						<li>
							<ListLink
								onClick={() => setIsVisible(!isVisible)}
								href="#aboutMe"
							>
								Sobre
							</ListLink>
						</li>
						<li>
							<ListLink onClick={() => setIsVisible(!isVisible)} href="#skills">
								Habilidades
							</ListLink>
						</li>
						<li>
							<ListLink
								onClick={() => setIsVisible(!isVisible)}
								href="#projects"
							>
								Projetos
							</ListLink>
						</li>
						<li>
							<ListLink
								onClick={() => setIsVisible(!isVisible)}
								href="#contact"
							>
								Contato
							</ListLink>
						</li>
					</List>
				</Navegation>
			</HeaderContainer>
		</HeaderStyle>
	)
}

export default Header
