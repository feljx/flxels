const cxs = require('cxs')
let context = document

module.exports._setContext = cntxt => (context = cntxt)

/**
 * Create new element.
 * @param {*} tag
 * @returns HTMLElement
 */

module.exports.el = tag => context.createElement(tag)

/**
 * Create new styled element.
 * @param {String} tag
 * @param {Object} styles
 * @returns HTMLElement
 */
module.exports.styled = (tag, styles) => {
	const el = context.createElement(tag)
	el.className = cxs(styles)
	return el
}

/**
 * Add styles to given element.
 * @param {Object} styles
 * @param {HTMLElement} el
 */
module.exports.style = (styles, el) => module.exports.addClass(cxs(styles), el)

/**
 * Add class to given element.
 * @param {String} cls
 * @param {HTMLElement} el
 */
module.exports.addClass = (cls, el) => (el.className += ` ${cls}`)

/**
 * Add text node to given element.
 * @param {String} txt
 * @param {HTMLElement} el
 */
module.exports.addText = (txt, el) => el.appendChild(context.createTextNode(txt))

/**
 * Create new styled div element.
 * @param {Object} styles
 * @returns HTMLDivElement
 */
module.exports.div = module.exports.styled.bind(undefined, 'div')

/**
 * Create new styled div element.
 * @param {Object} styles
 * @returns HTMLSpanElement
 */
module.exports.span = module.exports.styled.bind(undefined, 'span')

/**
 * Create new styled div element.
 * @param {Object} styles
 * @returns HTMLHeadingElement
 */
module.exports.h1 = module.exports.styled.bind(undefined, 'h1')

/**
 * Create new styled div element.
 * @param {Object} styles
 * @returns HTMLHeadingElement
 */
module.exports.h2 = module.exports.styled.bind(undefined, 'h2')

/**
 * Create new styled div element.
 * @param {Object} styles
 * @returns HTMLParagraphElement
 */
module.exports.p = module.exports.styled.bind(undefined, 'p')
