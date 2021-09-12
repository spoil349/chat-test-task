
<template>
    <div class="messages-wrapper">
        <MessagesBlockHeader/>
        <MessagesBlock
            v-if="activeGroupName"
        />
        <MessageInput
            v-if="activeGroupName"
        />
    </div>
</template>

<script>
import MessagesBlockHeader from './MessagesBlockHeader.vue'
import MessagesBlock from './MessagesBlock.vue'
import MessageInput from './MessageInput.vue'
import { mapGetters } from 'vuex'

export default {
    name: "MessagesBlockWrapper",
    components: {
        MessagesBlockHeader,
        MessagesBlock,
        MessageInput,
    },
    computed: {
        ...mapGetters(['activeGroupName'])
    }
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
