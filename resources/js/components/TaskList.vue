<template>
    
<section class="bdy" style="background-color: #eee;">


  <div class="container py-5 h-100">
       
              <router-link to="/">
                <i class="mdi mdi-home text-light" data-mdb-toggle="tooltip" title="Home" style="font-size:20px"></i>
              </router-link>
         
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-10">

        <div class="card bg-light">
           <div class="card-header p-3">
            <h5 class="mb-0"><i class="fas fa-tasks me-2"></i>Task List</h5>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true">
          

  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Task description" aria-label="Task description" aria-describedby="button-addon2">
   <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
    <select class="select p-2">
      <option value="1">High Priority</option>
      <option value="2">Medium Priority</option>
      <option value="3">Low Priority</option>
    </select>
 
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add Task</button>
</div>
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
                <tr class="fw-normal">
                  <th>
                    <img src="/images/people/259624793_118600630627679_1218701727674921844_n.jpg" class="shadow-1-strong rounded-circle" alt="avatar 1"
                      style="width: 55px; height: 55px;">
                    <span class="ms-2">Fati.Zid</span>
                  </th>
                  <td class="align-middle">
                    <span >Call Sam For payments</span >
                  </td>
                  <td class="align-middle">
                    <h6 class="mb-0"><span class="badge bg-danger">High priority</span></h6>
                  </td>
                  <td class="align-middle" style="font-size:20px">
                    <a href="#!" data-mdb-toggle="tooltip" title="Done"><i class="mdi mdi-check"></i></a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i class="mdi mdi-delete  text-danger"></i></a>
                  </td>
                </tr>
                <tr class="fw-normal">
                  <th>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" class="shadow-1-strong rounded-circle" alt="avatar 1"
                      style="width: 55px; height: auto;">
                    <span class="ms-2">Kate Moss</span>
                  </th>
                  <td class="align-middle">Make payment to Bluedart</td>
                  <td class="align-middle">
                    <h6 class="mb-0"><span class="badge bg-success">Low priority</span></h6>
                  </td>
                  <td class="align-middle" style="font-size:20px">
                    <a href="#!" data-mdb-toggle="tooltip" title="Done"><i class="mdi mdi-check"></i></a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i class="mdi mdi-delete  text-danger"></i></a>
                  </td>
                </tr>
                <tr class="fw-normal">
                  <th>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" class="shadow-1-strong rounded-circle" alt="avatar 1"
                      style="width: 55px; height: auto;">
                    <span class="ms-2">Danny McChain</span>
                  </th>
                  <td class="align-middle">Office rent</td>
                  <td class="align-middle">
                    <h6 class="mb-0"><span class="badge bg-warning">Middle priority</span></h6>
                  </td>
                  <td class="align-middle" style="font-size:20px">
                    <a href="#!" data-mdb-toggle="tooltip" title="Done"><i class="mdi mdi-check"></i></a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i class="mdi mdi-delete  text-danger"></i></a>
                  </td>
                </tr>
                <tr class="fw-normal">
                  <th>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" class="shadow-1-strong rounded-circle" alt="avatar 1"
                      style="width: 55px; height: auto;">
                    <span class="ms-2">Alexa Chung</span>
                  </th>
                  <td class="align-middle">Office grocery shopping</td>
                  <td class="align-middle">
                    <h6 class="mb-0"><span class="badge bg-danger">High priority</span></h6>
                  </td>
                  <td class="align-middle" style="font-size:20px">
                    <a href="#!" data-mdb-toggle="tooltip" title="Done"><i class="mdi mdi-check"></i></a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i class="mdi mdi-delete  text-danger"></i></a>
                  </td>
                </tr>
                <tr class="fw-normal">
                  <th class="">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp" class="shadow-1-strong rounded-circle" alt="avatar 1"
                      style="width: 55px; height: auto;">
                    <span class="ms-2">Ben Smith</span>
                  </th>
                  <td class="align-middle">Ask for Lunch to Clients</td>
                  <td class="align-middle">
                    <h6 class="mb-0"><span class="badge bg-success">Low priority</span></h6>
                  </td>
                  <td class="align-middle" style="font-size:20px">
                    <a href="#!" data-mdb-toggle="tooltip" title="Done"><i class="mdi mdi-check"></i></a>
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i class="mdi mdi-delete  text-danger"></i></a>
                  </td>
                </tr>
                <tr class="fw-normal">
                  <th class="border-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" class="shadow-1-strong rounded-circle" alt="avatar 1"
                      style="width: 55px; height: auto;">
                    <span class="ms-2">Annie Hall</span>
                  </th>
                  <td class="border-0 align-middle">Create weekly tasks plan</td>
                  <td class="border-0 align-middle">
                    <h6 class="mb-0"><span class="badge bg-warning">Medium priority</span></h6>
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style scoped>
.bdy{
    /* height: 100vh !important; */
    background-image: url('/images/todohome.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>