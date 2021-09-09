<template>
  <LeftSideBar/>
  <MessagesBlockWrapper/>
</template>
<script>
import LeftSideBar from './components/LeftSideBar.vue'
import MessagesBlockWrapper from './components/MessagesBlockWrapper.vue'
export default {
  components: {
    LeftSideBar,
    MessagesBlockWrapper,
  }
}
</script>

<style lang="scss">
  #app {
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
</style>
