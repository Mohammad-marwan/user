
import { RouterProvider } from 'react-router-dom'
import Root from './assets/Root.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Regester from './components/Regester'
import userContextProvider from './components/User.jsx'
import { createBrowserRouter } from 'react-router-dom'



export default function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Root />,
      children:[
        {path:'/',element:<Home />},
        {path:'/Regester',element:
      
        <Regester />
       
      
      },
        {path:'/Login',element:<Login />},
      ],
    }
  ])
  return (
  
    <useContextProvider>
    <RouterProvider router={router} />
    </useContextProvider>
    
    
      
    
  )
}
