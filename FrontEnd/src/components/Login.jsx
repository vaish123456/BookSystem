
{/*import React from 'react';

export default function Login({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </div>
  );
}
*/}
2.
{/*
import React from 'react';

export default function Login({ closeModal }) {
  return (
    <dialog id="my_modal_3" className="modal" open>
      <div className="modal-box">
        <form>
          <h3 className="font-bold text-lg">Login</h3>
          <p className="py-4">Sign in to your account</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Password" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="modal-action">
          <button onClick={closeModal} className="btn">Close</button>
        </div>
      </div>
  </dialog>
  
  );
}
*/}
//3.
{/*import React from 'react';

export default function Login({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal">
        <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>×</button>
        <div className="modal-box p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Login</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={closeModal}
              >
                Login
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
*/}
//2.
{/*import React, { useRef } from 'react';

export default function Login({ closeModal }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    // Handle form submission logic (e.g., API call, validation)
    console.log('Username:', username);
    console.log('Password:', password);
    // Close modal after form submission
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal">
        <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>×</button>
        <div className="modal-box p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                name="username"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
*/}


/*import React, { useRef } from 'react';

export default function Login({ closeModal }) {
  const dialogRef = useRef(null);

  const handleDialogClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    closeModal();
  };

  const handleDialogOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  React.useEffect(() => {
    handleDialogOpen();
  }, []);

  return (
    <div>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        < div className="modal-box">
          <form method="dialog">
            //{/* if there is a button in form, it will close the modal}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleDialogClose}
            >
              ✕
            </button>
          </form>
          
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4 ">Press ESC key or click on ✕ button to close</p>
          
        </div>
      </dialog>
    </div>
  );
}
*/

//confirm:-


{ /*import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
//import { useForm, SubmitHandler } from "react-hook-form"

export default function Login({ closeModal }) {
    


  const dialogRef = useRef(null);

  const handleDialogClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    closeModal();
  };

  const handleDialogOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  React.useEffect(() => {
    handleDialogOpen();
  }, []);

  return (
    <div>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form   method="dialog">
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
            <input type="email" placeholder="enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
            />

          </div>
          <div className="mt-4 space-y-3">
            <span>Password</span>
            <br/>
            <input type="text" placeholder="enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"/>

          </div>
          {/*Button}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1">Login</button>
            <p>Not Registered?{""} <Link  to="/signup" className="underline text-blue-400 cursor-pointer">SignUp
            </Link>{" "}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
*/}




import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login({ closeModal }) {
  const dialogRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDialogClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    closeModal();
  };

  const handleDialogOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  React.useEffect(() => {
    handleDialogOpen();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the email and password
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add further logic here, like sending the data to a server
  };

  return (
    <div>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleDialogClose}
            >
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg dark:text-white">Login</h3>
          <form onSubmit={handleSubmit}>
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
            </div>
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1">
                Login
              </button>
              <p>
                Not Registered? <Link to="/signup" className="underline text-blue-400 cursor-pointer">SignUp</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

