"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

const Section3 = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {setLoading(true)}, 0)
        setTimeout(() => {
            axios.get('https://my-next-js-server.vercel.app/product')
            .then(res => {
                setProduct(res.data)
                setLoading(false)
            })
        })
    }, [])

    const sorted = product.sort((a, b) => new Date(b.create_at) - new Date(a.create_at)).slice(0, 6);
    return (
        <div>
            {loading ? 
            <div className="flex justify-center items-center mt-10">
                <MoonLoader color="blue"></MoonLoader>
            </div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {sorted.map(p => 
                <div key={p?._id} className="duration-500 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow hover:-translate-y-1">
                    <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
                        <img src={p?.product_image} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">{p?.product_title}</h3>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed" style={{display: "-webkit-box",WebkitLineClamp: 3,WebkitBoxOrient: "vertical",overflow: "hidden",}}>{p?.product_description}</p>

                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <div className="text-xl font-bold text-gray-900">$ {p?.product_price}</div>
                            </div>
                            <Link href={`/details/${p?._id}`} className="btn bg-pink-500 hover:bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:-translate-y-0.5">Details</Link>
                        </div>
                    </div>
                </div>)}
                <Link href={'/all_products'} className='btn btn-primary mt-5 w-fit'>Sey All Product</Link>
            </div>}
        </div>
    );
};

export default Section3;