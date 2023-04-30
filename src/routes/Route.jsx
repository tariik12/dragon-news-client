import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/Home/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
{
    path:'/category',
    element: <Main></Main>,
    children:[
        {
            path:':id',
            element:<Category />,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
},
{
    path:'news',
    element:<NewsLayout />,
    children:[
        {
         path:':id',
         element:<News />,
         loader:({params}) =>fetch(`http://localhost:5000/news/${params.id}`)  
        }
    ]
}
]) 

export default router;