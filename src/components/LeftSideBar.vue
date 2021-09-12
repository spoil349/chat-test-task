<template>
    <div class="sidebar">
        <LeftSideBarHeader/>
        <LeftSideBarMain/>
    </div>
</template>

<script>
import LeftSideBarHeader from './LeftSideBarHeader.vue'
import LeftSideBarMain from './LeftSideBarMain.vue'
export default {
    name: "LeftSideBar",
    components: {
        LeftSideBarHeader,
        LeftSideBarMain,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.sidebar {
    position: sticky;
    top: 0;
    left: 0;
    flex: 1 0 256px;
    height: 100vh;
    padding: 15px;
    background: $darkGray;
}

</style>