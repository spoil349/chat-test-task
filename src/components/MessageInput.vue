<template>
    <div class="messages-input">
        <textarea class="messages-input__textarea" type="text"></textarea>
        <button class="messages-input__button"></button>
    </div>
</template>

<script>
export default {
    name: "MessageInput",
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.messages-input {
    display: flex;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 4px 8px;
    background-color: #FFF;
    box-shadow: 0px 0px 5px 0px $textGray;
    &__textarea {
        width: 100%;
        flex-grow: 1;
        resize: none;
    }
    &__button {
        width: 60px;
        border: none;
        background-color: $white;
        position: relative;
        &::after {
            content: '➤';
            position: absolute;
            color: $textGray;
            font-size: 32px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        // &:hover {
        //     &::after {
        //         color: black;
        //     }
        // }
    }
}
</style>