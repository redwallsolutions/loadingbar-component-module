import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

export interface ILoadingBar extends ICommonProps {
	/**
	 * The progress prop defines the size the loadingbar size.
	 */
	progress?: number
	/**
	 * The onFinish callback is a function that is called just after the loadingbar ending animation.
	 */
	onFinish?: (finished:Promise<void>)=>void
}