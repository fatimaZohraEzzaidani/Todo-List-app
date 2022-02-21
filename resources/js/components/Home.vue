<template>
<div class="bdy d-flex h-100 text-center text-white bg-dark">
    
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">TodoZohra</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <!-- <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Contact</a> -->
      </nav>
    </div>
  </header>

  <main class="px-3">
    <h1>Create a todo list</h1>
    <p class="lead"> Keep track of your progress and be more productive with your time. </p>
    <p class="lead">
        <router-link to="task">
           <p class="btn btn-lg btn-info rounded-circle">Get started</p>
        </router-link>  
    </p>
  </main>

  <footer class="mt-auto text-white-50">
    <p>Todo App  by  <span class="text-light">@fati.zid</span> </p>
  </footer>
</div>
</div>
</template>

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