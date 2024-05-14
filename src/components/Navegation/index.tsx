import { Navegation as NavegationStyle } from './styles'

export type Props = {
	children?: JSX.Element
	$isVisible: boolean
}

const Navegation = ({ $isVisible, children }: Props) => (
	<NavegationStyle $isVisible={$isVisible}>{children}</NavegationStyle>
)

export default Navegation
