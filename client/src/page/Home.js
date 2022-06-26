import React from 'react'
import { Cart } from '../components/Cart'

export const Home = () => {
  return (
    <>
     <div className='container-fluid m-4'>

        <div className='row input-group flex-wrap gap-3 justify-content-center align-items-center m-auto'>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
        </div>
    </div>
    </>
   
  )
}
