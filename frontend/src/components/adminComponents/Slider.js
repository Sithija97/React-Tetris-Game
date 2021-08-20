import React from "react";

function Slider() {
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          {/* <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div> */}
          <div class="sidebar-brand-text mx-4 mr-4">
            {/* SB Admin <sup>2</sup> */}

            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>

          </div>
        </a>

        <hr class="sidebar-divider my-0" />

        <ul class="navbar-nav ml-auto">

          <li class="nav-item dropdown no-arrow">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
        
              
              {/* <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                Keerthanan
              </span> */}
               <div class="sidebar-brand-text mx-2">

               <img
                class="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              /> 
                 <span class="font-weight-bold ">
              <text class="text-truncate">
              Keerthanan
              </text>
            </span>
            <br></br>
            <div style={{ marginBottom:"-15px", bottom:"5px"}}>
            {/* <span class="mx-3 pl-4">
              <text class="text-truncate">
              Keerthanan
              </text>
            </span> */}
            </div>
            </div>
        
            </a>

            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in "
              aria-labelledby="userDropdown"
            >
              <div  id="padset" className="padset" >
              <a class="dropdown-item" href="#">
                <i class="fas fa-user fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700" >Profile</text>                
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700" >Settings</text>  
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-list fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700" >Activity Log</text>  
                </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-700"></i>
                <text class="text-gray-700" >Logout</text>  
              </a>
              </div>
            </div>
          </li>
        </ul>
    
        <hr class="sidebar-divider" />

        <div class="sidebar-heading">Informations</div>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>

            <span class="font-weight-bold">
              <text class="text-truncate">
                PORTFOLIO
              </text>
            </span>
          </a>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Components:</h6>
              <a class="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a class="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i class="fas fa-fw fa-wrench"></i>
            {/* <span>INVENTORY</span> */}

            <span class="font-weight-bold">
              <text class="text-truncate">
                INVENTORY
              </text>
            </span>
          </a>
          <div
            id="collapseUtilities"
            class="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Utilities:</h6>
              <a class="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a class="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a class="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a class="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading">SUMMARY</div>
        

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            // href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="fas fa-fw fa-folder"></i>

            <span class="font-weight-bold">
              <text class="text-truncate">
                SALES
              </text>
            </span>
            
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Login Screens:</h6>
              <a class="collapse-item" href="login.html">
                Login
              </a>
              <a class="collapse-item" href="register.html">
                Register
              </a>
              <a class="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div class="collapse-divider"></div>
              <h6 class="collapse-header">Other Pages:</h6>
              <a class="collapse-item" href="404.html">
                404 Page
              </a>
              <a class="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            // href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i class="fas fa-fw fa-chart-area"></i>

            <span class="font-weight-bold">
              <text class="text-truncate">
              PURCHASE
              </text>
            </span>
            
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Login Screens:</h6>
              <a class="collapse-item" href="login.html">
                Login
              </a>
              <a class="collapse-item" href="register.html">
                Register
              </a>
              <a class="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div class="collapse-divider"></div>
              <h6 class="collapse-header">Other Pages:</h6>
              <a class="collapse-item" href="404.html">
                404 Page
              </a>
              <a class="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
           <i class="fas fa-fw fa-table"></i>

            <span class="font-weight-bold">
              <text class="text-truncate">
                REPORTS
              </text>
            </span>
            
          </a>
          <div
            id="collapsePages"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Login Screens:</h6>
              <a class="collapse-item" href="login.html">
                Login
              </a>
              <a class="collapse-item" href="register.html">
                Register
              </a>
              <a class="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div class="collapse-divider"></div>
              <h6 class="collapse-header">Other Pages:</h6>
              <a class="collapse-item" href="404.html">
                404 Page
              </a>
              <a class="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        <hr class="sidebar-divider d-none d-md-block" />

        <div class="sidebar-brand-text mx-5 pl-5 mr-4">

        <li class="nav-item ">
          <a class="nav-link" href="charts.html">
            {/* <i class="fas fa-fw fa-chart-area"></i> */}
            <span class="font-weight-bold">
              <text class="text-truncate">
                SETTINGS
              </text>
            </span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="tables.html">
            {/* <i class="fas fa-fw fa-table"></i> */}
            <span class="font-weight-bold">
              <text class="text-truncate">
                SIGN OUT
              </text>
            </span>
          </a>
        </li>
        </div>

      </ul>
    </>
  );
}

export default Slider;
