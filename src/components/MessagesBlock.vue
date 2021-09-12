<template>
    <div class="messages-block">
        <Message
            v-for="message in activeMessages"
            :key="message.id"
            :thisMessage="message"
        />
    </div>
</template>

<script>
import Message from './Message.vue'
import { mapGetters } from 'vuex'

export default {
    name: "MessagesBlock",
    components: {
        Message,
    },
    computed: {
        ...mapGetters(['activeMessages']),
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