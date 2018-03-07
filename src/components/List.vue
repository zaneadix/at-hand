<template>

    <ul>
        <Task />
        <Task />
        <Task />
        <Task />
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
                butt: state => state.butt
            })
        }
    }

</script>


<style scoped>



</style>
