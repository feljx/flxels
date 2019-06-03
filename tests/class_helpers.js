import test from 'ava'
import * as f from '../index'

test('add_class, remove_class', t => {
	const el = f.div()
	const [ cls, meh, uiui ] = [ 'foobar', 'meh', 'uiui' ]
	f.add_class(el, cls)
	f.add_class(el, meh)
	t.true(el.classList.contains(cls))
	t.true(el.classList.contains(meh))
	f.remove_class(el, cls)
	t.false(el.classList.contains(cls))
	t.true(el.classList.contains(meh))
})
