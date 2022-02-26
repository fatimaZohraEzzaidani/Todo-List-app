<template>
    
<section class="bdy">

<div class="d-flex text-center">
 <loader v-if="getLoader"></loader>
</div>
   

  <div class="container py-5 h-100">
              <router-link to="/">
                <i class="mdi mdi-home text-light" data-mdb-toggle="tooltip" title="Home" style="font-size:20px"></i>
              </router-link>
              <router-link class="d-flex justify-content-left"  to="/logout">
                <span class="text-light">logout</span>
              </router-link>
    <div class="row d-flex justify-content-center align-items-center h-100">
     
      <div class="col-md-12 col-xl-10">
        <div class="card bg-light">
           <div class="card-header p-3">
            <h5 class="mb-0"><i class="fas fa-tasks me-2"></i>Task List</h5>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true">
          
  <form @submit="creatTodo" class="mt-4">
   <div class="add-items d-flex mb-2">
     <input v-model="user_name" type="text" class="bg-light border-bottom border-secondary form-control  text-primary myform" placeholder="Your name">
   </div>
  <div class="input-group mb-3">
  <input v-model="title" type="text" class="form-control" placeholder="Task description" aria-label="Task description" aria-describedby="button-addon2">
   <!-- <label class="visually-hidden text-dark" for="inlineFormSelectPref">Preference</label>
    <select  class="select p-2 text-dark" v-model="priority" aria-label="Priority">
      <option value="High Priority">High Priority</option>
      <option value="Medium Priority">Medium Priority</option>
      <option value="Low Priority">Low Priority</option>
    </select> -->
 
  <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Add Task</button>
</div>

<div  class="col-md-12 mb-2">
 <h4>Priority</h4> 
 <input type="radio" id="one" value="High" v-model="priority" />
<label class="text-danger" for="High">High</label>

<input type="radio" id="two" value="Medium" v-model="priority" />
<label class="text-primary" for="Medium">Medium</label>

<input type="radio" id="two" value="Low" v-model="priority" />
<label class="text-warning" for="Low">Low</label>
</div>


</form>
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">Team Member</th>
                  <th scope="col">Task</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="todo in  getTodos" :key="todo.id" class="fw-normal">
                  <th>
                    <!-- <img src="/images/people/259624793_118600630627679_1218701727674921844_n.jpg" class="shadow-1-strong rounded-circle" alt="avatar 1"
                      style="width: 55px; height: 55px;"> -->
                    <i class="mdi mdi-account border border-rounded" style="font-size:20px"></i>  
                    <span class="ms-2">{{ todo.user_name }}</span>
                  </th>
                  <td class="align-middle">
                    <span >{{ todo.title }}</span >
                  </td>
                  <td class="align-middle">
                    <h6 v-if="todo.priority == 'High'" class="mb-0"><span class="badge bg-danger">{{ todo.priority }}</span></h6>
                     <h6  v-if="todo.priority == 'Medium'" class="mb-0"><span class="badge bg-primary">{{ todo.priority }}</span></h6>
                      <h6  v-if="todo.priority == 'Low'" class="mb-0"><span class="badge bg-warning">{{ todo.priority }}</span></h6>
                  </td>
                  <td class="align-middle" style="font-size:20px">
                    <a href="#!" data-mdb-toggle="tooltip" title="Done"><i class="mdi mdi-check"></i></a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i class="mdi mdi-delete  text-danger"></i></a>
                  </td>
                </tr>
                
              </tbody>
            </table>

          </div>
          <div class="card-footer text-end p-3">
            
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


    
</template>

<script>
    export default {
    
    created(){
      this.showTodos();
    },
       
    computed:{
     getLoader() {
       return this.$store.getters.getLoader
     },
     getTodos(){
       return this.$store.getters.getTodos
     } 
   },

   data(){
     return{
       user_name: '',
       title: '',
       priority: '',
       errorMessage: ''
     }
   },

   methods:{

    showTodos(){
       this.$store.dispatch('getTodos')
    },

    creatTodo(e){
        e.preventDefault();
        this.$store.dispatch('creatTodo', {
          user_name: this.user_name,
          title: this.title,
          priority: this.priority
        })
        .then(response => {
          this.errorMessage = '';
          this.$store.dispatch('getTodos')
        })
        .catch(error => {
               this.errorMessage = error.response.data.message; 
            console.log(this.errorMessage);
        })
     },
   }

    }
</script>


<style scoped>
/*
 * Globals
 */

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}


/*
 * Base structure
 */

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.bdy{
    min-height: 100vh;
    background-image: url('/images/todohome.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.cover-container {
  max-width: 42em;
}


/*
 * Header
 */

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>