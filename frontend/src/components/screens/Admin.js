import React from "react";
import CardsSection from "../adminComponents/CardsSection";
import ChartContainer from "../adminComponents/ChartContainer";
import NavBar from "../adminComponents/NavBar";
import Slider from "../adminComponents/Slider";
import MobileleftSlider from "../adminComponents/mobiledrawerslide";
function Admin() {
  return (
    <>
    <body>

   <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
   <label for="drawer-toggle" id="drawer-toggle-label" style={{top:"30px", marginLeft:"30px"}}></label>
   {/* <header>Header</header> */}
   <nav id="drawer">
      <MobileleftSlider/>
   </nav>
   <div id="page-content">
   <div id="wrapper">
          <Slider />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <NavBar />
              <div
                class="container-fluid"
                style={{
                  // background: "blue",
                  // maxHeight: "44rem",
                  height:"100vh",
                  overflow: "scroll",
                }}
              >
                <ChartContainer />
              </div>
            </div>
          </div>
        </div>
   </div>
</body>
      <body id="page-top  pre-scrollable">
        <div id="wrapper">
          <Slider />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <NavBar />
              <div
                class="container-fluid"
                style={{
                  // background: "blue",
                  // maxHeight: "44rem",
                  height:"100vh",
                  overflow: "scroll",
                }}
              >
                <ChartContainer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Admin;
