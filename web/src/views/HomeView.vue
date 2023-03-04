<template>
  <h3>杀杀杀</h3>
  <div>{{name }}</div>
</template>

<script>
import { reactive ,toRefs} from "vue"
export default {
  name: "home",
  setup() {
    const data = reactive({
      name: "好好",
      age: 20
    })
    return{
      ...toRefs(data)
    }
  }
}
</script>
