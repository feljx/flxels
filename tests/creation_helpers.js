import test from 'ava'
import * as flxels from '../index'

test('element creation helpers', t => {
	t.true(flxels.el('a') instanceof window.HTMLElement)
	t.true(flxels.styled('p', {}) instanceof window.HTMLElement)

	const named = [
		[ flxels.div, window.HTMLDivElement ],
		[ flxels.span, window.HTMLSpanElement ],
		[ flxels.h1, window.HTMLHeadingElement ],
		[ flxels.h2, window.HTMLHeadingElement ],
		[ flxels.p, window.HTMLParagraphElement ],
		[ flxels.input, window.HTMLInputElement ],
		[ flxels.button, window.HTMLButtonElement ],
	]
	for (const c of named) {
		const [ fn, type ] = c
		t.true(fn() instanceof type)
	}
})
