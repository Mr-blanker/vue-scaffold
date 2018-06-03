<!-- by your name -->
<template>
  <div>主页 {{data}}</div>
</template>

<script>
import mixin from '../minix/index'
export default {
  name:'index',
  mixins:[mixin] , 
  data () {
    return {

    }
  }
}

</script>
<style lang='scss' scoped>
</style>