import React from 'react'
import { Cart } from '../components/Cart'

export const Search = () => {
  return (
    <>
        <div className='container-fluid m-4'>
        
        <div>
        <form class="row w-50">
            <div class="col">
                <input type="text" class="form-control" placeholder="***/***/***/***" aria-label="First name"/>
            </div>
            <div class="col">
                <input type="number" class="form-control" placeholder="page" />
            </div>
            <div class="col">
                <input type="number" class="form-control" placeholder="limit"/>
            </div>
            <div class="col">
                <label for="customRange1" class="form-label">max</label>
                <input type="range" class="form-range" min="0" max="1000" />
            </div>
            <div class="col">
                <label for="customRange1" class="form-label">min</label>
                <input type="range" class="form-range" min="0" max="1000"/>
            </div>
            <div class="col">
                <input type="submit" value={"filtrar"} class="btn btn-info" min="0" max="1000"  />
            </div>
        </form>
        </div>

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
