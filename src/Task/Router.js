import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Component from "./Component/Component";


const Router=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Component" element={<Component/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router