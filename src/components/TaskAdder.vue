<template>
    
    <div class="task-adder">

        <input
            type="text"
            v-model="taskName"
            @focus="hasFocus = true"
            @blur="hasFocus = false">

        <button
            class=""
            v-on:click="createTask(taskName)"
            @keydown.enter="createTask(taskName)">
            +
        </button>

    </div>
    

</template>


<script>
    
    import { mapState, mapActions } from 'vuex';
    
    export default {

        name: 'TaskAdder',

        data: () => {
            return {
                taskName: '',
                hasFocus: false
            }
        },

        created: function () {
            window.addEventListener('keyup', this.checkKeyPress)
        },

        methods: {
            ...mapActions(['addTask']),

            createTask: function () {
                if (this.taskName) {
                    this.addTask(this.taskName);
                    this.taskName = '';
                }
            },

            checkKeyPress: function (event) {
                console.log(this.hasFocus);
                if (this.hasFocus && event.keyCode === 13) {
                    this.createTask();
                }
            }
        }
    }

</script>


<style lang="scss" scoped>

    @import '../styles/vars';
    
    .task-adder {
        display: flex;
        font-size: 1.5rem;
        margin-bottom: .5rem;

        input {
            flex: 1;
            font-size: 1.1rem;
            padding: .5rem;
            color: $light-charcoal;
            border-right-width: 0px;
        }

        button {
            width: 3.5rem;
            background-color: $light-grey;
            border: 0px;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 700;
            // -webkit-text-stroke: 1px $light-charcoal;

            &:hover, &:focus {
                -webkit-text-stroke: 1px #42A5F5;
            }
        }
    }

</style>