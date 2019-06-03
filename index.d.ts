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

	function add_class (element: HTMLElement, className: string): void
	function remove_class (element: HTMLElement, className: string): void

	function style (element: HTMLElement, styles: StylesObject): void
	function restyle (element: HTMLElement, styles: StylesObject): void

	function add_text (element: HTMLElement, text: string): void
	function remove_text (element: HTMLElement, textNode?: Text): void

	function el (tag: string): HTMLElement
	function styled (tag: string, styles: StylesObject): HTMLElement

	function div (styles?: StylesObject): HTMLDivElement
	function span (styles?: StylesObject): HTMLSpanElement
	function h1 (styles?: StylesObject): HTMLHeadingElement
	function h2 (styles?: StylesObject): HTMLHeadingElement
	function p (styles?: StylesObject): HTMLParagraphElement
	function input (styles?: StylesObject): HTMLInputElement
	function button (styles?: StylesObject): HTMLButtonElement
}
