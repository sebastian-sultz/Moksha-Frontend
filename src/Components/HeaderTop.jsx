
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { useUser } from '../UserContext';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo2.png'
import { IoMdCall } from "react-icons/io";
const HeaderTop = () => {

 const { loggedInUser, setLoggedInUser } = useUser();

 const navigate = useNavigate();

 const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setLoggedInUser(''); 
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

 

    return (
      <div className='flex justify-between bg-prim h-auto px-2 md:px-8'>
    
      <div className='flex items-center'>
        <Link to={"/home"} className='flex items-center'>
          <img className="h-12 md:h-14 p-1" src={Logo} alt="Logo" />
          <p className='font-libre text-xl ml-2 mt-2 hidden md:block'>Moksha</p>
        </Link>
      </div>

      <div className='flex items-center space-x-1 md:space-x-3'>
      
        <Link to={"/help"}>
          <button className='flex items-center bg-bgcolor rounded-2xl md:rounded-3xl py-1 px-2 md:px-4 text-prim md:py-2'>
            <IoMdCall className='h-6 w-auto' />
            <span className='pl-1 hidden md:block text-sm md:text-base'>Need Help</span>
          </button>
        </Link>

     
        <button className='flex items-center bg-bgcolor rounded-2xl md:rounded-3xl py-1 px-2 md:px-4 text-prim md:py-2'>
          <FaUser className='h-6 w-auto' />
          <span className='pl-1 text-sm md:text-base'>
            {loggedInUser ? (
              <button onClick={handleLogout}>Logout</button> 
            ) : (
              <button onClick={() => navigate('/login')}>Login</button> 
            )}
          </span>
        </button>
      </div>
    </div>
    )
}
export default HeaderTop