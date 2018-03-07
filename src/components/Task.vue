
<template>
    
    <li>{{butt}}</li>
    
</template>


<script>
    
    import { mapState, mapActions } from 'vuex';
    
    export default {
        name: 'Task',
        computed: {
            ...mapState({
                butt: function (state) { return state.butt }
            })
        }
    }

</script>