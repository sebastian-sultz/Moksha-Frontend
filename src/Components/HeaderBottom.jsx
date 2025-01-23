import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBottom = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-sec border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-3">
        <div className="flex items-center space-x-3 md:w-4/12 rtl:space-x-reverse">
          <span className="self-center text-sm text-center md:mx-5 md:text-base md:text-left lg:text-lg lg:text-left whitespace-nowrap dark:text-white">
            Your Mental Health Assistant
          </span>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-bgcolor focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

       
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-7/12 md:mr-6 md:flex-row md:space-x-8 rtl:space-x-reverse mt-2 md:mt-0 bg-sec dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          id="navbar-default"
        >
          <ul className=" flex flex-col p-2 md:justify-between md:p-0 border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu} 
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-sm md:text-base text-gray-700 bg-bgcolor rounded md:bg-transparent md:text-bgcolor md:p-0 dark:text-white md:dark:text-blue-500'
                    : 'block py-2 px-3 text-sm md:text-base text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-bgcolor md:p-0 dark:text-white md:dark:hover:text-bgcolor dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mission"
                onClick={closeMenu} 
                className={({ isActive }) =>
                  isActive
                ? 'block py-2 px-3 text-sm md:text-base text-gray-700 bg-bgcolor rounded md:bg-transparent md:text-bgcolor md:p-0 dark:text-white md:dark:text-blue-500'
                : 'block py-2 px-3 text-sm md:text-base text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-bgcolor md:p-0 dark:text-white md:dark:hover:text-bgcolor dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            }
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                onClick={closeMenu} 
                className={({ isActive }) =>
                  isActive
                ? 'block py-2 px-3 text-sm md:text-base text-gray-700 bg-bgcolor rounded md:bg-transparent md:text-bgcolor md:p-0 dark:text-white md:dark:text-blue-500'
                : 'block py-2 px-3 text-sm md:text-base text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-bgcolor md:p-0 dark:text-white md:dark:hover:text-bgcolor dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            }
              >
                Finding Help
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feelGood"
                onClick={closeMenu} 
                className={({ isActive }) =>
                    isActive
                ? 'block py-2 px-3 text-sm md:text-base text-gray-700 bg-bgcolor rounded md:bg-transparent md:text-bgcolor md:p-0 dark:text-white md:dark:text-blue-500'
                : 'block py-2 px-3 text-sm md:text-base text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:hover:text-bgcolor md:p-0 dark:text-white md:dark:hover:text-bgcolor dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
            }
              >
                Feel Good
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBottom;
