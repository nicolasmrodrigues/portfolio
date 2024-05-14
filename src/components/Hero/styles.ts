import styled from 'styled-components'
import { Title } from '../Title/styles'

export const Hero = styled.div`
	margin-top: 136px;
	display: flex;
	justify-content: space-between;
	text-align: center;

	img, .skeleton {
		width: 363px;
		height: 283px;
		border-radius: 8px;
	}


	@media (max-width: 768px) {
		display: block;
		justify-content: center;
		margin-top: 56px;

		.skeleton {
			display: inline-flex;
		}

		img, .skeleton {
			height: 152px;
			width: 195px;
			margin-top: 32px;
		}
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
	text-align: center;

	@media (max-width: 768px) {
		font-size: 20px;
	}
`

export const Container = styled.div`
	align-self: center;
`
