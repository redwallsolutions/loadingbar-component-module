interface IThemeProps {
	/**
	 * A string prop passed to styled-component ThemeProvider component.
	 */
    mode: "light" | "dark"
}

export interface ICommonProps {
	/**
	 * A progress number that goes from 0 to 100.
	 */
	progress: number
	/**
	 * A string prop that defines 3 types of appearances.
	 */
	appearance?: 'default' | 'primary' | 'secondary'
	/**
	 * Theme prop.
	 */
	theme: IThemeProps
}

export interface ILoadingBarProps extends ICommonProps {
	/**
	 * Function that is called after loading bar finish its end animation.
	 */
	onFinish?: (finished:Promise<void>) => void
}
