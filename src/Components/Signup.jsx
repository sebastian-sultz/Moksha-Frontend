import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { BASE_URL } from '../constants/constants';
function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `${BASE_URL}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
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
        <h1 className="text-center font-libre text- text-3xl font-medium mb-8">User Signup</h1>
       
               <form onSubmit={handleSignup} className="grid gap-7 ">
                 <div className="relative grid grid-cols-1 gap-2 border-b-2 border-prim">
                   <div className="flex items-center">
                     <i className="ri-user-line text-gray-800 text-xl"></i>
                     <input
                       onChange={handleChange}
                       type="text"
                       name="name"
                       autoFocus
                       placeholder="Enter Name..."
                       value={signupInfo.name}
                       className="w-full p-2 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none focus:placeholder-transparent"
       
                       required
                     />
                   </div>
                 
                 </div>
                 <div className="relative grid grid-cols-1 gap-2 border-b-2 border-prim">
                   <div className="flex items-center">
                     <i className="ri-mail-line text-gray-800 text-xl"></i>
                     <input
                       onChange={handleChange}
                       type="email"
                       name="email"
                       placeholder="Enter Email..."
                       value={signupInfo.email}
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
                       value={signupInfo.password}
                     className="w-full p-2 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none focus:placeholder-transparent"
       
                       required
                     />
                     <i
                       onClick={togglePasswordVisibility}
                       className={`ri-eye-${showPassword ? "line" : "off-line"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 cursor-pointer text-xl`}
                     ></i>
                   </div>
                   
                 </div>
       
           
                 
                 <button
                   type="submit"
                   className="w-full p-4 text-gray-800 bg-prim rounded-lg font-medium hover:bg-sec transition duration-300 "
                 >
                  Signup
                 </button>
       
                 <p className="text-center text-sm text-gray-800">
                   Already have an account?{" "}
                   <Link to="/login" className="text-gray-800 font-medium hover:underline">
                     Login
                   </Link>
                 </p>
               </form>
             </div>
        
              <ToastContainer className="mt-12" />
            </div>
        </>

    )
}

export default Signup
