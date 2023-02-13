
import './App.css';
import { createBrowserRouter,RouterProvider,BrowserRouter,Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import { ToastContainer } from 'react-toastify';
import AddProduct from './Pages/Product/AddProduct';
import UpdateProduct from './Pages/Product/UpdateProduct';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



const Layout =()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router =createBrowserRouter([
  {
    path: "/",
    element : <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/addProduct',
        element:<AddProduct/>
      },
      {
        path:'/updateProduct',
        element:<UpdateProduct/>
      }

    ]
  },
])

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>

      <div>
      <RouterProvider router={ router} />
      
    </div>
      
      
    </div>
  );
}

export default App;