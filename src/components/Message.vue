<template>
    <div class="message">
        <p class="message__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, debitis quos. Earum consequatur qui, distinctio sint non saepe obcaecati perferendis.
        </p>
        <div class="message__bottom">
            <p class="message__bottom-name">
                David Hill
            </p>
            <p class="message__bottom-date">
                {{date}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            date: new Date,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.message {
    padding: 15px;
    background-color: $white;
    border-radius: 5px;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &__text {
        margin-bottom: 20px;
        font-size: 14px;
    }
    &__bottom {
        display: flex;
        font-size: 12px;
        color: $textGray;
        &-name {
            margin-right: 20px;
        }
    }
}
</style>