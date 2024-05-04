import styled from 'styled-components'
import { Title } from '../Title/styles'

export const AboutMe = styled.section`
	padding-top: 136px;
`

export const AboutMeContainer = styled.div`
	display: flex;
	gap: 32px;
	background-color: #353b48;
	padding: 24px;
	border-radius: 8px;

	@media (max-width: 768px) {
		display: block;
	}
`

export const Image = styled.img`
	width: auto;
	height: 350px;
	border-radius: 50%;

	@media (max-width: 768px) {
		height: 168px;
	}
`

export const TextContainer = styled.div`
	max-width: 700px;
	width: 100%;

	${Title} {
		@media (max-width: 768px) {
			text-align: center;
		}
	}
`

export const ImageContainer = styled.div`
	text-align: center;
	margin-bottom: 32px;
`
