import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Shared/Header/Header.js";
import SideBar from "../Shared/SideBar/SideBar.js";
import AddAppointment from "../Components/Appointments/AddAppointment/AddAppointment.jsx";
import AddSchedule from "../Components/Schedules/AddSchedule/AddSchedule.jsx";
import AddClinic from "../Components/Clinics/AddClinic/AddClinic.jsx";
import ClinicInformation from "./../Components/Clinics/ClinicInformation/ClinicInformation";
import AddPets from "./../Components/Pets/AddPets/AddPets";
import AllPets from "./../Components/Pets/AllPets/AllPets";
import SignUp from "./../Shared/Signup/SignUp";
import AdminDashBoard from "../Components/Dashboard/AdminDashBoard/AdminDashBoard.jsx";
import Schedule from "../Components/Schedules/Schedule/Schedule";
import AllAppointments from "../Components/Appointments/AllAppontements/AllAppointments.jsx";
import AddDoctor from "../Components/Vets/AddDoctors/AddDoctor.jsx";
import Doctor from "../Components/Vets/Doctors/Doctor.jsx";
import AddDepartment from "../Components/Departments/AddDepartment/AddDepartment.jsx";
import Department from "../Components/Departments/Department/Department.jsx";
import EditClinic from "../Components/Clinics/AddClinic/EditClinic.jsx";
import EditDepartment from "../Components/Departments/AddDepartment/EditDepartment.jsx";
import EditDoctor from "../Components/Vets/AddDoctors/EditDoctor.jsx";
import EditPets from "../Components/Pets/AddPets/EditPets.jsx";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <SideBar></SideBar>

      {/* SIGNUP ROUTING */}
      <Routes>
        <Route path="/dashboard" element={<AdminDashBoard/>} />
      </Routes>

      {/* ADMIN DASHBOARD ROUTING */}
      <Routes>
        <Route path="/" element={<AdminDashBoard />} />
      </Routes>

      {/* APPOINTMENTS ROUTING */}
      <Routes>
        <Route path="addappointment" element={<AddAppointment />} />
        <Route path="allAppointments" element={<AllAppointments />} />
      </Routes>

      {/* SCHEDULE ROUTING */}
      <Routes>
        <Route path="addschedule" element={<AddSchedule />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>

      {/* CLINICS ROUTING */}
      <Routes>
        <Route path="addclinic" element={<AddClinic />} />
        <Route path="editclinic" element={<EditClinic />} />
        <Route path="clinic" element={<ClinicInformation />} />
      </Routes>

      {/* PETS ROUTING */}
      <Routes>
        <Route path="addpets" element={<AddPets />} />
        <Route path="editpets" element={<EditPets />} />
        <Route path="pets" element={<AllPets />} />
      </Routes>

      {/* VETS ROUTING */}
      <Routes>
        <Route path="adddoctor" element={<AddDoctor />} />
        <Route path="editdoctor" element={<EditDoctor/>}/>
        <Route path="vet" element={<Doctor />} />
      </Routes>

      {/* DEPARTMENT ROUTING */}
      <Routes>
        <Route path="adddepartment" element={<AddDepartment />} />
        <Route path="editdepartment" element={<EditDepartment />} />
        <Route path="departments" element={<Department />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
