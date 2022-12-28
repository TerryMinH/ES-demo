/*
 * @Author: TerryMin
 * @Date: 2022-06-11 14:41:52
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-12-06 18:56:13
 * @Description: file not
 */
class Animals {
  static instance=11;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(Animals);
  }
}

let cat=new Animals();