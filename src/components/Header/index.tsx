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
	Overlay
} from './styles'
import { removeSkeleton } from '../../utils'
import Skeleton from '../Skeleton'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [scroll, setScroll] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	window.onscroll = () => {
		setScroll(window.scrollY)
	}

	const changeNavVisibility = () => {
		setIsVisible(!isVisible)
	}

	return (
		<HeaderStyle scroll={scroll}>
			<HeaderContainer>
				<TitleLink href="#">
					<img
						id="favicon"
						src="/favicon.png"
						alt=""
						onLoad={() => removeSkeleton(setIsLoading, 'favicon')}
						className="loading"
					/>
					{isLoading && <Skeleton />}
					<Title as="h1">Nícolas Medeiros</Title>
				</TitleLink>
				<NavButton onClick={changeNavVisibility}>Menu</NavButton>
				<Navegation isVisible={isVisible}>
					<>
						<Overlay onClick={changeNavVisibility} />
						<div>
							<NavButton onClick={changeNavVisibility}>X</NavButton>
							<List>
								<li>
									<ListLink onClick={changeNavVisibility} href="#">
										Início
									</ListLink>
								</li>
								<li>
									<ListLink onClick={changeNavVisibility} href="#aboutMe">
										Sobre
									</ListLink>
								</li>
								<li>
									<ListLink onClick={changeNavVisibility} href="#skills">
										Habilidades
									</ListLink>
								</li>
								<li>
									<ListLink onClick={changeNavVisibility} href="#projects">
										Projetos
									</ListLink>
								</li>
								<li>
									<ListLink onClick={changeNavVisibility} href="#contact">
										Contato
									</ListLink>
								</li>
							</List>
						</div>
					</>
				</Navegation>
			</HeaderContainer>
		</HeaderStyle>
	)
}

export default Header
