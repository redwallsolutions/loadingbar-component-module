import styled, { createGlobalStyle, keyframes } from 'styled-components'
import Theming from '@redwallsolutions/theming-component-module'

export const theme = Theming.createThemeWithAppearance()

const defaultProps = {
	appearance: 'default'
}

export const Reset = createGlobalStyle`
    .loading-bar-component-module {
        padding: 0;
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        * {
            transition: 0.4s ease-in-out;
        }
    }
`

const hideLoadingBar = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

export const LoadingBarStyled = styled.div`
	height: 3px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	background-color: ${props => theme(props).color};
	width: ${props => props.progress}%;
	animation-delay: 2s;
	animation-duration: 0.3s;
	animation-delay: 0.5s;
	animation-fill-mode: both;
	animation-name: ${props =>
		props.progress >= 100 || props.progress <= -1 ? hideLoadingBar : 'redwall'};
	position: fixed;
	top: 0;
	left: 0;
`

LoadingBarStyled.defaultProps = defaultProps

export const SpinnerContainer = styled.div`
    opacity: ${props => props.progress >= 1 && props.progress <= 100 ? '1' : '0'};
	animation-delay: 2s;
	animation-duration: 0.3s;
	animation-delay: 0.5s;
	animation-fill-mode: both;
	animation-name: ${props =>
		props.progress >= 100 || props.progress <= -1 ? hideLoadingBar : 'redwall'};
	position: fixed;
	top: 10px;
	right: 7px;
`

SpinnerContainer.defaultProps = defaultProps
