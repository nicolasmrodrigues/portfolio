export const removeSkeleton = (
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
	elementId: string
) => {
	document.getElementById(elementId)?.removeAttribute('class')

	setIsLoading(false)
}
