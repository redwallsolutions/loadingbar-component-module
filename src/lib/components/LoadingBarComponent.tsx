import React, { useEffect } from 'react'
import {
	Reset,
	LoadingBarStyled,
	SpinnerContainer,
	theme as theming
} from './Style'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { withTheme } from 'styled-components'
import { ILoadingBarProps } from './interfaces'

const LoadingBarComponent: React.FC<ILoadingBarProps> = ({
	progress = 0,
	appearance = 'primary',
	onFinish,
	theme = {mode: 'light'}
}) => {
	useEffect(() => {
		if (progress >= 100 && onFinish) {
			onFinish(
				new Promise((resolve) => {
					setTimeout(() => {
						resolve()
					}, 800)
				})
			)
		}
	}, [progress, onFinish])
	const color = theming({ theme: { ...theme }, appearance }).color({
		theme: { ...theme },
		appearance
    })
	return (
		<div className="loading-bar-component-module">
			<Reset />
			{progress > -1 && progress < 101 && (
				<>
					<LoadingBarStyled progress={progress} appearance={appearance} theme={theme}/>
					<SpinnerContainer progress={progress} theme={theme}>
						<ScaleLoader height={10} color={color}/>
					</SpinnerContainer>
				</>
			)}
		</div>
	)
}

export default withTheme(LoadingBarComponent)
