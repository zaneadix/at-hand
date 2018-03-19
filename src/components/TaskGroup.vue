<template>

    <ul class="task-group">
        <li class="task-item" v-for="task in tasks">
            <Task :model="task"
                  :key="task.name" />
        </li>
    </ul>

</template>


<script>
    
    import { mapState, mapActions } from 'vuex';
    import Task from './Task.vue';

    export default {
        name: 'TaskGroup',
        components: { Task },
        props: {
            tasks: Array
        }
    }

</script>


<style lang="scss" scoped>

    @import '../styles/vars';

    ul.task-group {

        list-style: none;
        margin: 0;
        padding: 0;
        min-height: 60vh;

        li {
            text-align: left;
        }
    }

</style>
