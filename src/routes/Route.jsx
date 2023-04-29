import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/Home/News/News";


const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
    children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
            path:'/category/:id',
            element:<Category />
        }
    ]
},
{
    path:'news',
    element:<NewsLayout />,
    children:[
        {
         path:':id',
         element:<News />   
        }
    ]
}
]) 

export default router;