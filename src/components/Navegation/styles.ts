import styled from 'styled-components'
import { Props } from '.'

export const Navegation = styled.nav<Props>`
	@media (max-width: 768px) {
		display: ${(props) => (props.isVisible ? 'block' : 'none')};
		position: fixed;
		top: 0;
		left: 0;
		width: 60dvw;
		height: 100dvh;
		z-index: 2;
		padding: 24px;
		background-color: #28292e;
	}
`
