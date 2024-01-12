import {React,useState} from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import styles from "../../styles/styles";
import {Link} from "react-router-dom";
import {FaRegUser,FaRegEnvelope} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {MdLockOutline} from "react-icons/md";


const Signup = () => {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
    
      return (
        <div className="flex flex-col m items-center justify-center min-h-screen py-2 bg-gray-100">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        
        <div className="bg-white rounded-2xl shadow-2xl flex w-full md:w-2/3 max-w-4xl justify-center">

        <div className="w-2/5 bg-blue-950 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12 hidden md:block">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">To keep connected with us please login with your personal info</p>
          <Link to="/login" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-950">
            <p>Login</p>
            </Link>
            </div>

            <div className="w-3/5 p-5">
           <div className="py-10">
            <h2 className="text-3xl font-bold Itext-green-500 mb-2">
              Create Account
            </h2>
            <div className="border-2 w-10 border-blue-950 inline-block mb-2">
            </div>
            <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FcGoogle className="text-sm" style={{ fontSize: '20px' }} />
              </a>
            </div> 
            <p className='text-gray-400 my-3'>or use email account</p>
            <div className='flex flex-col items-center'>
            <div className=' flex items-center bg-gray-100 w-80 p-2 mb-4'>
                <FaRegUser className='mr-2 text-gray-500' />
                <input
                type='name'
                name='name'
                placeholder='Full Name'
                autoComplete='name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='bg-gray-100 w-80 text-sm flex-1 outline-none'
                />        
              </div>
              <div className=' flex items-center bg-gray-100 w-80 p-2 mb-4'>
                <FaRegEnvelope className='mr-2 text-gray-500' />
                <input
                type='email'
                name='email'
                placeholder='Email Address'
                autoComplete='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-gray-100 w-80 text-sm flex-1 outline-none'
                />        
              </div>
              <div className=' flex items-center bg-gray-100 w-80 p-2 mb-4 relative'>
                <MdLockOutline className='mr-2 text-gray-500' />
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100 flex-1 pr-8 text-sm outline-none"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-3 cursor-pointer text-gray-400"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 cursor-pointer text-gray-400"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <div className={`${styles.noramlFlex} justify-between font-semibold w-80 mb-5`}>
              <label className={`${styles.noramlFlex} text-xs`}>
                <input type="checkbox" name="remember"
                className="mr-1 text-sm text-gray-900"/> Remember me</label>
              </div>
              <button className='border-2 border-blue-950 rounded-full px-12 py-2 inline-block font-semibold text-blue-950 hover:bg-blue-950 hover:text-white'>
                Sign Up
              </button>
              </div>
            </div>
          </div>

        </div>
        </main>
        </div>
        
      )
    }
    
    export default Signup;
