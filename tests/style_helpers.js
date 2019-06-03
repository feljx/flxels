import test from 'ava'
import cxs from 'cxs'
import * as f from '../index'

test('style, restyle', t => {
	const el = f.div()
	const [ sty_1, sty_2 ] = [ { fontSize: '2rem' }, { color: 'blue' } ]
	const [ cls_1, cls_2 ] = [ cxs(sty_1), cxs(sty_2) ]
	f.style(el, sty_1)
	f.style(el, sty_2)
	t.true(el.classList.contains(cls_1))
	t.true(el.classList.contains(cls_2))
	f.restyle(el, sty_2)
	t.is(el.className, cls_2)
})
