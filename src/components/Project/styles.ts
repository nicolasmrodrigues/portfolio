import styled from 'styled-components'
import { Title } from '../Title/styles'

export const Project = styled.li`
	padding: 24px;
	background-color: #202429;
	border-radius: 8px;
	display: grid;
  grid-auto-rows: 240px 32px auto 50px;
	flex: 1;
	max-width: 395px;
  min-width: 338px;

	@media (max-width: 768px) {
		height: 696px;

		${Title} {
			font-size: 24px;
		}
	}
}
`

export const ProjectImage = styled.img`
	width: 100%;
	max-height: 216px;
	height: 100%;
	border-radius: 8px;
	margin-bottom: 24px;

	@media (max-width: 768px) {
		margin-bottom: 16px;
	}
`

export const ProjectLinksContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const ProjectLink = styled.a`
	padding: 16px;
	text-align: center;
	border-radius: 8px;
	background-color: #5b6778;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
	font-weight: 500;
	transition: all linear 0.1s;
	text-decoration: none;
	color: #000;

	&:hover {
		transform: scale(1.04);
	}
`
