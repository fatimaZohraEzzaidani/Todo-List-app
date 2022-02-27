<template>
<div class="bdy d-flex h-100 text-center text-white bg-dark">
      <loader v-if="getLoader"></loader>
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">TodoZohra</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="#">Register</a>
        <router-link class="nav-link" to="/login">
            <span>Login</span>
        </router-link> 
        <router-link class="nav-link" to="/">
            <span>Home</span>
        </router-link> 
      </nav>
    </div>
  </header>

  <main class="px-3">
       <form @submit="register">  
                  <h3 class="card-title text-center mt-4">Register to create a Todo List Account</h3>
                 
                  <div class="add-items d-flex">
                    <input  v-model="name" type="text" class="form-control border-bottom border-secondary bg-light text-dark myform" placeholder="Name">
                  </div>
                  
                  <div class="add-items d-flex">
                      <input  v-model="email" type="email" class="form-control border-bottom border-secondary bg-light text-dark myform" placeholder="Email">
                  </div>
                   
                    <div class="add-items d-flex">
                      <input  v-model="password" type="password" class="form-control border-bottom border-secondary bg-light text-dark myform" placeholder="Password">
                  </div>
                   
                  <div class="add-items d-flex">
                      <input v-model="password_confirmation" type="password" class="form-control  border-bottom  border-secondary bg-light text-dark myform" placeholder="Confirm Password">
                  </div>

                  <p class="text-light">{{ errorMessage }}</p>
                  
                  <div class="list-wrapper d-flex justify-content-center mb-4 mt-4">
                      <button class="btn btn-block btn-rounded btn-info" type="submit">Register</button>
                  </div>
              </form>
  </main>

  <footer class="mt-auto text-white-50">
    <p>Todo App  by  <span class="text-light">@fati.zid</span> </p>
  </footer>
</div>
</div>
</template>

<script>
export default {
    name: "register",

    data(){
        return {
          email: '',
          password: '',
          password_confirmation: '',
          errorMessage: '',
        }
    },

   computed:{
     getLoader() {
       return this.$store.getters.getLoader
     } 
   },

   methods:{

     register(e){
             e.preventDefault();

             this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
             })
             .then(response => {
               this.errorMessage = '';
               this.$router.push({ name: 'login'})
             })
             .catch(error => {
                 this.errorMessage = error.response.data.errors; 
                 console.log(this.errorMessage);
             })
        }
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
    height: 100vh !important;
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