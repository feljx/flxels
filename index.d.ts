declare module 'flxels' {
	type view = () => HTMLElement
	class Context {
		constructor (container: HTMLElement, views: view[])
		container: HTMLElement
		children: view[]
		clear (): void
		render (): void
		clearView (view): void
		renderView (view): void
	}
	type RenderingContext = Context
	type StylesObject = { [key: string]: string | StylesObject }

	function el (tag: string): HTMLElement

	function styled (tag: string, styles: StylesObject): HTMLElement

	function addClass (className: string, element: HTMLElement): void

	function style (styles: StylesObject, element: HTMLElement): void

	function restyle (styles: StylesObject, element: HTMLElement): void

	function addText (text: string, element: HTMLElement): void

	function div (styles?: StylesObject): HTMLDivElement
	function span (styles?: StylesObject): HTMLSpanElement
	function h1 (styles?: StylesObject): HTMLHeadingElement
	function h2 (styles?: StylesObject): HTMLHeadingElement
	function p (styles?: StylesObject): HTMLParagraphElement
	function input (styles?: StylesObject): HTMLInputElement
	function button (styles?: StylesObject): HTMLButtonElement
}
