<template>
    <div class="sidebar-header">
        <div class="sidebar-header__avatar">
            <img class="sidebar-header__image" src="../assets/images/avatar.jpg" alt="avatar">
        </div>
        <div class="sidebar-header__info">
            <p class="sidebar-header__info-name">David Hill</p>
            <p class="sidebar-header__info-status">online</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftSideBarHeader",
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.sidebar-header {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid $textGray;
    &__avatar {
        display: flex;
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    &__image {
        object-fit: cover;
        border-radius: 5px;
    }
    &__info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        font-size: 13px;
        font-weight: 600;
        padding: 3px 0;
        &-name {
            color: $white;
        }
        &-status {
            color: $textGray;
        }
    }
}
</style>