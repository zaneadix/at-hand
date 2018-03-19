
<template>
    
    <div class="task" :class="model.status">
        <span class="name">{{ model.name }} {{model.id}}</span>
        <button class="close" v-on:click="removeTask(model.id)">X</button>
    </div>
    
</template>


<script>
    
    import { mapState, mapActions } from 'vuex';
    
    export default {
        name: 'Task',
        props: ['model'],
        methods: {
            ...mapActions(['removeTask'])
        }
    }

</script>


<style lang="scss" scoped>

    @import '../styles/vars';

    .task {
        padding: .5rem;
        margin-bottom: 5px;
        border-bottom: 1px solid $light-grey;
        font-size: 1.1rem;
        display: flex;
        font-weight: 100;

        button {
            border: 0px;
        }

        // box-shadow: 0px -1px 10px rgba(0,0,0,.1); 

        // &.no-rush {
        //     border-color: grey;
        // }

        // &.soon {
        //     border-color: yellow;
        // }

        // &.very-soon {
        //     border-color: red;
        // }

        .name {
            flex: 1;
        }
    }

</style>