export const removeSkeleton = (
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const imgs = document.getElementsByClassName('loading')
	imgs.item(0)?.removeAttribute('class')

	setIsLoading(false)
}
