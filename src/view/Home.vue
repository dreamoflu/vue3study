<!--
 * @Author: your name
 * @Date: 2021-05-08 16:18:46
 * @LastEditTime: 2021-05-10 14:22:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/view/Home.vue
-->
<template>
  <a-button @click="goPage">测试</a-button>
<div>111</div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import { useRouter } from 'vue-router'
import {useStore} from 'vuex'
import {GlobalDataProps} from '../store/index'
export default  defineComponent( {
  name: 'home',
  setup() {
    const store = useStore<GlobalDataProps>()
    const testData = computed(()=> store.state.templates)
    const router = useRouter()
    const goPage = () => {
      router.push({name:'editon'})
    }
    return {
      router,
      goPage
    }
  }


})
</script>

<style scoped>

</style>