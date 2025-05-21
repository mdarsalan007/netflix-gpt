import  { useRef, useState } from 'react'
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import ValidateSigninInfo from '../utils/ValidateSigninInfo';
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import backgroundImage from '../assets/main-background.jpg';

import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { profilePicture } from '../utils/Constant';



const Login = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [signin, setsignin] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const dispatch = useDispatch();


  const handleButtonClick = () => {
    const validationError = ValidateSigninInfo(email.current.value, password.current.value);
    seterrorMessage(validationError);
    if (validationError) return;

    if (!signin) {
      handleSignUp();
    } else {
      handleSignIn();
    }
  };




  const handleSignUp = () => {
    const nameValue = username.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (!emailValue || !passwordValue) {
      seterrorMessage("Please fill in both fields.");
      return;
    }

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        // Optionally: Redirect or show success message

        updateProfile(user, {
          displayName: nameValue, photoURL: profilePicture
            }).then(() => {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser({ uid, email, displayName, photoURL }));
            }).catch((error) => {
                        // An error occurred
                        // ...
          });
      })
      .catch((error) => {
        console.error(error.code, error.message);
        seterrorMessage(error.message);
      });
  };


  const handleSignIn = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (!emailValue || !passwordValue) {
      seterrorMessage("Please fill in both fields.");
      return;
    }

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.error(error.code, error.message);
        seterrorMessage(error.message);
      });
  };




  const toggleSignInForm = () => {
    setsignin(!signin);
  }

  return (
    <div className=''>

      <Header />
      <div className=''>
        <img className='brightness-60  min-h-[1000px]' src = {backgroundImage} />
      </div>

      <div className=" absolute top-28 w-full  " >

        <form onSubmit={(e) => { e.preventDefault() }} className='mx-auto  w-4/12 bg-black/80 pt-10 rounded-sm'>
          <div className='mx-auto  w-3/4 '>
            <h1 className='text-white text-4xl font-bold mb-6'>{signin ? "Sign In" : "Sign up"}</h1>
            {!signin && <input ref={username} className=' text-white bg-gray-400/40 w-full mx-auto h-12 px-2 my-4 rounded-sm outline-1' type="text" placeholder='Enter your full name' />}
            <input ref={email} className=' text-white bg-gray-400/40 w-full mx-auto h-12 px-2 my-4 rounded-sm outline-1' type="text" placeholder='Email or mobile number' />
            <input ref={password} className=' text-white bg-gray-400/40 w-full mx-auto h-12 px-2 my-4 rounded-sm outline-1' type="password" placeholder='Password' />
            {/* error message */}
            {errorMessage && (
              <p className=' text-sm font-semibold rounded-sm px-2 bg-gray-50 text-[#ff0000]'>{errorMessage}</p>
            )}
            <button onClick={handleButtonClick} className='w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white h-10 rounded-sm font-medium my-4 cursor-pointer'> {signin ? "Sign In" : "Sign Up"}</button>
            <p className='text-white w-fit mx-auto'>OR</p>
            <button className='w-full bg-gray-400/40 hover:bg-gray-500/40 transition-colors duration-200 text-white h-10 rounded-sm font-medium mt-4 cursor-pointer my-4'>Use a Sign-in Code</button>
            <p className='text-white w-fit mx-auto hover:text-gray-400 transition-colors duration-100 '><Link className='underline'>Forgot password?</Link></p>
            <div className='my-4 flex gap-3 items-center'>
              <input type="checkbox" className="w-[18px] h-[18px] bg-black/80 accent-white rounded-sm  focus:ring-gray-400 cursor-pointer " />

              <label className='text-white'>Remember me</label>
            </div>

            <div>
              <div>
                {!signin ? <div>
                  <span className='text-gray-400'>Already a user ? </span>
                  <span><Link onClick={toggleSignInForm} className='font-semibold text-white hover:underline '>Sign in now.</Link></span>
                </div> : <div>
                  <span className='text-gray-400'>New to Netflix ? </span>
                  <span><Link onClick={toggleSignInForm} className='font-semibold text-white hover:underline '>Sign up now.</Link></span>
                </div>}
              </div>


            </div>

            <p className='text-gray-400 text-sm my-3'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>


            <div className="text-gray-400 text-[12px] leading-airy pb-6">
              {!showInfo ? (
                <button
                  onClick={() => setShowInfo(true)}
                  className="text-blue-500 underline cursor-pointer"
                >
                  Learn more.
                </button>
              ) : (
                <p>
                  The information collected by Google reCAPTCHA is subject to the Google <Link className='text-blue-800'>Privacy Policy</Link> and <Link className='text-blue-800'>Terms of Service</Link>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                </p>
              )}
            </div>

          </div>


        </form>
      </div>

      <div className='w-full bg-[#131313] pt-8 pl-8 text-gray-300'>
        <p className=' my-2'>
          Questions? Call 000-800-919-1743 (Toll-Free)
        </p>
        <div className='flex my-3'>
          <p className='w-1/4 my-3'><Link className='underline'>FAQ</Link></p>
          <p className='w-1/4 my-3'><Link className='underline'>Help Centre</Link></p>
          <p className='w-1/4 my-3'><Link className='underline'>Terms of Use</Link></p>
          <p className='w-1/4 my-3'><Link className='underline'>Privacy.</Link></p>
        </div>
        <div className='flex mt-3 pb-14'>
          <p className='w-1/4 mt-3'><Link className='underline'>Cookie Preferences</Link></p>
          <p className='w-1/4 mt-3'><Link className='underline'>Corporate Information</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Login;
