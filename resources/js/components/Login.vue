<template>
<div class="bdy d-flex h-100 text-center text-white bg-dark">
    <loader v-if="getLoader"></loader>
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">TodoZohra</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="#">Login</a>
        <router-link class="nav-link" to="/registration">
            <span>Register</span>
        </router-link> 
        <router-link class="nav-link" to="/">
            <span>Home</span>
        </router-link> 
      </nav>
    </div>
  </header>

  <main class="px-3">
      <form @submit="login" class="mt-4">  
                    
                    <div class="add-items d-flex">
                       <input v-model="email" type="email" class="bg-light border-bottom border-secondary form-control  text-primary myform" placeholder="Email">
                    </div>
                    <p class="text-danger">{{ errorMessage }}</p>
                    <!-- <p  class="text-danger p-0">{{ errorEmail }}</p> -->
                  
                     <div class="add-items d-flex">
                        <input v-model="password"  type="password" class="bg-light border-bottom border-secondary form-control  text-primary myform" placeholder="Password">
                    </div>
                      <!-- <p class="text-danger p-0">{{ errorPassword }}</p>
                      <p class="text-danger p-0 text-center">{{ errorMessage }}</p> -->
                     <div class="add-items d-flex">
                     <label>
                        <input type="checkbox" value="remember-me"> Remember me 
                      </label>
                      </div>
                    
                    <div class="list-wrapper d-flex justify-content-center">
                       <button class="btn btn-info" type="submit">login</button>
                    </div>

                     <!-- or links -->

                     <p class="mt-4 text-center"><a class="text-light" href="">forgot password</a></p>


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
    name: "login",

    data(){
        return {
          email: '',
          password: '',
          errorMessage: '',
        }
    },

   computed:{
     getLoader() {
       return this.$store.getters.getLoader
     } 
   },

   methods:{

    login(e){
        e.preventDefault();
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(response => {
          this.errorMessage = '';
          this.$router.push({ name: 'TaskList'})
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