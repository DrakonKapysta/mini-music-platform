import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './assets/global.css';
import MusicPage from "./pages/MusicPage/MusicPage";

const router = createBrowserRouter([
    {
        children:[
            {
                path:'/',
                element:<MusicPage/>
            }
        ]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
