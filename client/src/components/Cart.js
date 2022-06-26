import React from 'react'

export const Cart = () => {
  return (
    <>
     <div className="card text-center col-lg-4 col-md-6 col-sm-12 m-auto my-2 " style={{width:'18rem'}} >
        <div className="card-body ">
            <h5 className="card-title">Corona Media</h5>
            <h6 className="card-subtitle mb-2 text-muted">sku:<strong> jds/dsd/dsa/dsa</strong></h6>
            <p className="card-text">Precio <strong>$500</strong></p>
            <div className='row justify-content-center'>
                <div className='text-center d-grid gap-2'>
                        <button className='btn btn-primary  btn-sm'>Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
    </>
   
  )
}
