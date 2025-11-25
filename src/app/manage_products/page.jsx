"use client";
import React from 'react';
import { AuthContext } from '@/Auth/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { FaEdit } from 'react-icons/fa';
import { RiTimelineView } from "react-icons/ri";
import axios from 'axios';
import Swal from 'sweetalert2';
import Link from 'next/link';

const Page = () => {
    const {user, loading} = useContext(AuthContext)
    const router = useRouter()
    const [checking, setChecking] = useState(true);
    const [ownerProduct, setOwnerProduct] = useState([])
    const [reLoad, setReLoad] = useState(true)
    const [loading1, setLoading1] = useState(false)

    useEffect(() => {
      setTimeout(() => {setLoading1(true)}, 0)
      setTimeout(() => {
        if(user){
          axios.get(`https://my-next-js-server.vercel.app/product?email=${user?.email}`)
          .then(res => {
            setOwnerProduct(res.data)
            setLoading1(false)
          })
        }
      }, 300)
    }, [user, reLoad])

    const handleDelete = id => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this product!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
      if (result.isConfirmed) {
          axios.delete(`https://my-next-js-server.vercel.app/delete_product/${id}`)
          .then(res => {
          if(res.data.deletedCount){
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
              icon: "success"
            });
            setReLoad(!reLoad)
          }
        })
      }
      });
    }

    useEffect(() => {
        if(!loading){
        if (!user) {
            router.push("/auth/signin");
        }
        else{
            setTimeout(() => setChecking(false), 0)
        };
        }
  }, [user, router, loading]);

  if (checking) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <MoonLoader color="blue"></MoonLoader>
      </div>
    );
  }
    return (
      <div>
        { loading1 ? 
          <div className="flex justify-center items-center min-h-screen">
            <MoonLoader color="blue"></MoonLoader>
          </div> :
          ownerProduct.length === 0 ? 
          <div className="rounded-2xl flex items-center min-h-screen mt-5 mb-5 justify-center h-64 text-gray-500 text-xl font-semibold">
            No data available
          </div> :
        
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {ownerProduct.map(p => 
            <div key={p?._id} className="w-full rounded-2xl shadow-md border border-pink-200 overflow-hidden hover:shadow-lg">
  <div className="flex flex-col md:flex-row items-stretch">
    <div className="md:w-40 w-full h-44 md:h-auto flex">
      <img src={p?.product_image} alt="" />
    </div>
    <div className="flex-1 p-4 flex flex-col justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{p?.product_title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          Created: <span className="font-medium text-gray-700">{p?.create_at}</span>
        </p>
        <h3 className="text-lg font-semibold text-gray-800">$ {p?.product_price}</h3>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Link href={`/details/${p?._id}`} className="flex items-center gap-2 rounded-lg border-2 border-green-500 btn bg-white text-green-500 hover:bg-green-500 hover:text-white">
          <span className="fa-solid fa-eye"><RiTimelineView /></span>
          <span className="text-sm">View</span>
        </Link>

        <button onClick={() => handleDelete(p?._id)} className="flex items-center gap-2 rounded-lg border-2 border-red-500 btn bg-white text-red-500 hover:bg-red-500 hover:text-white">
          <i className="fa-solid fa-trash"></i>
          <span className="text-sm">Delete</span>
        </button>
      </div>
    </div>
  </div>
</div>)}

        </div>}
        </div>
    );
};

export default Page;