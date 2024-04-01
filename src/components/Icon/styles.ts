import styled from 'styled-components'
import { Props } from '.'

export const Icon = styled.img<Props>`
	width: auto;
	height: 80px;

	@media (max-width: 768px) {
		height: 56px;
	}
`
