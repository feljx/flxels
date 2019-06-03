const cxs = require('cxs')

const Context = class {
	constructor (container, views) {
		this.container = this.c = container
		this.children = views
		this.state = this.s = {}
	}

	clear () {
		for (const view of this.children) this.clearView(view)
	}

	render () {
		for (const view of this.children) {
			this.clearView(view)
			this.renderView(view)
		}
	}

	/**
	 * Clear given view from state and DOM.
	 * @param {Function} view
	 */
	clearView (view) {
		if (this.s[view.name]) {
			this.s[view.name].remove()
			this.s[view.name] = undefined
		}
	}
	/**
	 * Render given view to state and DOM.
	 * Clear view in the process.
	 * @param {Function} view
	 */
	renderView (view) {
		this.clearView(view)
		const instance = view()
		this.container.appendChild(instance)
		this.s[view.name] = instance
	}
}
module.exports.Context = Context
module.exports.RenderingContext = Context

/**
 * Create new element.
 * @param {String} tag
 * @returns HTMLElement
 */
const el = tag => document.createElement(tag)
module.exports.el = el

/**
 * Create new styled element.
 * @param {String} tag
 * @param {Object} styles
 * @returns HTMLElement
 */
const styled = (tag, styles) => {
	if (!styles) throw new Error('"styles" object must be defined')
	const el = document.createElement(tag)
	el.className = cxs(styles)
	return el
}
module.exports.styled = styled

/**
 * Add class to given element.
 * @param {String} cls
 * @param {HTMLElement} el
 */
const addClass = (cls, el) => (el.className += ` ${cls}`)
module.exports.addClass = addClass

/**
 * Add styles to given element.
 * @param {Object} styles
 * @param {HTMLElement} el
 */
const style = (styles, el) => {
	el.className += cxs(styles)
}
module.exports.style = style

/**
 * Remove and add new styles to given element.
 * @param {Object} styles
 * @param {HTMLElement} el
 */
const restyle = (styles, el) => {
	el.className = cxs(styles)
}
module.exports.restyle = restyle

/**
 * Add text node to given element.
 * @param {String} txt
 * @param {HTMLElement} el
 */
const addText = (txt, el) => el.appendChild(document.createTextNode(txt))
module.exports.addText = addText

/**
 * Remove text node or all text nodes from given element.
 * @param {Text} txtNode
 * @param {HTMLElement} el
 */
const removeText = (txtNode, el) => {
	if (txtNode) el.removeChild(txtNode)
	else el.textContent = undefined
}
module.exports.removeText = removeText

/**
 * Create new styled div element.
 * @param {Object} styles
 * @returns HTMLDivElement
 */
const div = styles => (styles ? styled : el)('div', styles)
module.exports.div = div

/**
 * Create new styled span element.
 * @param {Object} styles
 * @returns HTMLSpanElement
 */
const span = styles => (styles ? styled : el)('span', styles)
module.exports.span = span

/**
 * Create new styled h1 element.
 * @param {Object} styles
 * @returns HTMLHeadingElement
 */
const h1 = styles => (styles ? styled : el)('h1', styles)
module.exports.h1 = h1

/**
 * Create new styled h2 element.
 * @param {Object} styles
 * @returns HTMLHeadingElement
 */
const h2 = styles => (styles ? styled : el)('h2', styles)
module.exports.h2 = h2

/**
 * Create new styled paragraph element.
 * @param {Object} styles
 * @returns HTMLParagraphElement
 */
const p = styles => (styles ? styled : el)('p', styles)
module.exports.p = p

/**
 * Create new styled input element.
 * @param {Object} styles
 * @returns HTMLParagraphElement
 */
const input = styles => (styles ? styled : el)('input', styles)
module.exports.input = input

/**
 * Create new styled button element.
 * @param {Object} styles
 * @returns HTMLParagraphElement
 */
const button = styles => (styles ? styled : el)('button', styles)
module.exports.button = button
