export const type = value => {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export const isNumer = value => {
  return 'number' === typeof value
}

export const isString = value => {
  return 'string' === typeof value
}

export const isBoolean = value => {
  return 'boolean' === typeof value
}

export const isFunction = value => {
  return 'function' === typeof value
}

export const isUndefined = value => {
  return 'undefined' === typeof value
}

export const isDate = value => {
  return 'Date' === type(value)
}

export const isRegExp = value => {
  return 'RegExp' === type(value)
}

export const isObject = value => {
  return 'Object' === type(value)
}

export const isArray = value => {
  return 'Array' === type(value)
}

export const isNull = value => {
  return 'Null' === type(value)
}

export const isNaN = value => {
  return isNumer(value) && value !== value
}

export const oneOfTypes = (value, types) => {
  return types.indexOf(type(value)) !== -1
}

export const oneOfValues = (value, values) => {
  return values.some(item => item === value)
}

export const dateFormatter = (value, formatter = 'yyyy-MM-dd hh:mm:ss') => {
  const date = new Date(value)
  const days = ['日', '一', '二', '三', '四', '五', '六']
  const padStart = (value, digits = 2) => {
    return ('' + value).padStart(digits, '0')
  }
  const map = {
    'yy(yy)?': date.getFullYear(),
    MM: padStart(date.getMonth() + 1),
    dd: padStart(date.getDate()),
    hh: padStart(date.getHours()),
    mm: padStart(date.getMinutes()),
    ss: padStart(date.getSeconds()),
    ms: padStart(date.getMilliseconds(), 3),
    da: days[date.getDay()],
    ts: date.getTime()
  }
  for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
      const reg = new RegExp(key, 'g')
      formatter = formatter.replace(reg, match => {
        const value = map[key]
        return match === 'yy' ? value.toString().slice(-2) : value
      })
    }
  }
  return formatter
}

export const shuffle = (array) => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const createAction = (type, payload) => {
	if (typeof typeof type !== 'string') {
		throw Error('type must be string.');
	}
	return { type, ...payload };
};




