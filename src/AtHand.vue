
<template>

    <div id="app">
        <div class="tasks-container">
            <TabSet v-bind:tabs="taskGroups" v-bind:activeId="activeGroupId"/>
            <TaskAdder />
            <TaskGroup v-bind:tasks="taskGroups[0].tasks" />
        </div>
    </div>
    
</div>
    
</template>


<script>
    
    import map from 'lodash-es/map';
    import { mapState, mapActions } from 'vuex';
    import TabSet from './components/TabSet.vue';
    import TaskAdder from './components/TaskAdder.vue';
    import TaskGroup from './components/TaskGroup.vue';

    export default {
        name: 'AtHand',
        components: {
            TabSet,
            TaskAdder,
            TaskGroup
        },
        computed: {
            ...mapState({
                activeGroupId: state => {
                    console.log(state.activeGroupId)
                    return state.activeGroupId
                },
                taskGroups: state => state.taskGroups,
            })
        }
    }

</script>


<style lang="scss">

    @import 'styles/vars';

    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $light-charcoal;
        display: flex;
        position: relative;
        height: 100vh;

        input {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            border: 1px solid $light-grey;
        }

        input, button {
            &:focus {
                outline: 1px dashed #42A5F5;
                outline-offset: -1px;
            }
        }

        .tasks-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            height: 100%;
            width: 100%;
            
            .tab-set,
            .task-adder,
            .task-group {
                width: 75%;
                max-width: 600px;
            }
        }
    }

</style>
