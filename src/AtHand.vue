
<template>

<div id="ham">
    <List />
</div>
    
</template>


<script>

    import List from './components/List.vue';
    import Task from './components/Task.vue';

    export default {
        name: 'AtHand',
        components: {
            List
        }
    }

</script>


<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
