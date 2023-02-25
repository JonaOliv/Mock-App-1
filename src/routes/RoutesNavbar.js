import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/home/Index';
import NoPage from '../pages/400/Index';
import Page1 from '../pages/page1/Index';

function RoutesNavbar(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesNavbar;



