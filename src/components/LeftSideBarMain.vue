<template>
    <div class="sidebar-main">
        <h2 class="sidebar-main__header">MESSAGES</h2>
        <h3 class="sidebar-main__subheader">history</h3>
        <MessagesGroup
            :class="{active: isActive(i)}"
            v-for="i in 4"
            :key="i"
            @click="setActive(i)"
        />
    </div>
</template>

<script>
import MessagesGroup from './MessagesGroup.vue'
export default {
    name: "LeftSideBarMain",
    components: {
        MessagesGroup,
    },
    data() {
        return {
            activeItem: 1,
        }
    },
    methods: {
        isActive(i) {
            return this.activeItem === i;
        },
        setActive(i) {
            this.activeItem = i;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.sidebar-main {
    &__header {
        font-size: 16px;
        font-weight: 500;
        color: $white;
        margin-bottom: 4px;
        text-transform: uppercase;
    }
    &__subheader {
        font-size: 14px;
        font-weight: 600;
        color: $textGray;
        margin-bottom: 12px;
    }
}
</style>