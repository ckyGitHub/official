// 模板解析方法
String.prototype.format = function(obj){
	var str = this.valueOf()

	// 替换{##}里内容
	str = str.replace(/{#(\w+(\.\w+)*)#}/g, function(match, key){
		return utils.getValue(obj, key)
	})

	// 替换 data-repeat
	str = str.replace(/<!-- data-repeat -->(.*data-repeat="(\w+)\sin\s(\w+)".*)<!-- end data-repeat -->/g, function(self, match, key, _obj){
		var repeat = '',
			_data = obj[_obj],
			re =  new RegExp(key + '\\.(\\w+)', 'g')

		for (var i = 0; i < _data.length; i++) {
			repeat += match.replace(re, function(a, b){
				return utils.getValue(_data[i], b)
			})					
		}
		return repeat
	})

	return str
}
// 工具对象
var utils = {}

// 获取对象属性值
utils.getValue = function(obj, attr){
	var ary = attr.split('.'), 
		_data

	if (ary.length>1) {
		_data = obj[ary[0]]
		for (var i = 1; i < ary.length; i++) {
			_data = _data[ary[i]]
		}
	} else {
		_data = obj[attr]
	}

	return _data
}
// 解析hash
utils.parseHash = function(){
	var search = (arguments[0] || location.search).slice(1), obj = {}
	if (!search) return

	search.split('&').forEach(function(e){
		obj[e.split('=')[0]] = e.split('=')[1]
	})
	
	return obj
}