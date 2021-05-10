/*
 * @Author: your name
 * @Date: 2021-05-10 10:13:08
 * @LastEditTime: 2021-05-10 14:11:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/store/user.ts
 */

import { Module } from "vuex";
import { GlobalDataProps } from "@/store/index";
export interface UserProps {
  isLogin: boolean;
  userName?: string;
}
const myUser: UserProps = {
  isLogin: false
}
export interface UsersProps {
  userData: UserProps;
}
const user: Module<UsersProps,GlobalDataProps> = {
  state: {
    userData: myUser
  }

}

export default user

