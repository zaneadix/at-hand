import Vue from 'vue';
import Vuex from 'vuex';

import taskModule from './tasks'

//temporary
import { Task } from './tasks';

Vue.use(Vuex);

const actions = {
    ...taskModule.actions
};

const mutations = {
    ...taskModule.mutations
}

const store = new Vuex.Store({
    state: {
        tasks: [
            Object.assign(new Task(), {
                id: 1,
                name: 'Flick a boog',
                status: 'no-rush'
            }),
            Object.assign(new Task(), {
                id: 1,
                name: 'Kiss a turtle',
                status: 'soon'
            }),
            Object.assign(new Task(), {
                id: 1,
                name: 'Light a candle',
                status: 'very-soon'
            }),
            Object.assign(new Task(), {
                id: 1,
                name: 'Go to outer space',
                status: 'no-rush'
            })
        ]
    },
    actions,
    mutations
});

export default store;