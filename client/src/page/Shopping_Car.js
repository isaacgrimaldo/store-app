import React from 'react'

import { Cart} from '../components/Cart';

export const ShoppingCar = () => {
  return (
    <div className='container-fluid m-auto my-4'>
        <div className='col justify-content-center align-items-center vh-100 '>
            <div className='col align-left-center'>
               <Cart/>
               <Cart/>
               <Cart/>
            </div>
        </div>
    </div>
  )
}
