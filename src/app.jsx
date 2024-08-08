import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Product from './Components/Product/Product'
import Category from './Components/Category/Category'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Category/>
      <Product/>
      <Footer/>
    </>
  )
}
  