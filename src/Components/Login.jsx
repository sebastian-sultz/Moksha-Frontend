import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { useUser } from '../UserContext';
import { BASE_URL } from '../constants/constants';

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const { setLoggedInUser } = useUser(); //new


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = `${BASE_URL}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setLoggedInUser(name);
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    return (
<>
<div className="relative py-16 px-3 bg-bgcolor flex justify-center items-center">
      <div className="absolute inset-0 bg-bgcolor opacity-50"></div>
      
      <div className="relative  bg-bgcolor bg-opacity-60 border-2 border-prim p-6 rounded-xl backdrop-blur-md w-full sm:w-96 md:p-10">
        <h1 className="text-center font-libre text- text-3xl font-medium mb-8">User Login</h1>

        <form onSubmit={handleLogin} className="grid gap-7 ">
          <div className="relative grid grid-cols-1 gap-2 border-b-2 border-prim">
            <div className="flex items-center">
              <i className="ri-mail-line text-gray-800 text-xl"></i>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter Email..."
                value={loginInfo.email}
                className="w-full p-2 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none focus:placeholder-transparent"

                required
              />
            </div>
          
          </div>

          <div className="relative grid grid-cols-1 gap-2 border-b-2 border-prim">
            <div className="flex items-center">
              <i className="ri-lock-2-line text-gray-800 text-xl"></i>
              <input
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password..."
                value={loginInfo.password}
              className="w-full p-2 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none focus:placeholder-transparent"

                required
              />
              <i
                onClick={togglePasswordVisibility}
                className={`ri-eye-${showPassword ? "line" : "off-line"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 cursor-pointer text-xl`}
              ></i>
            </div>
            
          </div>

          <div className="flex justify-between items-center text-sm mb-6">
            <div className="flex items-center">
              <input type="checkbox" className="w-3 h-3 text-gray-800 border-prim" id="login-check" />
              <label htmlFor="login-check" className="text-gray-800 ml-2">Remember me</label>
            </div>
            <a href="#" className="text-gray-800 hover:underline">Forgot Password?</a>
          </div>

      
          <button
            type="submit"
            className="w-full p-4 text-gray-800 bg-prim rounded-lg font-medium hover:bg-sec transition duration-300 "
          >
            Login
          </button>

          
          <p className="text-center text-sm text-gray-800">
            Don't have an account?{" "}
            <Link to="/signup" className="text-gray-800 font-medium hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>

     
      <ToastContainer className="mt-12" />
    </div>

        </>
    )
}

export default Login

