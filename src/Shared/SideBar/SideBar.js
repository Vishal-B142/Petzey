import React from "react";
import "../SideBar/sidebar.css"
import "../../Assets/img/logoback.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoPaw } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { GiStethoscope} from "react-icons/gi";
import { BsFillCalendarFill} from "react-icons/bs";
import { RiFlag2Fill} from "react-icons/ri";



const SideBar = () => {
  return (
    <div>
      <div class="header">
        <div class="header-left">
          <a href="/" class="logo">
            <img src="assets/img/logoback.png" width="35" height="35" alt="" />
            <span>PETZEY</span>
          </a>
        </div>
        <a id="toggle_btn" href="javascript:void(0);">
          <i class="fa fa-bars"></i>
        </a>
        <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar">
          <i class="fa fa-bars"></i>
        </a>
        <ul class="nav user-menu float-right">
          {/* <li class="nav-item dropdown d-none d-sm-block">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="badge badge-pill bg-danger float-right">3</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span>Notifications</span>
              </div>
            </div>
          </li> */}
          {/* <li class="nav-item dropdown d-none d-sm-block">
            <a
              href="javascript:void(0);"
              id="open_msg_box"
              class="hasnotifications nav-link"
            >
              <i class="fa fa-comment-o"></i>
              <span class="badge badge-pill bg-danger float-right">8</span>
            </a>
          </li> */}
          <li class="nav-item dropdown has-arrow">
            <a
              href="#"
              class="dropdown-toggle nav-link user-link"
              data-toggle="dropdown"
            >
              <span class="user-img">
                <img
                  class="rounded-circle"
                  src="assets/img/user.jpg"
                  width="24"
                  alt="Admin"
                />
                <span class="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="profile">
                My Profile
              </a>
              <a class="dropdown-item" href="edit-profile">
                Edit Profile
              </a>
              <a class="dropdown-item" href="settings">
                Settings
              </a>
              <a class="dropdown-item" href="login">
                Logout
              </a>
            </div>
          </li>
        </ul>
        <div class="dropdown mobile-user-menu float-right">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa fa-ellipsis-v"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a class="dropdown-item" href="edit-profile.html">
              Edit Profile
            </a>
            <a class="dropdown-item" href="settings.html">
              Settings
            </a>
            <a class="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </div>
      </div>
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="menu-title">Main</li>
              <li>
                <a href="dashboard">
                 <MdDashboard/> <span id="s1"><b>Dashboard</b></span>
                </a>
              </li>
              <li>
                <a href="vet">
                <GiStethoscope/><span id="s1"><b>Vets</b></span>
                </a>
              </li>
              <li>
                <a href="pets">
                <IoPaw/> <span id="s1"><b>Pets</b></span> 
               
                  <FontAwesomeIcon icon="fa-solid fa-paw" />
                </a>
              </li>
              <li>
                <a href="allAppointments">
                  <i class="fa fa-calendar"></i> <span id="s1"><b>Appointments</b></span>
                </a>
              </li>

              <li>
                <a href="departments">
                  <i class="fa fa-hospital-o"></i> <span id="s1"><b>Departments</b></span>
                </a>
              </li>

              <li>
                <a href="clinic">
                <RiFlag2Fill/> <span id="s1"> <b>Clinic Information</b> </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
