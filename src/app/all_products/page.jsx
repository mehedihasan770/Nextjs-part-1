"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

const Page = () => {
    const [product, setProduct] = useState([])
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:5000/product')
        .then(res => {
            setProduct(res.data)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {setLoading(true)}, 0)
        const timer = setTimeout(async () => {
            const res = await axios.get(`http://localhost:5000/products/search?title=${query}`);
            setProduct(res.data);
            setLoading(false)
        }, 300);
        return () => clearTimeout(timer);
    }, [query]);

    return (
        <div>
            <div className="mt-10 text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-slate-900">Shop 3D — All 3D Models</h1>
                <p className="text-center md:text-lg text-slate-600 mt-3">High-quality 3D models for any creative project — preview and buy easily.</p>
            </div>
            <form className="flex max-w-md mx-auto mt-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    name="name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                />
                <button
                    type="button"
                    className="px-4 py-2 bg-pink-500 text-white rounded-r-lg">
                    Search
                </button>
            </form>
            {loading ? 
            <div className="flex justify-center items-center min-h-screen">
                <MoonLoader color="blue"></MoonLoader>
            </div> : product.length === 0 ?
            <div className="rounded-2xl flex items-center min-h-screen mt-5 mb-5 justify-center text-gray-500 text-xl font-semibold">
                No Product available
            </div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {product.map(p => 
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
            </div>}
        </div>
    );
};

export default Page;