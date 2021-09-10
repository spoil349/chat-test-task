<template>
    <div class="sidebar-main">
        <h2 class="sidebar-main__header">MESSAGES</h2>
        <h3 class="sidebar-main__subheader">history</h3>
        <MessagesGroup
            :class="{active: isActive(item)}"
            v-for="item in groupsNames"
            :key="item"
            :nameOfGroup="item"
            @click="setActive(item)"
        />
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
    </div>
</template>

<script>
import MessagesGroup from './MessagesGroup.vue'
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
            myStorage: localStorage,
            groupsNames: Object.keys(localStorage),
        }
    },
    methods: {
        isActive(i) {
            return this.activeItem === i;
        },
        setActive(i) {
            this.activeItem = i;
        },
        openAddGroupInput() {
            this.addGroupOpened = true;
        },
        addNewGroup() {
            if (this.groupName) {
                this.addGroupOpened = false;
                this.myStorage.setItem(this.groupName, '');
                this.groupsNames = Object.keys(localStorage);
                this.groupName = '';
            }
        },
        
    },
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
        padding: 4px 8px;
        border-radius: 4px;
        background: $lightBlue;
        border: none;
        color: $textGray;
        cursor: pointer;
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