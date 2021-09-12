<template>
    <div class="messages-group">
        <p class="messages-group__name">{{name}}</p>
    </div>
</template>

<script>
export default {
    name: "MessagesGroup",
    props: ['nameOfGroup'],
    data() {
        return {
            name: this.nameOfGroup.replace('group_', '')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.messages-group {
    padding: 8px 12px 8px 32px;
    border-radius: 5px;
    border: 1px solid $textGray; 
    position: relative;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 12px;
    }
    &::before {
        position: absolute;
        content: '✉';
        top: 50%;
        left: 10px;
        color: $textGray;
        font-weight: 600;
        transform: translateY(-50%);
    }
    &__name {
        font-size: 13px;
        font-weight: 600;
        color: $textGray;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    &:hover {
        background-color: $blue;
        &.messages-group::before,
        .messages-group__name {
            color: $white;
        }
    }
    &.active {
        background-color: $darkBlue;
        &.messages-group::before {
            color: $lightBlue;
        }
        .messages-group__name {
            color: $white;
        }
    }
}
</style>