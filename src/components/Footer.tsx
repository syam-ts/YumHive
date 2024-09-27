import React from 'react'
import { Link } from 'react-router-dom'

 const Footer = () => {
   return (
    

<footer className="bg-white rounded-lg shadow :bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
       
                <Link to="/">
                <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-98-580x386.jpg" className="h-12 w-20" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">YumHive</span>
               
            </a>
                </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 :text-gray-400">
                <li>
                    <Link to="/about">
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </Link>
                    
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                <Link to="/contact">
                <a href="#" className="hover:underline">Contact</a>
                    </Link>
                   
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto :border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center :text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">YumHive</a>. All Rights Reserved.</span>
    </div>
</footer>


   ) 
}

 export default Footer