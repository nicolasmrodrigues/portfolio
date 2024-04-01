import styled from 'styled-components'
import { Title } from '../Title/styles'

export const Hero = styled.div`
	margin-top: 136px;
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		display: block;
		text-align: center;
		margin-top: 56px;
	}
}
`

export const IconLink = styled.a`
	display: flex;
	justify-content: center;
	margin: 40px auto;
	transition: opacity 0.3s ease-in-out;
	animation: 1.5s ease-in-out infinite up-and-down;
	cursor: pointer;

	@media (max-width: 768px) {
		margin-top: 64px;
	}

	@keyframes up-and-down {
		0%,
		100% {
			transform: translate(0, 0);
		}

		50% {
			transform: translate(0, 16px);
		}
	}
`

export const Subtitle = styled(Title)`
	padding-bottom: 16px;
	color: #36bcf7ff;
	font-family: 'Fira Code', monospace;
	font-weight: 400;
	letter-spacing: -1px;
`

export const Container = styled.div`
	align-self: center;
`

export const Image = styled.img`
	@media (max-width: 768px) {
		height: 152px;
		margin-top: 32px;
	}
`
