/*
 * @Author: TerryMin
 * @Date: 2022-06-15 11:23:58
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-04-12 19:11:04
 * @Description: file not
 */
const str = "Hello";
const result = str.replace(/(?!l)/g, "#");
// console.log(result);

const numStr = "123456789";
const result1 = numStr.replace(/(?=(\d{3})+$)/g, ",");
// console.log(result1);

function replacer(match, p1, p2, p3, offset, string) {
    console.log(match, p1, p2, p3);
    console.log(offset, string);
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
var newString = "ss176r21481287".replace(/(\d{3})(\d{4})(\d{4})/, replacer);
console.log(newString); // abc - 12345 - #$*%
