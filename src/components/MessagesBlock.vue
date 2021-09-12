<template>
    <div class="messages-block">
        <Message
            v-for="message in activeMessages"
            :key="message"
            :thisMessage="message"
        />
        <!-- <button @click="log"></button> -->
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
    methods: {
        // log() {
        //     console.log('this.activeMessages', this.activeMessages)
        //     console.log('typeof this.activeMessages', typeof this.activeMessages)
        // }
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