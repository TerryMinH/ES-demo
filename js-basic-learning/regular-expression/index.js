/*
 * @Author: TerryMin
 * @Date: 2022-06-15 11:23:58
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-15 16:58:19
 * @Description: file not
 */
function is_weixn() {
	var ua = navigator.userAgent.toLowerCase()
	//  == 会进行类型转换 即 ['aa']=='aa' = > true
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true
	} else {
		return false
	}
}

const matchStr = "ahook,ttwe era au".match(/a[\w]*/g)
const matchStr1 = "ahook,ttwe era au".match(/^a[\w]*$/g)
// console.log(matchStr,matchStr1);

const str = "aa12bb0cc789"
const newStr = str.replace(/\d/g, function (matchStr, index, sourceStr) {
	const result = parseInt(matchStr) + 1
	return result
})

const string = "123 1234 12345 123456";
// console.log(string.match(/[\d]{2,5}?/g));

// (?=p)，其中p是一个子模式，即p前面的位置。
const string1="hello".replace(/(?=l)/g,'#');
// console.log(string1);

// (?!p)就是(?=p)的反面意思
const string2="hello".replace(/(?!l)/g,'#');
// console.log(string2);

// 金额逗号分割
const string3='123456789'.replace(/\B(?=(\d{3})+\b)/g,',');
// console.log(string3);

const string4=(/(?=.*[0-9])^[0-9A-Za-z]{2,12}$/).test('eee');
// console.log(string4);

const regex = /^((\d)(\d(\d)))\1\2\3\4$/;
const string5 = "1231231233";
console.log( regex.test(string5) ); // true
console.log( RegExp.$1 ); // 123
console.log( RegExp.$2 ); // 1
console.log( RegExp.$3 ); // 23
console.log( RegExp.$4 ); // 3




