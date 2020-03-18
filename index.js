const dom = require('./src/index');

const tree = dom.el('div', { class: 'wrap' }, [
  dom.el('p', { class: 'top', style: { color: 'red', 'font-size': '22px' } }, '123123123-1'),
  dom.el('p', { class: 'center', style: { color: 'green' } }, '123123123-2'),
  dom.el('p', { class: 'bottom', style: { color: 'blue' } }, '123123123-3'),
  dom.el('input', { id: 'set-value', value: 'hello world' }),
]);

const root = tree.render();
document.body.appendChild(root);
