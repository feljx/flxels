# flxels
A collection of DOM / element helpers.

### Typescript declaration
```typescript
type view = () => HTMLElement
```
```typescript
class Context {
	constructor (container: HTMLElement, views: view[])
	container: HTMLElement
	children: view[]
	clear (): void
	render (): void
	clearView (view): void
	renderView (view): void
}
```
```typescript
type RenderingContext = Context
```
```typescript
type StylesObject = { [key: string]: string | StylesObject }
```
```typescript
function add_class (element: HTMLElement, className: string): void
```
```typescript
function remove_class (element: HTMLElement, className: string): void
```
```typescript
function style (element: HTMLElement, styles: StylesObject): void
```
```typescript
function restyle (element: HTMLElement, styles: StylesObject): void
```
```typescript
function add_text (element: HTMLElement, text: string): void
```
```typescript
function remove_text (element: HTMLElement, textNode?: Text): void
```
```typescript
function el (tag: string): HTMLElement
```
```typescript
function styled (tag: string, styles: StylesObject): HTMLElement
```
```typescript
function div (styles?: StylesObject): HTMLDivElement
```
```typescript
function span (styles?: StylesObject): HTMLSpanElement
```
```typescript
function h1 (styles?: StylesObject): HTMLHeadingElement
```
```typescript
function h2 (styles?: StylesObject): HTMLHeadingElement
```
```typescript
function p (styles?: StylesObject): HTMLParagraphElement
```
```typescript
function input (styles?: StylesObject): HTMLInputElement
```
```typescript
function button (styles?: StylesObject): HTMLButtonElement
```