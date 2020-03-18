function getType(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
}

function objectToString(obj) {
  if (getType(obj) !== 'Object') {
    throw new Error('obj should be plain object');
  }

  let objStr = '';

  for (const [key, value] of Object.entries(obj)) {
    objStr += `${key}: ${value};`;
  }

  return objStr;
}

exports.each = (children = [], fn) => {
  if (getType(children) === 'String') {
    children = [children];
  }
  if (Array.isArray(children)) {
    children.forEach((clild, index) => {
      fn(clild, index);
    });
  } else {
    throw new Error('children should be array or string');
  }
};

exports.setAttr = (el, propName, propValue) => {
  switch (propName) {
    case 'style':
      el.style.cssText = objectToString(propValue);
      break;
    case 'value': {
      if (['input', 'textarea'].includes(el.tagName)) {
        el.value = propValue;
      } else {
        el.setAttribute(propName, propValue);
      }
      break;
    }
    default:
      el.setAttribute(propName, propValue);
  }
};
