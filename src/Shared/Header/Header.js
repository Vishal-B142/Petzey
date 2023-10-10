import React from "react";

const Header = () => {
  return (
    <div>
      <div class="header">
        <div class="header-left">
          <a href="" class="logo">
            <img src="assets/img/logo.png" width="35" height="35" alt="" />
            <span>Petzey</span>
          </a>
        </div>
        <a id="mobile_btn" class="mobile_btn float-left" href="#sidebar">
          <i class="fa fa-bars"></i>
        </a>
        <ul class="nav user-menu float-right">
          <li class="nav-item dropdown d-none d-sm-block">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="badge badge-pill bg-danger float-right">3</span>
            </a>
            <div class="dropdown-menu notifications">
              <div class="topnav-dropdown-header">
                <span>Notifications</span>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown d-none d-sm-block">
            <a
              href="javascript:void(0);"
              id="open_msg_box"
              class="hasnotifications nav-link"
            >
              <i class="fa fa-comment-o"></i>
              <span class="badge badge-pill bg-danger float-right">8</span>
            </a>
          </li>
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
                  width="40"
                  alt="Admin"
                />
                <span class="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div class="dropdown-menu">
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
          </li>
        </ul>
        <div class="dropdown mobile-user-menu float-right">
          <a
            href="#"
            class="nav-link dropdown-toggle"
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
    </div>
  );
};

export default Header;
