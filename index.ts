/*
 * @Author: TerryMin
 * @Date: 2021-12-28 11:34:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-06-13 21:39:18
 * @Description: file not
 */
type Value = { name: "zero2one"; age: 12; sex: "boy" }["name" | "age"] // 等价于 type Value = "zero2one"

const nameList: Value = 'zero2one'
