import Vue from 'vue';
import findIndex from 'lodash-es/findIndex';

export const removeTask = (state, id) => {
    const index = findIndex(state.tasks, task => task.id === id);
    const update = [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index+1)
    ]
    Vue.set(state, 'tasks', update);
}