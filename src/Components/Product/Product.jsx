import React, { useState, useEffect } from 'react'
import axios from 'axios'
import cart from '../img/cart.png'

const API_URL = "https://dummyjson.com"


const Product = () => {
    const [offset, setOffset] = useState(4)
    console.log("Header render inside");

    const handleClick = () => {
        setOffset((prev) => prev + 1)
    }

    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios
            .get(`${API_URL}/products`)
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))

    }, [])

    console.log(products);
    const productItem = products?.map((product) => (
        <div key={product.id} className='hover:cursor-pointer  group relative overflow-hidden md:w-[48%] lg:w-[32%] mt-7 p-4 border-zinc-200	 flex flex-col items-center'>
            <img src={product.images[0]} className='w-full h-[300px] object-contain' alt="" />
            <p className='text-red-500 font-[500]'>{product.discountPercentage} %</p>
            <h5 className='line-clamp-1 w-[48%] text-center'>{product.description}</h5>
            <h3 className='text-[21px] font-[500] text-center'>{product.title}</h3>
            <p className='font-bold'>{product.dimensions.width} x {product.dimensions.height} cm</p>
            <p className='text-[yellowgreen] font-bold mb-20'>{product.price} $</p>
            <div className='flex gap-[140px] group-hover:bottom-8 items-center absolute -bottom-16 justify-between duration-300'>
                <div className='flex gap-[15px] '>
                    <button disabled={offset <= 1} onClick={() => setOffset(p => p - 1)} className='bg-[rgb(245,245,245)] p-[12px] py-[3px]'>-</button>
                    <p>{offset}</p>
                    <button onClick={handleClick} className='bg-[rgb(245,245,245)] p-[12px] py-[3px]'>+</button>
                </div>
                <div className='flex'>
                    <img src={cart} alt="" />
                </div>
            </div>
        </div>

    ))

    return (
        <>
            <div className='mt-16'>
                <div className="container">
                    <div className='flex  items-end mb-8'>
                        <h2 className='font-extrabold text-4xl'>Товары в наличии</h2>
                        <p className=''>Все категории -</p>
                    </div>
                    <div className='flex  justify-between flex-wrap'>
                        {productItem}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product