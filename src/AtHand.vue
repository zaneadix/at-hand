
<template>

    <div id="app">
        <div class="list-container">
            <List />
        </div>
    </div>
    
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


<style lang="scss">

    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        position: relative;
        height: 100vh;

        .list-container {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            height: 100%;
            width: 100%;
        }
    }

</style>
