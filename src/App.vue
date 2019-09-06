<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
    name: 'App',
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="less">
  @import "common/less/change_element";
  @import "common/less/common";
  html,body{
    height: 100%;
    width: 100%;
  }
  body{
    margin: 0;
  }

  #app {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
