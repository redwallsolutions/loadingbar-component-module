interface IThemeProps {
    mode: 'light' | 'dark'
}

export interface ICommonProps {
	progress: number
	appearance?: "default" | "primary" | "secondary"
	theme: IThemeProps
}

export interface ILoadingBarProps extends ICommonProps {
	onFinish(isFinished: Promise<boolean>):void
}
