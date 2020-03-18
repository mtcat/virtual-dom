const _ = require('./utils');

class Element {
  constructor(tagName, props, children = []) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }

  render() {
    const el = document.createElement(this.tagName);
    const props = this.props;
    const children = this.children;

    for (let propName in props) {
      const propValue = props[propName];
      _.setAttr(el, propName, propValue);
    }

    _.each(children, (child, index) => {
      const childEl = child instanceof Element ? child.render() : document.createTextNode(child);
      el.appendChild(childEl);
    });

    return el;
  }
}

module.exports = function(tagName, props, children) {
  return new Element(tagName, props, children);
};
