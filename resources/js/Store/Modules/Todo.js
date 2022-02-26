import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api' 

const state = {
    token: localStorage.getItem('token') || null,
    users:[],
    loading: false,
    Todos:[]
};

const getters = {
    loggedIn(state){
        return state.token != null
    },
    getToken(state){
        return state.token
    },
    getLoader(state){
        return state.loading
    },
    getTodos(state){
       return state.Todos
    }
};

const actions = {

  getTodos(context){
    
    //Tell axios the header you want
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
   
    if(context.getters.getTodos == ''){
      context.commit('getLoader', true)
    } 
     axios.get('/show')
     .then(response => {
        context.commit('getTodos', response.data.data)
        context.commit('getLoader', false)
     })
     .catch(error => {
       context.commit('getLoader',false)
       console.log(error)
     })
   
        },

        register(context, credentials){
   
            context.commit('getLoader', true)
            
            return new Promise(( resolve, reject) => {  
        
            axios.post('/register', {
        
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
              password_confirmation: credentials.password_confirmation
        
            })
            .then(response => {
        
              const token = response.data.token 
              localStorage.setItem('token', token)
              context.commit('registerUser', token)
              context.commit('getLoader',false)
              resolve(response)
        
            })
            .catch(error => {
              console.log(error)
              context.commit('getLoader',false)
              reject(error)
            })
          })
        },



        login(context, credentials){

         context.commit('getLoader', true)
    
        return new Promise(( resolve, reject) => {
            axios.post('/login', {
            email: credentials.email,
            password: credentials.password,
            })
            .then(response => {
            const token = response.data.token 
            localStorage.setItem('token', token)
            context.commit('login', token)
            resolve(response)
            context.commit('getLoader', false)
            })
            .catch(error => {
            context.commit('getLoader',false)
            console.log(error)
            reject(error)
            })
        })
    },



    logout(context){ 

        //Tell axios the header you want
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
    
        if(context.getters.loggedIn){
    
         context.commit('getLoader', true)
       
          return new Promise(( resolve, reject) => {
            axios.post('/logout')
            .then(response => {
              localStorage.removeItem('token')
              context.commit('destroyToken')
              resolve(response)
              context.commit('getLoader', false)
            })
            .catch(error => {
              localStorage.removeItem('token')
              context.commit('getLoader',false)
              reject(error)
            })
           })
        }
      },



      creatTodo(context, credentials){

        //Tell axios the header you want
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

        context.commit('getLoader', true)
    
        return new Promise(( resolve, reject) => {
            axios.post('/creat', {
            user_name: credentials.user_name,
            title: credentials.title,
            priority: credentials.priority
            })
            .then(response => {
            resolve(response)
            context.commit('getLoader', false)
            })
            .catch(error => {
            context.commit('getLoader',false)
            console.log(error)
            reject(error)
            })
        })
      }
    
};

const mutations = {
    getTodos(state, todos){
      state.Todos = todos
    },
    register(state, token){
        state.token = token
    },
    login(state, token){
        state.token = token
    },
    destroyToken(state){
        state.token = null
    },
    getLoader(state, payLoad){
        state.loading = payLoad
    },  
};

export default {
  state,
  getters,
  actions,
  mutations
};