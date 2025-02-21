import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Chatboat from "./pages/Chatboat";
import Contact from "./pages/Contact";
import CreateuserProfile from "./pages/CreateuserProfile";
import Userprofile from "./pages/Userprofile";
import DoctorProfile from "./pages/DoctorProfile";
import Createdocprofile from "./pages/Createdocprofile";
import Home from "./pages/Home";
import Medicineinfo from "./pages/Medicineinfo";
import ImageDetection from "./pages/ImageDetection";
import ViewsDoctor from "./pages/ViewsDoctor";
import { UserProvider } from "./context/Usercontext";
import MedicalInfo from "./pages/MedicalInfo";
import Loggedinhome from "./pages/Loggedinhome";
import { AuthProvider } from './AuthContext';
import Viewmedicalinfo from "./pages/Viewmedicalinfo";

const App = () => {
  // const ProtectedRoute = ({ element }) => {
  //   const token = localStorage.getItem('token')
  //   return token ? element : <Navigate to="/login" replace />
  // }
  // const AuthRedirect = ({element})=>{
  //   const token = localStorage.getItem('token')
  //   return token ? <Navigate to="/" replace /> : element  }
  return (
    <>
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chatboat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/createuser" element={<CreateuserProfile />} />
            <Route path="/userprofile/:id" element={<Userprofile />} />
            <Route path="/" element={<Home />} />
            <Route path="/medicineinfo" element={<Medicineinfo />} />
            <Route path="/image-detection" element={<ImageDetection />} />
            <Route path="/viewsdoc" element={<ViewsDoctor />} />
            <Route path="/medicalinfo" element={<MedicalInfo />} />
            <Route path="/viewmedicalinfo" element={<Viewmedicalinfo />} />
            <Route path="/logedinhome" element={<Loggedinhome />} />

            {/* doc profile */}
            <Route path="/docprofile" element={<Createdocprofile />} />
            <Route path="/doctorprofile" element={<DoctorProfile />} />

            {/* <Route path="/login" element={<AuthRedirect element={<Login />} />}/> */}
            {/* <Route path="/" element={<ProtectedRoute element={<Singleimage />} />} /> */}
          </Routes>
        </BrowserRouter>
      </UserProvider>
      </AuthProvider>
    </>
  );
};

export default App;
