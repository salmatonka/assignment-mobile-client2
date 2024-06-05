import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import EditProduct from "../Pages/Dashboard/EditProduct/EditProduct";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import ReportedProduct from "../Pages/Dashboard/ReportedProduct/ReportedProduct";
import DetailsCard from "../Pages/DetailsCard/DetailsCard";
import FilterByCategorey from "../Pages/FilterByCategorey/FilterByCategorey";
import LogIn from "../Pages/Forms/LogIn";
import SignUp from "../Pages/Forms/SignUp";
import Home from "../Pages/HomePages/Home";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
     path: '/',
     element: <Main />,
     errorElement: <ErrorPage />,
     children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path:'/signUp',
            element: <SignUp />
          },
          {
            path:'/login',
            element: <LogIn />
          },
          {
            path: '/usedMobile/:categorey',
            loader:async({params})=> await fetch(`https://mobile-market-server.onrender.com/usedMobile/${params.categorey}`),
            element: <FilterByCategorey />
        },
        {
            path: '/mobile/:id',
            loader: async({params})=> await fetch(`https://mobile-market-server.onrender.com/mobile/${params.id}`),
            element: <DetailsCard />
        },  
        {
            path: '/aboutUs',
            element: <AboutUs />
        },  
         
        {
            path: '/userProfile',
            element: <UserProfile/>
        }, 
     ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage />,
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <AllProducts />
                
            },
            {
                path: '/dashboard/myOrder',
                element: <MyOrder />
                
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct />
                
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct />
                
            },
            {
                path: '/dashboard/editProduct/:id',
                element: <EditProduct />,
                loader: async({params})=> await fetch(`https://mobile-market-server.onrender.com/mobile/${params.id}`),
            },
            {
                path: '/dashboard/reportedProduct',
                element: <ReportedProduct />
                
            },
            {
                path: '/dashboard/allUsers',
                 element: <AllUsers />
                
            }
        ]
    }
  
])