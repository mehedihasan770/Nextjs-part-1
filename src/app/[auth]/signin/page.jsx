"use client";
import { AuthContext } from '@/Auth/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';

const Page = () => {
    const { googleSignin, signInEP } = useContext(AuthContext)
    const router = useRouter()
    const [to, setTo] = useState(true)
    const handleEPSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        signInEP(email, pass)
        .then(() => {
            router.push('/');
            toast.success('SignIn Successful')
        })
        .catch(err => toast.error(err.message))
    }

    const handleGoogleSignin = () => {
        googleSignin()
        .then(() => {
            router.push('/');
            toast.success('SignIn Successful')
        })
        .catch(err => toast.error(err.message))
    }

    return (
<div>
<div className="min-h-screen flex items-center justify-center p-4">
<div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-pink-200">
<h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Signin your account ✨</h2>
<form onSubmit={handleEPSignIn} className="flex flex-col gap-4">
<input
type="email"
name='email'
required
placeholder="Email"
className="p-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
/>
<div className="relative">
<input
type={to ? 'password' : 'text'}
name='pass'
required
placeholder="Password"
className="p-3 w-full rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
/>
    <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setTo(!to)}>
        {to ? <FaEyeSlash size={20}/> : <FaRegEye size={20}/>}
    </span>
    
</div>
<button
type="submit"
className="btn w-full p-3 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition"
>
Sign in
</button>
<div className="flex items-center">
  <div className="fle grow h-px bg-pink-200"></div>
  <span className="px-3 text-pink-500 text-sm">OR</span>
  <div className="flex grow h-px bg-pink-200"></div>
</div>
<button
type="button"
onClick={handleGoogleSignin}
className="btn w-full p-3 rounded-xl"
>
<GrGoogle />Signin With Google
</button>
</form>
<p className="text-center text-sm text-pink-500 mt-4">Not have an account? <Link href="/auth/signup" className="text-pink-600 font-semibold">Sign up</Link></p>
</div>
</div>           
</div>
);
};

export default Page;