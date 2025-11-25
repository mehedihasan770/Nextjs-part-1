"use client";
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

const Page = () => {
    const params = useParams();
    const { id } = params;
    const [oneProduct, setOneProduct] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {setLoading(true)}, 0)
        const timer = setTimeout(async () => {
            const res = await axios.get(`https://my-next-js-server.vercel.app/product?id=${id}`);
            setOneProduct(res.data);
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [id]);
    
    return (
        <div>
            {loading ? <div className="flex justify-center items-center min-h-screen">
                <MoonLoader color="blue"></MoonLoader>
            </div> :
            <div className="max-w-4xl mt-10 mx-auto p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <Link href='/all_products' className="mb-4 btn px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">&larr; Back to All 3D Models</Link>

                <div className="w-[85%] h-full rounded-xl mb-6">
                    <img src={oneProduct?.product_image} alt='' className="w-[85%] h-full object-cover rounded-2xl" />
                </div>

                <h1 className="text-3xl font-bold mb-4">{oneProduct?.product_title}</h1>

                <p className="text-gray-700 mb-4 text-justify">{oneProduct?.product_description}</p>

                <div className="flex items-center justify-between text-gray-800 font-semibold">
                    <span>Price: ${oneProduct?.product_price}</span>
                    <span>Date: {oneProduct?.create_at}</span>
                </div>
            </div>}
        </div>
    );
};

export default Page;