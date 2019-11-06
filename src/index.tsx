import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import LoadingBar from './lib'
import { IThemeMode } from '@redwallsolutions/common-interfaces-ts'

const Reset = createGlobalStyle`
body {
padding: 0;
margin: 0;
overflow: hidden;
}
`

class App extends React.Component {
	state = {
		mode: 'light',
		progress: 0
	}

	changeMode = input => {
		const mode = input.target.id
		this.setState({
			mode
		})
	}

	updateLoader = () => {
		this.setState({ ...this.state, progress: Math.random() * 100 })
	}

	finish = () => {
		this.setState({ ...this.state, progress: 100 })
	}

	reset = () => {
		this.setState({ ...this.state, progress: -1 })
		this.setState({ ...this.state, progress: 0 })
	}

	onFinish = async finished => {
		await finished
		this.reset()
	}

	render() {
		return (
			<div
				style={{
					transition: 'all .3s',
					height: '100vh',
					width: '100vw',
					paddingTop: '20px',
					backgroundColor:
						this.state.mode === 'dark'
							? 'rgb(44, 55, 56)'
							: 'rgb(244, 244, 244)'
				}}
			>
				<Reset />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<label htmlFor="light">Light Mode</label>
					<input
						type="radio"
						id="light"
						name="mode"
						onChange={this.changeMode}
					/>
					<label htmlFor="dark">Dark Mode</label>
					<input
						type="radio"
						id="dark"
						name="mode"
						onChange={this.changeMode}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '3em'
					}}
				>
					<button onClick={this.updateLoader}>Loading</button>
					<button onClick={this.finish}>Finish Loading</button>
				</div>
				<LoadingBar
					progress={this.state.progress}
					appearance="primary"
					onFinish={this.onFinish}
					theme={{ mode: this.state.mode as IThemeMode, primaryDark: 'cyan' }}
				/>
			</div>
		)
	}
}

export default App

render(<App />, document.getElementById('root'))
