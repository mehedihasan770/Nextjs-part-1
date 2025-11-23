"use client";
import { AuthContext } from "@/Auth/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";

const Navbar = () => {
    const { user, SignOut, loading } = useContext(AuthContext)
    const links = <>
        <li><Link className="font-bold" href='/'>Home</Link></li>
        <li><Link className="font-bold" href='/all_products'>All Products</Link></li>
        {user && <>
          <li><Link className="font-bold" href='/add_product'>Add Products</Link></li>
          <li><Link className="font-bold" href='/manage_products'>Manage Products</Link></li>
        </>}
        
    </>
    const handleSignOut = () => {
      SignOut()
      .then(() => toast.success('SignOut Successful'))
      .catch(err => toast.error(err.message))
    }
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl font-bold">Shop 3D</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            loading ? <MoonLoader size={20} color="blue"></MoonLoader> : user ? (<button onClick={handleSignOut} className="btn btn-outline btn-secondary">SignOut</button>) : 
            (<div className=" flex space-x-3">
              <Link href="/auth/signin" className="btn btn-outline btn-primary">Signin</Link>
              <Link href="/auth/signup" className="btn btn-outline btn-secondary">Signup</Link>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
