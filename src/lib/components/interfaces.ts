import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

export interface ILoadingBar extends ICommonProps {
	/**
	 * The progress prop defines the size the loadingbar size.
	 */
	progress?: number
	/**
	 * The onFinish callback is a function that is called just after the loadingbar reaches 100.
	 * It's important to notice that if you try reset the loading bar inside that callback function
	 * you should `await` the `finished` parameter.
	 */
	onFinish?: (finished:Promise<void>)=>void
}