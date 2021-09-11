<template>
    <div class="messages-input">
        <textarea
            class="messages-input__textarea"
            type="text"
            v-model="messageText"
            placeholder="Enter the message"
            ></textarea>
        <button
            :class="['messages-input__button', {disabled: !messageText}]"
            @click="saveMessage"
        ></button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "MessageInput",
    data() {
        return {
            messageText: null,
        }
    },
    computed: {
        ...mapGetters(['activeGroupName']),
    },
    methods: {
        ...mapActions(['changeActiveMessages']),
        saveMessage() {
            let newGroupMessage = this.messageText;
            let activeGroup = this.activeGroupName;
            let activeGroupMessages = localStorage.getItem(activeGroup);
            if (activeGroupMessages) {
                localStorage.setItem(activeGroup, `${activeGroupMessages}, ${newGroupMessage}`);
            } else {
                localStorage.setItem(activeGroup, newGroupMessage);
            }
            this.changeActiveMessages(activeGroup);
            this.messageText = '';
        },
    },
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
        font-size: 14px;
        flex-grow: 1;
        resize: none;
        padding: 8px 12px;
    }
    &__button {
        width: 60px;
        border: none;
        background-color: $white;
        position: relative;
        cursor: pointer;
        &::after {
            content: '➤';
            position: absolute;
            color: $textGray;
            font-size: 32px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
        }
        &.disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }
}
</style>