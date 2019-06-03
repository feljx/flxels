declare module 'flxels' {
	type view = () => HTMLElement
	declare class Context {
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

	declare function el (tag: string): HTMLElement

	declare function styled (tag: string, styles: StylesObject): HTMLElement

	declare function addClass (className: string, element: HTMLElement): void

	declare function style (styles: StylesObject, element: HTMLElement): void

	declare function restyle (styles: StylesObject, element: HTMLElement): void

	declare function addText (text: string, element: HTMLElement): void

	declare function div (styles: StylesObject): HTMLDivElement
	declare function span (styles: StylesObject): HTMLSpanElement
	declare function h1 (styles: StylesObject): HTMLHeadingElement
	declare function h2 (styles: StylesObject): HTMLHeadingElement
	declare function p (styles: StylesObject): HTMLParagraphElement
	declare function input (styles: StylesObject): HTMLInputElement
	declare function button (styles: StylesObject): HTMLButtonElement
}
