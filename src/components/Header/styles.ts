import styled from 'styled-components'
import { Container } from '../../styles'

export const Header = styled.header`
	padding: 24px 0;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1;
	transition:
		background-color linear 0.2s,
		box-shadow linear 0.1s;

	&.background {
		background-color: rgb(53, 59, 72);
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	@media (max-width: 768px) {
		direction: rtl;
	}
`

export const HeaderContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-itens center;
	align-items: center;
`

export const Title = styled.h1`
	font-weight: 900;
	color: #f1f1f1;
	font-family: 'Inter', sans-serif;

	@media (max-width: 768px) {
		font-size: 24px;
		font-weight: 800;
		text-align: center;
	}
`

export const List = styled.ul`
	display: flex;

	@media (max-width: 768px) {
		display: block;
		margin-top: 24px;
		direction: ltr;
		height: 88%;
		padding-top: 8px;
	}

	* {
		user-select: none;
	}
`

export const ListLink = styled.a`
	padding: 8px;
	margin: 0 8px;
	text-decoration: none;
	color: #f1f1f1;
	display: block;
	font-size: 18px;

	&:hover {
		color: #dddd;
	}

	@media (max-width: 768px) {
		padding: 10px 16px;
		margin: 8px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin: 0 4px;
	}
`

export const NavButton = styled.button`
	display: none;
	padding: 10px 16px;
	font-size: 16px;
	font-weight: 500;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	color: #000;
	background-color: #5b6778;
	transition: all linear 0.1s;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

	&:hover {
		background-color: #515a69;
	}

	@media (max-width: 768px) {
		display: block;
	}
`

export const HeaderIcon = styled.img`
	margin-right: 32px;

	@media (max-width: 768px) {
		width: 32px;
		margin-right: 0;
		margin-left: 16px;
	}
`

export const TitleLink = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
`

export const Overlay = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		width: 30%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}
`
