import Vue from 'vue';
import findIndex from 'lodash-es/findIndex';
import { Task } from './models';

export const addTask = (state, name) => {
    const id = state.tasks.length+1;
    const task = Object.assign(new Task(), {
        id,
        name,
        status: 'no rush'
    });
    Vue.set(state, 'tasks', state.tasks.concat(task));
}

export const removeTask = (state, id) => {
    const index = findIndex(state.tasks, task => task.id === id);
    const update = [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index+1)
    ]
    Vue.set(state, 'tasks', update);
}