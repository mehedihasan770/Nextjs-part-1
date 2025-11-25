"use client";
import { AuthContext } from '@/Auth/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import Swal from 'sweetalert2';

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

  const handleAddProduct = e => {
    e.preventDefault();
    const product_image = e.target.product_image.value;
    const product_title = e.target.product_title.value;
    const product_description = e.target.product_description.value;
    const product_price = e.target.product_price.value;
    const owner_email = user?.email;
    const create_at = new Date();
    const newProduct = {product_description, product_image, product_price, product_title, owner_email, create_at}
    axios.post('http://localhost:5000/product', newProduct)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          title: "Product Added Successful",
          icon: "success",
          draggable: true
      });
      }
      e.target.reset()
    })
  }


    return (
      <div>
      <div className="min-h-screen flex items-center justify-center p-4">
  <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-pink-200">
    
    <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
      Add Product ✨
    </h2>

    <form onSubmit={handleAddProduct} className="flex flex-col gap-4">

      <input
        type="text"
        placeholder="Image URL"
        name='product_image'
        required
        className="p-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <input
        type="text"
        placeholder="Product Title"
        name='product_title'
        required
        className="p-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <textarea
        rows={3}
        placeholder="Product description..."
        name='product_description'
        required
        className="p-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
      ></textarea>

      <input
        type="number"
        name='product_price'
        required
        placeholder="00.00"
        className="p-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <button
        type="submit"
        className="w-full btn p-3 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition"
      >
        Add Product
      </button>
    </form>
  </div>
</div>

        </div>
    );
};

export default Page;