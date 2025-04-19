import Login from "../layout/Login"
import Register from "../layout/Auth/Register"


const user = [
    {
        path: '/',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
]

export default user