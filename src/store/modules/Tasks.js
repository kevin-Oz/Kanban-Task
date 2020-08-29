import axios from "axios";

const taskResource = 'http://127.0.0.1:5984/tasks/';

const getters = {
    tasks: state => state.tasks
};

const state = {
    tasks: [],
};

const actions = {

    async fetchTodo({commit}){
        const response = await axios.get(`${taskResource}_design/estado/_view/todo`, {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        console.log('response.data __>',response.data)
        commit('getTodo',response.data);
    },
    async fetchTasks({commit}) {
        const response = await axios.get(`${taskResource}_all_docs?include_docs=true`, {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        console.log('status Code: ',response.status, response.statusText);
        commit('setTask', response.data.rows);

    },
    async addTask({ commit }, task) {
        const response = await axios.post(`${taskResource}`, task,{
            auth: {
                username: 'admin',
                password: 'admin'
            },
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        });
        commit('newTask', response);
    },
    async updateTask({commit}, task) {
        const response = await axios.put(`${taskResource}${task.id}`, task.doc,{
            params: {"rev": task.doc._rev},
            auth: {
                username: 'admin',
                password: 'admin'
            },
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        });
        commit('updTask', response);
    },
    async removeTask({commit}, task) {
        console.log('url -> ',taskResource);
        await axios.delete(`${taskResource}${task.id}`, {
            params: {"rev": task.doc._rev},
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        commit('deleteTask', task);
    }
};
/*
funciones encargados de modificar el state
 */
const mutations = {

    getTodo(state,data){
      console.log('data.rows ---> '+data.rows);
    },
    setTask(state, data) {
        console.info('actualice la lista')
        console.log('data => ', data)
        state.tasks = data;
    },
    newTask(state, response){
        console.log('data =', response.data);
        console.log('status Code : ',response.status, response.statusText);
    },
    deleteTask({commit}, response){
        console.log('registro eliminado -> ', response.status);
    },
    updTask({commit}, response){
        console.log('Status Code:  '+response.status);
    }
};

export default {
    state, getters, actions, mutations
}








