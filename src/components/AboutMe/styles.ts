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
		padding: 24px 16px 16px 16px;
	}
`

export const TextContainer = styled.div`
	max-width: 700px;
	width: 100%;

	@media (max-width: 768px) {
		${Title} {
			text-align: center;
		}
	}
`

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto 32px auto;
	width: 355px;
	height: 350px;

	img,
	.skeleton {
		width: 355px;
		height: 350px;
		border-radius: 50%;
	}

	@media (max-width: 768px) {
		width: 170px;
		height: 168px;

		img,
		.skeleton {
			width: 170px;
			height: 168px;
		}
	}
`
