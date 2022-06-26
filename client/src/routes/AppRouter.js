import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


  import React from 'react'
import { Home } from "../page/Home";
import { Nav } from "../components/Nav";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { Search } from "../page/Search";
import { ShoppingCar } from "../page/Shopping_Car";
import { Orders } from "../page/Orders";
  
  export const AppRouter = () => {
    return (
        <Router>
          <div> 
             <Nav/>       
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/login" element={<Login/>} />
               <Route path="/register" element={<Register/>} />
               <Route path="/search" element={<Search/>} />
               <Route path="/shopping_car" element={<ShoppingCar/>} />
               <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </Router>
      );
  }
  