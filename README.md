# flxels
Helper functions to create HTML elements
Javascript / Typescript

## API

#### Create element specified by tag.
```typescript
function el (tag: string): HTMLElement
```

#
#### Create styled element specified by tag and styles object.
```typescript
type StylesObject = { [key: string]: string | StylesObject }
```

```typescript
function styled (tag: string, styles: StylesObject): HTMLElement
```

#
#### Create styled or unstyled h1 element.
#### Styles object is optional.
```typescript
function h1 (styles?: StylesObject): HTMLDivElement
```
`div` `span` `h1` `h2` `p` `input` `button`

#
#### Add class to specified element.
```typescript
function add_class (element: HTMLElement, className: string): void
```

#
#### Remove class from specified element.
```typescript
function remove_class (element: HTMLElement, className: string): void
```

#
#### Style specified element.
#### Adds a new css class on each call.
```typescript
function style (element: HTMLElement, styles: StylesObject): void
```

#
#### Restyle specified element.
#### Assigns new css class.
```typescript
function restyle (element: HTMLElement, styles: StylesObject): void
```

#
#### Add text node to specified element.
```typescript
function add_text (element: HTMLElement, text: string): void
```

#
#### Remove text node from specified element.
#### If string passed instead of text node, removes string from textContent.
#### If no text arg passed, removes all text nodes.
```typescript
function remove_text (element: HTMLElement, textNode?: Text): void
```
