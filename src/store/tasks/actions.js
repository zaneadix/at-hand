
export const addTask = ({commit}, task) => {
    commit('addTask', task);
}

export const removeTask = ({commit}, id) => {
    commit('removeTask', id);
}