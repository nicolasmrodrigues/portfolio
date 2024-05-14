import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.span<Props>`
	display: block;
	font-size: 32px;
	font-weight: 600;
	color: #f1f1f1;
	text-align: ${(props) => props.$alignment};
	padding-bottom: 24px;

	@media (max-width: 768px) {
		font-size: 28px;
	}
`
