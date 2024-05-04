import styled from 'styled-components'

export const Icon = styled.a`
	display: block;
	transition: all linear 0.1s;
	text-decoration: none;
	color: #f1f1f1;

	&,
	img {
		width: 90px;
		height: 90px;
		border-radius: 50%;

		@media (max-width: 768px) {
			width: 75px;
			height: 75px;
		}
	}

	&:hover {
		transform: scale(1.06);
	}
`
