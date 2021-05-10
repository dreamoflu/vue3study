/*
 * @Author: your name
 * @Date: 2021-05-10 17:52:57
 * @LastEditTime: 2021-05-10 18:09:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/hooks/useComponentCommon.ts
 */

import {computed} from 'vue'
import {pick} from 'lodash-es'

const useComponentsCommon = <T extends {[key: string]: any}>(props: T, picks: string[]) => {
    const styleProps = computed(()=> pick(props, picks))
    const handleClick = () => {
        if(props.actionType === 'url' && props.url) {
            window.location.href = props.url
        }
    }

    return {
        styleProps,
        handleClick
    }
}

export default useComponentsCommon