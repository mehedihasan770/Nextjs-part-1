"use client";
import { AuthContext } from '@/Auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

const Page = () => {
    const {user, loading} = useContext(AuthContext)
    const router = useRouter()
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        if(!loading){
        if (!user) {
            router.replace("/auth/signin");
        }
        else{
            setTimeout(() => setChecking(false), 0)
      };
    }
  }, [user,loading, router]);

  if (checking) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <MoonLoader color="blue"></MoonLoader>
      </div>
    );
  }
    return (
        <div>
            add products
        </div>
    );
};

export default Page;