
<template>
    
    <ul class="tab-set">
        <li v-for="tab in tabs"
            v-bind:class="{ tab: true, active: tab.id === activeId }">
            {{tab.name}}
        </li>
        <li class="tab adder">
            <button>+</button>
        </li>
    </ul>

</template>


<script>
    
    import { mapState, mapActions } from 'vuex';
    
    export default {
        name: 'TabSet',
        props: ['tabs', 'activeId'],
        methods: {
            ...mapActions(['setTab'])
        },
        watch: { 
            tabs: function(newVal, oldVal) {
              console.log('tabs changed: ', newVal, ' | was: ', oldVal)
            },
            activeId: function(newVal, oldVal) {
              console.log('activeId changed: ', newVal, ' | was: ', oldVal)
            },
          }
    }

</script>


<style lang="scss" scoped>

    @import '../styles/vars';
    
    ul.tab-set {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 1rem;
        border-bottom: 1px solid $light-grey;

        li.tab {
            padding: .5rem;
            border: 1px solid $light-grey;
            border-right-width: 0px;
            margin-bottom: -1px;

            &:last-child {
                border-right-width: 1px;
            }

            &.active {
                border-bottom-color: #FFF;
            }

            &.adder {
                padding: 0;

                button {
                    width: 2rem;
                    height: 100%;
                    border: 0;
                }
            }
        }
    }

</style>