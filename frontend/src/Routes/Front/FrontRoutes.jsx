import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from "../../Components/Navbar/Navbar"
import TeacherDetail from './TeacherDetail/TeacherDetail';
import RegisterUser from './RegisterUser/RegisterUser';
import Footer from "../../Components/Footer/Footer";

function FrontRoutes() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teacher/:id" element={<TeacherDetail />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default FrontRoutes;