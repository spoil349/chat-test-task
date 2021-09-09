<template>
    <div class="messages-block">
        <Message
            v-for="i in 40"
            :key="i"
        />
    </div>
</template>

<script>
import Message from './Message.vue'
export default {
    name: "MessagesBlock",
    components: {
        Message,
    }
}
</script>

<style lang="scss" scoped>
.messages-block {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    overflow-y: scroll;
    padding: 20px;
    max-height: calc(100% - 150px);
}
</style>