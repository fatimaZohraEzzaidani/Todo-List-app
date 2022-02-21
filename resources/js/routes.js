import Home from "./components/Home"
import TaskList from "./components/TaskList"

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
       }
    ]
}