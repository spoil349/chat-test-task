<template>
    <div class="messages-header">
        <h2 class="messages-header__text">Questions Messenger</h2>
    </div>
</template>

<script>
export default {
    name: "MainBlockHeader"
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.messages-header {
    flex: 1;
    padding: 16px 32px;
    background-color: $white;
    box-shadow: 0 5px 5px -5px $textGray;
    position: relative;
    &__text {
        font-size: 24px;
        font-weight: 600;
        color: $textGray;
        text-transform: capitalize;
    }
}
</style>