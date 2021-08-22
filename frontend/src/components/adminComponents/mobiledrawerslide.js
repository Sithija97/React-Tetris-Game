import React from "react";

function MobileleftSlider() {
  return (
    <>
      <ul class="mr-3">
        <li>
          {" "}
          <div class="mx-4 mr-5">
            {/* SB Admin <sup>2</sup> */}

            <a href="index.html">
              <img src="assets/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>
        </li>
        <hr class="sidebar-divider my-0 mt-2" />
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUser"
            aria-expanded="true"
            aria-controls="collapseUser"
          >
            <img
              class="img-profile rounded-circle mr-2"
              src="img/undraw_profile.svg"
              style={{ height: "40px" }}
            />

            <span class="font-weight-bold">
              <text class="text-truncate">Keerthanan</text>
            </span>
          </a>
          <div
            id="collapseUser"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Sales Details:</h6>
              <a class="dropdown-item" href="#">
                <i class="fas fa-user fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700">Profile</text>
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700">Settings</text>
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-list fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700">Activity Log</text>
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                {/* <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-700"></i>
                  <text class="text-gray-700">Logout</text> */}

                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-5 text-gray-700"></i>
                <text class="text-gray-700">Logout</text>
              </a>
            </div>
          </div>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading">Informations</div>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            // data-toggle="collapse"
            // data-target="#collapseTwo"
            // aria-expanded="true"
            // aria-controls="collapseTwo"
          >
            <i class="fas fa-laugh-wink"></i>

            <span class="font-weight-bold">
              <text class="text-truncate ml-2">PORTFOLIO</text>
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
            <i class="fas fa-fw fa-table"></i>
            {/* <span>INVENTORY</span> */}

            <span class="font-weight-bold">
              <text class="text-truncate ml-2">INVENTORY</text>
            </span>
          </a>
          <div
            id="collapseUtilities"
            class="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Inventories:</h6>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="utilities-color.html"
              >
                Stocks
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
            data-target="#collapseSales"
            aria-expanded="true"
            aria-controls="collapseSales"
          >
            <i class="fas fa-fw fa-folder"></i>

            <span class="font-weight-bold">
              <text class="text-truncate ml-2">SALES</text>
            </span>
          </a>
          <div
            id="collapseSales"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Sales Details:</h6>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Details
              </a>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                Credit Sales
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            // href="#"
            data-toggle="collapse"
            data-target="#collapsePurchase"
            aria-expanded="true"
            aria-controls="collapsePurchase"
          >
            <i class="fas fa-fw fa-chart-area"></i>

            <span class="font-weight-bold">
              <text class="text-truncate ml-2">PURCHASE</text>
            </span>
          </a>
          <div
            id="collapsePurchase"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Purchase Details:</h6>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Details
              </a>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                History
              </a>
              <div class="collapse-divider"></div>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseAcc"
            aria-expanded="true"
            aria-controls="collapseAcc"
          >
            <i class="fas fa-donate "></i>

            <span class="font-weight-bold">
              <text class="text-truncate ml-2">ACCOUNTING</text>
            </span>
          </a>
          <div
            id="collapseAcc"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Accounts Details:</h6>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Sales
              </a>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                Purchase
              </a>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="forgot-password.html"
              >
                Other Reports
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsestk"
            aria-expanded="true"
            aria-controls="collapsestk"
          >
            <i class="fas fa-flag"></i>

            <span class="font-weight-bold">
              <text class="text-truncate ml-2">STAKEHOLDERS</text>
            </span>
          </a>
          <div
            id="collapsestk"
            class="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Monitize Informations:</h6>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="login.html"
              >
                Suppliers
              </a>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="register.html"
              >
                Customers
              </a>
              <a
                class="collapse-item font-weight-bold text-dark"
                href="forgot-password.html"
              >
                Collaborators
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            // data-toggle="collapse"
            // data-target="#collapseProtree"
            // aria-expanded="true"
            // aria-controls="collapseProtree"
          >
            <i class="fas fa-info-circle"></i>

            <span class="font-weight-bold">
              <text class="text-truncate ml-2">PRODUCT TREE</text>
            </span>
          </a>
          <div
            id="collapseProtree"
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
      </ul>
    </>
  );
}

export default MobileleftSlider;
