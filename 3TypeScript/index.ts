/*
 * @Author: TerryMin
 * @Date: 2021-03-24 13:55:43
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-25 07:52:37
 * @Description: file not
 */
interface AccountInfo {
  name: string
  email: string
  age: number
  vip?: 0 | 1 // 1 是vip ，0 是非vip
}

type CoreInfo = Pick<AccountInfo, 'name' | 'email'>
/* 
{ 
  name: string
  email: stirng
}
*/
type k1 = keyof CoreInfo;
// console.log(k1)

