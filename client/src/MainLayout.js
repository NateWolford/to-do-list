import React from 'react';
import { Link } from 'react-router-dom';
import './MainLayout.css';
import defaultProfilePic from './default-profile-pic.jpg'; // Ensure this image is in your src folder

const MainLayout = ({ children }) => {

  const userName = "User Name";

  return (
    <div className="d-flex" id="wrapper">
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Schedule</div>
      <div className="list-group list-group-flush">
        <Link to="/todo/today" className="list-group-item list-group-item-action bg-light">Today</Link>
        <Link to="/todo/upcoming" className="list-group-item list-group-item-action bg-light">Upcoming</Link>
        <Link to="/todo/completed" className="list-group-item list-group-item-action bg-light">Completed</Link>
        {/* Other sidebar links */}
      </div>
    </div>

       {/* Page Content */}
       <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <div className="ml-auto d-flex align-items-center">
              <div className="nav-item dropdown profile-container">
                <div className="profile-pic-container">
                  <img src={defaultProfilePic} alt="Profile" className="rounded-circle profile-pic" />
                </div>
                <button className="btn nav-link dropdown-toggle" id="navbarDropdown" 
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* Dropdown toggle */}
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  {/* Dropdown items */}
                </div>
              </div>
              <span className="welcome-message">{userName}</span>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
