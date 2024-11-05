# 实现深拷贝

> 递归实现，`WeakMap` 解决循环引用

```js:line-numbers
const deepClone = value => {
	const cache = new WeakMap()
	function _deepClone(value) {
		if (value === null || typeof value !== 'object') {
			return value
		}
		const res = Array.isArray(value) ? [] : {}

		if (cache.has(value)) {
			return cache.get(value)
		}
		cache.set(value, res)
		for (const key in value) {
			if (value.hasOwnProperty(key)) {
				res[key] = _deepClone(value[key])
			}
		}
		return res
	}
	return _deepClone(value)
}
```
