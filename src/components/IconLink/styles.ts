import styled from 'styled-components'

export const Icon = styled.a`
	margin: 32px 16px 0px 16px;
	display: block;
	transition: all linear 0.1s;

	img {
		width: auto;
		height: 80px;

		@media (max-width: 768px) {
			height: 65px;
		}
	}

	&:hover {
		transform: scale(1.06);
	}
`
