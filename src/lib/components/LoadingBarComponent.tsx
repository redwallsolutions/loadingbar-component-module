import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
	Reset,
	LoadingBarStyled,
	SpinnerContainer,
	theme as theming
} from './Style'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { withTheme } from 'styled-components'

export interface ILoadingBarComponent {
	progress: number
	appearance?: string
	onFinish(finished: Promise<void>): void
	theme: Object
}

const LoadingBarComponent: React.FC<ILoadingBarComponent> = ({
	progress = 0,
	appearance = 'default',
	onFinish,
	theme
}) => {
	useEffect(() => {
		if (progress >= 100 && onFinish) {
			onFinish(
				new Promise((resolve, reject) => {
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
					<LoadingBarStyled progress={progress} appearance={appearance} />
					<SpinnerContainer progress={progress}>
						<ScaleLoader height={10} color={color} />
					</SpinnerContainer>
				</>
			)}
		</div>
	)
}

LoadingBarComponent.propTypes = {
	progress: PropTypes.number.isRequired,
	appearance: PropTypes.string,
	onFinish: PropTypes.func.isRequired
}

export default withTheme(LoadingBarComponent)
