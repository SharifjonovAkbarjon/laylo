import { render } from 'preact';
import React, { useState } from 'react'
import logo from '../img/logo.png'
import hero from '../img/hero.png'

console.log("Header render outside");


const Header = () => {
  const [offset, setOffset] = useState(1) // return array [value, function]
  console.log("Header render inside");

  const handleClick = () => {
    setOffset((prev) => prev + 1)
  }
  return (
    <>
      <div className="bg-slate-100	 py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className=''>
              <img src={logo} alt="" />
            </div>
            <div className=''>
              <ul className='flex gap-8 cursor-pointer '>
                <li className=' hover:text-yellow-600	'>Каталог</li>
                <li className=' hover:text-yellow-600	'>Доставка</li>
                <li className=' hover:text-yellow-600	'>Условия</li>
                <li className=' hover:text-yellow-600	'>Контакты</li>
              </ul>
            </div>
            <div className='flex flex-col items-end'>
              <div className='flex gap-2'>
                <p className='text-xl	s'>+ 375 736 463 64 72</p>
                /
                <p className='text-xl'>+ 375 736 463 64 72</p>
              </div>
              <div>
                <span className='text-sm	text-slate-300'>Заказать звонок</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-32 '>
        <div className="container">
          <div className='flex items-center justify-center gap-20	'>
            <div className='flex flex-col gap-8 items-start'>
              <h2 className='text-5xl font-bold w-4/6'>Мебель на любой вкус!</h2>
              <ul className='flex flex-col list-disc	text-lg font-normal'>
                <li className='hover:text-yellow-500 cursor-pointer'>Худи, чашки для горячего чая и термосы </li>
                <li className='hover:text-yellow-500 cursor-pointer	'>Eлочные игрушки, брелочки</li>
                <li className='hover:text-yellow-500 cursor-pointer'>Начало списка вещей, которые можно </li>
              </ul>
              <button className='hover:bg-[yellowgreen] py-2.5 px-20	bg-amber-500 rounded-3xl text-white	'>Перейти в каталог</button>
              <p className='hover:text-[yellowgreen] cursor-pointer items-center text-center w-3/6 text-amber-500'>Внести список артикулов</p>
            </div>
            <div>
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
