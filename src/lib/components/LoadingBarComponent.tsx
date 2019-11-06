import React, { useEffect, useContext } from 'react'
import {
	Reset,
	LoadingBarStyled,
	SpinnerContainer,
	theme as theming
} from './Style'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { ILoadingBar } from './interfaces'
import { ThemeContext } from 'styled-components'

const LoadingBarComponent: React.FC<ILoadingBar> = ({
	progress = 0,
	appearance = 'primary',
	onFinish,
	theme = { mode: 'light' }
}) => {
	useEffect(() => {
		if (progress >= 100 && onFinish) {
			onFinish(
				new Promise(resolve => {
					setTimeout(() => {
						resolve()
					}, 800)
				})
			)
		}
	}, [progress, onFinish])
	const themeToApply = useContext(ThemeContext) || theme
	const color = theming({ theme: { ...themeToApply }, appearance }).color({
		theme: { ...themeToApply },
		appearance
	})
	return (
		<div className="loading-bar-component-module">
			<Reset />
			{progress > -1 && progress < 101 && (
				<>
					<LoadingBarStyled
						progress={progress}
						appearance={appearance}
						theme={themeToApply}
					/>
					<SpinnerContainer progress={progress} theme={themeToApply}>
						<ScaleLoader height={10} color={color} />
					</SpinnerContainer>
				</>
			)}
		</div>
	)
}

export default LoadingBarComponent
