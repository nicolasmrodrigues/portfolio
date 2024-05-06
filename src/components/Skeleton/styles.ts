import styled from 'styled-components'

export const Skeleton = styled.div`
	opacity: 0.7;
	display: flex;
	align-items: center;
	justify-content: center;

	@keyframes skeleton-loading {
		0% {
			background-color: #e5e7eb;
		}

		100% {
			background-color: #4b5563;
		}
	}

	animation: skeleton-loading 1s linear infinite alternate;

	svg {
		width: 40px;
		height: 40px;
		color: #4b5563;
	}
`
