import { Navegation as NavegationStyle } from './styles'

export type Props = {
	children?: unknown
	isVisible: boolean
}

const Navegation = ({ isVisible, children }: Props) => (
	<NavegationStyle isVisible={isVisible}>{children}</NavegationStyle>
)

export default Navegation
