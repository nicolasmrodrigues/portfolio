import styled from 'styled-components'
import { Props } from '.'

export const Navegation = styled.nav<Props>`
	@media (max-width: 768px) {
		display: block;
		visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
		opacity: ${(props) => (props.isVisible ? '1' : '0')};
		position: fixed;
		top: 0;
		left: 0;
		width: 70dvw;
		height: 100dvh;
		z-index: 2;
		padding: 24px;
		background-color: #28292e;
		transition: all 0.25s ease;
	}
`
