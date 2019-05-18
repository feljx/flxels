const cxs = require('cxs')

module.exports.Context = class {
	constructor (container, views) {
		this.container = this.c = container
		this.state = this.s = {}
		for (const v of views) {
			this.render(v)
		}
	}
	/**
	 * Clear given view from state and DOM.
	 * @param {Function} view
	 */
	clear (view) {
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
	render (view) {
		this.clear(view)
		const instance = view()
		this.container.appendChild(instance)
		this.s[view.name] = instance
	}
}

module.exports.RenderingContext = module.exports.Context

/**
 * Create new element.
 * @param {*} tag
 * @returns HTMLElement
 */
module.exports.el = tag => document.createElement(tag)

/**
 * Create new styled element.
 * @param {String} tag
 * @param {Object} styles
 * @returns HTMLElement
 */
module.exports.styled = (tag, styles) => {
	if (!styles) throw new Error('"styles" object must be defined')
	const el = document.createElement(tag)
	el.className = cxs(styles)
	return el
}

/**
 * Add class to given element.
 * @param {String} cls
 * @param {HTMLElement} el
 */
module.exports.addClass = (cls, el) => (el.className += ` ${cls}`)

/**
 * Add styles to given element.
 * @param {Object} styles
 * @param {HTMLElement} el
 */
module.exports.style = (styles, el) => addClass(cxs(styles), el)

/**
 * Add text node to given element.
 * @param {String} txt
 * @param {HTMLElement} el
 */
module.exports.addText = (txt, el) => el.appendChild(document.createTextNode(txt))

/**
 * Create new styled div element.
 * @param {Object} styles
 * @returns HTMLDivElement
 */
module.exports.div = styles => (styles ? styled : el)('div', styles)

/**
 * Create new styled span element.
 * @param {Object} styles
 * @returns HTMLSpanElement
 */
module.exports.span = styles => (styles ? styled : el)('span', styles)

/**
 * Create new styled h1 element.
 * @param {Object} styles
 * @returns HTMLHeadingElement
 */
module.exports.h1 = styles => (styles ? styled : el)('h1', styles)

/**
 * Create new styled h2 element.
 * @param {Object} styles
 * @returns HTMLHeadingElement
 */
module.exports.h2 = styles => (styles ? styled : el)('h2', styles)

/**
 * Create new styled paragraph element.
 * @param {Object} styles
 * @returns HTMLParagraphElement
 */
module.exports.p = styles => (styles ? styled : el)('p', styles)

/**
 * Create new styled input element.
 * @param {Object} styles
 * @returns HTMLParagraphElement
 */
module.exports.input = styles => (styles ? styled : el)('input', styles)

/**
 * Create new styled button element.
 * @param {Object} styles
 * @returns HTMLParagraphElement
 */
module.exports.button = styles => (styles ? styled : el)('button', styles)
