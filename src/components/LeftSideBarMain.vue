<template>
    <div class="sidebar-main">
        <h2 class="sidebar-main__header">MESSAGES</h2>
        <h3 class="sidebar-main__subheader">history</h3>
        <button
            class="sidebar-main__button"
            v-if="!addGroupOpened"
            @click="openAddGroupInput"
        >
            Create new group
        </button>
        <div
            class="sidebar-main__add"
            v-if="addGroupOpened"
        >
            <input
                class="sidebar-main__add-input"
                placeholder="Enter group name"
                type="text"
                v-model="groupName"    
            >
            <button
                :class="['sidebar-main__add-button', {clickable: groupName}]"
                @click="addNewGroup"
            >
                Save
            </button>
        </div>
        <MessagesGroup
            :class="{active: isActiveGroup(item)}"
            v-for="item in groupsNames"
            :key="item"
            :nameOfGroup="item"
            @click="setActiveGroup(item)"
        />
    </div>
</template>

<script>
import MessagesGroup from './MessagesGroup.vue'
import { mapActions } from 'vuex'
export default {
    name: "LeftSideBarMain",
    components: {
        MessagesGroup,
    },
    data() {
        return {
            activeItem: null,
            addGroupOpened: false,
            groupName: '',
            groupsNames: this.groupNamesFilter(localStorage),
        }
    },
    methods: {
        isActiveGroup(i) {
            return this.activeItem === i;
        },
        setActiveGroup(item) {
            // console.log('leftSideBar function item typeof: ', typeof item, '   item = ', item)
            this.activeItem = item;
            this.changeActiveGroup(item);
            this.changeActiveMessages(item);
        },
        openAddGroupInput() {
            this.addGroupOpened = true;
        },
        groupNamesFilter(storage) {
            return Object.keys(storage).filter(key => key.substring(0, 5) === 'group')
        },
        addNewGroup() {
            if (this.groupName) {
                this.addGroupOpened = false;
                localStorage.setItem(`group_${this.groupName}`, '');
                this.groupsNames = this.groupNamesFilter(localStorage);
                this.groupName = '';
            }
        },
        ...mapActions(['changeActiveGroup', 'changeActiveMessages']),
    },
    // computed: mapGetters(['activeGroupName']),
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.sidebar-main {
    &__header {
        font-size: 16px;
        font-weight: 500;
        color: $white;
        margin-bottom: 4px;
        text-transform: uppercase;
    }
    &__subheader {
        font-size: 14px;
        font-weight: 600;
        color: $textGray;
        margin-bottom: 20px;
    }
    &__button {
        width: 100%;
        padding: 20px 8px;
        border-radius: 4px;
        background: $lightBlue;
        border: none;
        color: $textGray;
        cursor: pointer;
        margin-bottom: 16px;
        &:hover {
            background-color: $blue;
            color: $white;
        }
        &:active {
            background-color: $darkBlue;
            color: $white;
        }
    }
    &__add {
        display: flex;
        flex-flow: column nowrap;
        margin-bottom: 16px;
        &-input {
            padding: 4px 8px;
            border-radius: 4px;
            margin-bottom: 12px;
            text-align: center;
            outline: none;
        }
        &-button {
            border: none;
            padding: 4px 8px;
            border-radius: 4px;
            background: $lightBlue;
            border: none;
            color: $textGray;
            cursor: not-allowed;
            &.clickable {
                background-color: $blue;
                color: $white;
                cursor: pointer;
                &:hover {
                    background-color: $darkBlue;
                    color: $white;
                }
                &:active {
                    filter: brightness(0.75);
                }
            }
        }
    }
}
</style>