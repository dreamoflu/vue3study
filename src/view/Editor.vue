<!--
 * @Author: your name
 * @Date: 2021-05-08 16:18:59
 * @LastEditTime: 2021-05-10 16:27:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lego/src/view/Editor.vue
-->
<template>
  <div>
    <component
      v-for="component in components"
      :key="component.id"
      :is="component.name"
      v-bind="component.props"
    >
    </component>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import LText from "../components/Ltext.vue";
export default defineComponent({
  name: "Editor",
  components: {
    LText,
  },
  setup() {
    const store = useStore<GlobalDataProps>();

    const components = computed(() => store.state.editor.components);

    return {
      components,
    };
  },
});
</script>

<style scoped>
</style>