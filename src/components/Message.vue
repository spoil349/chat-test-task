<template>
    <div class="message">
        <p class="message__text">
            {{thisMessage.message}}
        </p>
        <div class="message__bottom">
            <p class="message__bottom-name">
                David Hill
            </p>
            <p class="message__bottom-date">
                {{thisMessage.date}}
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Message",
    props: {
        thisMessage: {
            type: Object,
        }
    },
    computed: {
        ...mapGetters['activeMessages']
    },
    mounted() {}
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