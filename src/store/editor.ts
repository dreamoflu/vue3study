/*
 * @Author: your name
 * @Date: 2021-05-10 11:54:43
 * @LastEditTime: 2021-05-10 18:14:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/store/editor.ts
 */
import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { GlobalDataProps } from './index'
interface ComponentData {
    props: { [key: string]: any };
    id: string;
    name: string;
}
export interface Editorprops {
    components: ComponentData[];
    currentElement: string;
}
export const testComponents: ComponentData[] = [
    { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px', color: 'red' } },
    { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '16px' , color: 'yellow'} },
    { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '14px', actionType: 'url',url: 'http://wwww.baidu.com' } }
]
const editor: Module<Editorprops, GlobalDataProps> = {
    state: {
        components: testComponents,
        currentElement: ''
    }
}

export default editor