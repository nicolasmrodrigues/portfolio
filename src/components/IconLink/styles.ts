import styled from 'styled-components'

export const Icon = styled.a`
	display: flex;
	transition: all linear 0.1s;

	img,
	.skeleton {
		width: 90px;
		height: 90px;
		border-radius: 50%;

		@media (max-width: 768px) {
			width: 70px;
			height: 70px;
		}
	}

	&:hover {
		transform: scale(1.06);
	}
`
