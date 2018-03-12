<template>

    <ul class="task-list">
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
        name: 'List',
        components: { Task },
        props: {
            msg: String
        },
        computed: {
            ...mapState({
                tasks: state => state.tasks
            })
        }
    }

</script>


<style lang="scss" scoped>

    ul.task-list {

        list-style: none;
        margin: 0;
        padding: 0;
        width: 75%;
        max-width: 600px;
        font-size: 1.5rem;

        li {
            text-align: left;
        }
    }

</style>
