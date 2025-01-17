import React from 'react'
import banner from "../assets/book_2.png";

export default function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl containermx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mx-10 ">
    
        <div className="w-full md:order-2 md:w-1/2 md:mt-32 mt-12">
            <div className="space-y-12 ">
            <h1 className="text-4xl font-bold mb-20 mt-0">
                Hello! welcome here to learn something {" "}<span className="text-purple-500">new everyday!</span>
                
            </h1>
            <p className="text-1xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore molestiae facere nobis ipsa ipsam labore ut fuga numquam. Voluptate iste nesciunt ut eaque id ea, alias ipsam optio placeat eligendi?
            </p>
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Enter your Email to login" />

</label>

            </div>
            <button className="btn btn-secondary mt-7 mb-4">Secondary</button>
            

        </div>
        <div className="w-full md:w-1/2 order-1 ">Right</div>
        <img src={banner} className="w-90 h-80 mt-20 mb-10"></img>
    </div>
    </>
  )
}
