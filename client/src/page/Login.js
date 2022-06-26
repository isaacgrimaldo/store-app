import React from 'react'

export const Login = () => {
  return (
    <div className='container-fluid m-auto my-4'>
      <div className=' row justify-content-center align-items-center vh-100'>
        <form className='w-50 border border-dark border border-5 rounded p-4'>
          <h1 className='text-center text-primary my-4'>
            LOGIN
          </h1>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-fill"></i></span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock-fill"></i></span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
        </div>
        </form>
      </div>
    </div>
  )
}
