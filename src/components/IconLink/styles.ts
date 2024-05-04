import styled from 'styled-components'

export const Icon = styled.a`
	display: block;
	transition: all linear 0.1s;
	width: 80px;
	height: 80px;

	img {
		width: 100%;
		height: 100%;

		@media (max-width: 768px) {
			height: 65px;
		}
	}

	&:hover {
		transform: scale(1.06);
	}
`
