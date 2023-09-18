import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Layout from './Component/Layout/Layout.jsx';
import Order from './Component/Order/Order.jsx'
import ShareData from './Component/ShareData/ShareData';
import Waiter from './Component/Waiter/Waiter';
import Valet from './Component/Valet/Valet';
import Utilities from './Component/Utilities/Utilities';
import Check from './Component/Check/Check';
import History from './Component/History/History';
import Navbar from './Component/Navbar/Navbar';
import Login from './Component/Login/Login';
import ProtectRouting from './Component/ProtectRouting/ProtectRouting';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import NotFound from './Component/NotFound/NotFound';





export default function App() {
 
  let routes = createBrowserRouter([
    {path:"/" , element:  <Layout /> ,children: [
      {path:"/all" , element: <ProtectRouting> <Order></Order></ProtectRouting>},
      {path:"waiter" , element:<ProtectRouting><Waiter></Waiter></ProtectRouting>},
      {path:"/valet" , element:<ProtectRouting><Valet></Valet></ProtectRouting>},
      {path:"/services" , element:<ProtectRouting><Utilities/></ProtectRouting>},
      {path:"/check" , element:<ProtectRouting><Check/></ProtectRouting>},
      {path:"/history" , element:<ProtectRouting><History/></ProtectRouting>},
      {path:"/" , element:<Login/>},
      {path:'*' , element:<NotFound/>},
    ]}])

 
  return <>
    <ShareData>
        
        <RouterProvider router={routes}>

        </RouterProvider>
    </ShareData>
  </>
}


