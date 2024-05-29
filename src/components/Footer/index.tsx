import { Footer as FooterStyle } from './styles'
import Text from '../Text'

const Footer = () => {
	const date = new Date()

	return (
		<FooterStyle>
			<Text>{`© ${date.getFullYear()} Nícolas Medeiros`}</Text>
		</FooterStyle>
	)
}

export default Footer
