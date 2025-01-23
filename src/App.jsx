

import Header from "./Components/Header"
import { Outlet } from 'react-router-dom'

import './App.css';
import { UserProvider } from './UserContext';

function App() {

  return (


    <div className='bg-bgcolor'>
      <div className="App">
        <UserProvider>

          <Header />
          <div className="text-gray-500 bg-bgcolor max-w-md mx-auto px-10 overflow-hidden md:max-w-4xl lg:max-w-6xl">
            <Outlet />
          </div>
        </UserProvider>
      </div>

    </div>
  )
}

export default App
