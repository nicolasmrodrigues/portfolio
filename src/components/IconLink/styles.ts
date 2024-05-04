import styled from 'styled-components'

export const Icon = styled.a`
	display: block;
	transition: all linear 0.1s;

	&,
	img {
		width: 80px;
		height: 80px;

		@media (max-width: 768px) {
			width: 65px;
			height: 65px;
		}
	}

	&:hover {
		transform: scale(1.06);
	}
`
