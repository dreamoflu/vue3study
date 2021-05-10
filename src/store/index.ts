/*
 * @Author: your name
 * @Date: 2021-05-08 17:57:41
 * @LastEditTime: 2021-05-10 14:11:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/store/index.ts
 */
import { createStore } from "vuex";

import user, { UserProps } from "./user";
import templates, { TemplatesProps } from "./templates";
import editor, { Editorprops } from './editor'


export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
  editor: Editorprops;
}

const store = createStore<GlobalDataProps>({
  modules: {
    user,
    templates,
    editor
  }
});

export default store;
