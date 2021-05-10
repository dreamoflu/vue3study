<!--
 * @Author: your name
 * @Date: 2021-05-10 14:36:16
 * @LastEditTime: 2021-05-10 18:15:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/components/Ltext.vue
-->

<template>
  <component :is='tag' :style="styleProps" @click="handleClick" class="l-text-component">
      {{text}}
  </component>
</template>

<script lang='ts'>
import { defineComponent, computed } from "vue";
import { pick } from "lodash-es";
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '../defaultProps'
import  useComponentsCommon  from '../hooks/useComponentCommon'
const defaultProps = transformToComponentProps(textDefaultProps)
console.log(defaultProps)
export default defineComponent({
  name: "l-text",
  props: {
    // text: {
    //   type: String,
    // },
    // fontSize: {
    //   type: String,
    // },
    tag: {
      type: String,
      default: "div",
    },
    ...defaultProps
  },
  setup(props) {
    //   const styleProps = computed(()=> pick(props, textStylePropNames))
    const {styleProps, handleClick} = useComponentsCommon(props,textStylePropNames)
    
      return {
          styleProps,
          handleClick
      }
  },
});
</script>
<style scoped>
.l-text-component {
    position: relative!important;
}
</style>
