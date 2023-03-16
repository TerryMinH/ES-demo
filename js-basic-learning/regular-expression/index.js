/*
 * @Author: TerryMin
 * @Date: 2022-06-15 11:23:58
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-03-16 14:23:19
 * @Description: file not
 */
const str='Hello';
const result=str.replace(/(?!l)/g,'#');
// console.log(result);

const numStr='123456789';
const result1=numStr.replace(/(?=(\d{3})+$)/g,",");
console.log(result1);