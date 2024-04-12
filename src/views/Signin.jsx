import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Navigate, Outlet } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
//import {toast} from "react-toastify";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Wrong username or password");
    }
  }
  return (
    
    <section className="relative bg-gray-300 ">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="">
        <a
          href="#"
          className=" flex text-2xl items-center mb-6 font-bold text-blue-900"
        >
          <img
            alt="logo"
            src="/src/assets/zigtunes.png"
            className="w-20 h-20"
          />
          
        </a>
        </div>
        <div className="bg-white rounded-lg shadow dark:border md:mt-0 sm:max-x-md xl:p-0 dark:bg-gray-700 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold laeding-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              action=""
              className="space-y-4 md:space-y-6"
              onSubmit={onSubmit}
            >
             <div>
              <label className="block mb-2 text-sm text-gray-900 font-medium dark:text-white transition ease-in-out">
               Your email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email address"
              />
             </div>
              <div >
              <label className="block mb-2 text-sm text-gray-900 font-medium dark:text-white transition ease-in-out">
               Your password
              </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                  {...showPassword ? (
                    <AiFillEye
                      className="text-white right-3 top-3 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className=" text-white right-3 top-3 text-xl cursor-pointer"
                      onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                  )}
                />
              
              </div>
              <div className=" flex justify-between  whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-2 text-white font-semibold mr-5">
                  {" "}
                  Don't have account?
                  <Link
                    to="/sign-up"
                    className="text-blue-500 hover:text-green-500
                transition duration-200 ease-in-out
                ml-8
                "
                  >
                    Register
                  </Link>
                </p>
              
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white px-7 py-3 text-sm font-bold uppercase rounded shadow-md hover:bg-green-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              >
                Sign In
              </button>
              <div className="my-2 flex items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300">
                <p className="text-center text-white font-semibold mx-4">OR</p>
            
              </div>
              <button
                type=""
                className="w-full bg-green-600 text-white px-7 py-3 text-sm font-bold uppercase rounded shadow-md hover:bg-blue-900 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              >
                Continue with Google
              </button>
            </form>
          </div>
        </div>
        {/* */}
        
      </div>
      <Outlet/>
    </section>
  );
}
