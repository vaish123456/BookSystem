/*import React from 'react'

function Signup() {
  return (
    <div>Signup</div>
  )
}

export default Signup
*/
// Signup.jsx



//2.
{/*import React from 'react';

export const Signup = () => {
  





  
  return (
    <>
    <div>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal }
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleDialogClose}
            >
              ✕
            </button>
          </form>
          
          <h3 className="font-bold text-lg dark:text-white">Login</h3>
          <div className="mt-4 space-y-3">
            <span>Email</span>
            <br/>
            <input type="email" placeholder="enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"/>

          </div>
          <div className="mt-4 space-y-3">
            <span>Password</span>
            <br/>
            <input type="text" placeholder="enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"/>

          </div>
          {/*Button}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1">Login</button>
            <p>Not Registered?{""} <Link Link to="/signup" className="underline text-blue-400 cursor-pointer">SignUp
            </Link>{" "}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
    </>
  );
};
*/}


//confirm

{/*import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  // Define dialogRef using useRef
  const dialogRef = useRef(null);

  // Function to open the dialog
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // Function to close the dialog
  const handleDialogClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <div>
        <button onClick={openDialog} className=" bg-pink-500 text-white rounded-md px-3 py-1">Sign Up</button>

        <dialog ref={dialogRef} id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal *}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleDialogClose}
              >
                ✕
              </button>
            </form>
            
            <h3 className="font-bold text-lg dark:text-white">SignUp</h3>
            <div className="mt-4 space-y-3">
              <span>Email</span>
              <br/>
              <input type="email" placeholder="enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"/>
            </div>
            <div className="mt-4 space-y-3">
              <span>Password</span>
              <br/>
              <input type="password" placeholder="enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"/>
            </div>
            {/*Button}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1">SignUp</button>
              <p>Already Registered? <Link to="/" className="underline text-blue-400 cursor-pointer "onClick={()=>
                document.getElementById("my_modal_3").showModal()
              }>Login{" "}</Link>  
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};
*/}



import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const dialogRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to open the dialog
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // Function to close the dialog
  const handleDialogClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate email and password
    if (!email) {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    } else {
      setPasswordError('');
    }

    // Process form submission here (save to database, etc.)
    console.log('Email:', email);
    console.log('Password:', password);

    // Close the dialog or perform any other action
    handleDialogClose();
  };

  return (
    <>
      <div>
        <button onClick={openDialog} className="bg-pink-500 text-white rounded-md px-3 py-1">
          Sign Up
        </button>

        <dialog ref={dialogRef} id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit}>
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleDialogClose}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg dark:text-white">Sign Up</h3>
              <div className="mt-4 space-y-3">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
              <div className="mt-4 space-y-3">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="text-red-500">{passwordError}</p>}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1">
                  Sign Up
                </button>
                <p>
                  Already Registered?{' '}
                  <Link to="/" className="underline text-blue-400 cursor-pointer">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};
