<template>
    <div class="messages-block">
        <Message
            v-for="item in 1"
            :key="item"
        />
    </div>
</template>

<script>
import Message from './Message.vue'

export default {
    name: "MessagesBlock",
    components: {
        Message,
    },
    computed: {
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
.messages-block {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    overflow-y: scroll;
    padding: 20px;
    max-height: calc(100% - 158px);
}
</style>