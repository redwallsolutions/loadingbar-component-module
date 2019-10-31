import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import { ICommonProps } from './interfaces'

export const theme = createThemeWithAppearance()

export const Reset = createGlobalStyle`
    .loading-bar-component-module {
        padding: 0;
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
		width: 100vw;
		z-index: 999;
        * {
			transition: 0.4s ease-in-out;
			box-sizing: border-box;
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

export const LoadingBarStyled = styled.div<ICommonProps>`
	height: 3px;
	box-shadow: 0 0 10px 0 ${props => theme(props).color};
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

export const SpinnerContainer = styled.div<ICommonProps>`
	opacity: ${props =>
		props.progress >= 1 && props.progress <= 100 ? '1' : '0'};
	animation-delay: 2s;
	animation-duration: 0.3s;
	animation-delay: 0.5s;
	animation-fill-mode: both;
	animation-name: ${props =>
		props.progress >= 100 || props.progress <= -1 ? hideLoadingBar : 'redwall'};
	position: fixed;
	top: 10px;
	right: 18px;
`
