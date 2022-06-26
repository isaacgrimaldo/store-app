import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';

export const Nav = () => {
    const [auth, setauth] = useState(true)
    const navegator = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to={'/'}>Modelorama</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {
            (auth === false) ?(
                <LinksWithOutAuth/>
            ):(
                <LinksWithAuth/>
            )
         }
      </ul>
      <form className="d-flex" onSubmit={(e) =>{ e.preventDefault(); navegator(`/search`) }}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

const LinksWithOutAuth = () =>{
    return(
        <>
        <li className="nav-item mx-4 my-2 ">
          <Link className="nav-link text-center text-wrap mx-auto rounded-2 bg-primary text-dark   ps-2" style={{width:'15rem'}}  to={'/login'}>Login</Link>
        </li>
        <li className="nav-item mx-4 my-2">
        <Link className="nav-link text-center text-wrap mx-auto rounded-2 bg-warning  text-dark"   style={{width:'15rem'}} aria-current="page" to={'/register'}>register</Link>
        </li>
        </>
    )
}

const LinksWithAuth = () =>{
    return(
        <>
        <li className="nav-item ms-4">
          <Link className="nav-link text-center text-wrap mx-auto rounded-2 bg-primary mt-2 text-dark" style={{width:'18rem'}} aria-current="page" to={'/shopping_car'}>Shopping Car</Link>
        </li>
        <li className="nav-item ms-4">
        <Link className="nav-link text-center text-wrap mx-auto rounded-2 bg-warning mt-2 m text-dark"  style={{width:'18rem'}} aria-current="page" to={'/orders'}>Orders</Link>
        </li>
        </>
    )
}