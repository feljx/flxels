import test from 'ava'
import * as flxels from '../index'

test('add_text, remove_text', t => {
	const el = flxels.div()
	const [ foo, bar ] = [ 'lolfoo', 'barrr' ]
	flxels.add_text(el, foo)
	t.is(el.textContent, foo)
	flxels.add_text(el, bar)
	t.is(el.textContent, foo + bar)
	flxels.remove_text(el, foo)
	t.is(el.textContent, bar)
	flxels.remove_text(el)
	t.falsy(el.textContent)
})
