
<template>
    <div class="messages-wrapper">
        <MessagesBlockHeader/>
        <MessagesBlock/>
        <MessageInput/>
    </div>
</template>

<script>
import MessagesBlockHeader from './MessagesBlockHeader.vue'
import MessagesBlock from './MessagesBlock.vue'
import MessageInput from './MessageInput.vue'

export default {
    name: "MessagesBlockWrapper",
    components: {
        MessagesBlockHeader,
        MessagesBlock,
        MessageInput,
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.messages-wrapper {
    width: 100%;
    background-color: $lightBlue;
    position: relative;
}
</style>
