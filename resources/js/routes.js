import Home from "./components/Home"
import TaskList from "./components/TaskList"
import Register from "./components/Register"
import Login from "./components/Login"
import Logout from "./components/Logout"

export default{
    mode: 'history',
    routes: [
       {
           path: '/',
           component: Home,
           name: 'Home'
       },
       {
           path: '/task',
           component: TaskList,
           name: 'TaskList'
       },
       {
        path: '/registration',
        component: Register,
        name: 'registration'
       },
       {
        path: '/login',
        component: Login,
        name: 'login'
       },
       {
        path: '/logout',
        component: Logout,
        name: 'logout',
       },
    ]
}