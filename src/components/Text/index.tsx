import { Text as TextStyle } from './styles'

type Props = {
	children: string
}

const Text = ({ children }: Props) => <TextStyle>{children}</TextStyle>

export default Text
