
<template>
    
    <div class="task" :class="model.status">
        <span class="name">{{ model.name }}</span>
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

    .task {
        padding: .5rem;
        // box-sizing: border-box;
        // border-left: 3px solid transparent;
        margin-bottom: 5px;
        display: flex;

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