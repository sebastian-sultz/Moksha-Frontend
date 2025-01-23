import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import './index.css'
import 'remixicon/fonts/remixicon.css';
import 'react-toastify/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Quiz from './Components/Quiz.jsx'
import Home from './Components/Home.jsx'
import Error from './Components/Error.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import reportWebVitals from './reportWebVitals';
import Mission from './Components/Mission.jsx'
import FindingHelp from './Components/FindingHelp.jsx'
import FeelGood from './Components/FeelGood.jsx'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children:
      [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/mission",
          element: <Mission/>
        },{
          path: "/help",
          element: <FindingHelp/>
        },
        {
          path: "/feelGood",
          element: <FeelGood/>
        },
        {
          path: "/quiz",
          element: <Quiz/>
        }
      ]
    
  },
  
]);



createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)





reportWebVitals();
