import React from "react";
import Card from "./Card";
import DataTable from "./DataTable";
import DrawerCard from "./DrawerCard";
import ExpenseCard from "./ExpenseCard";
import MultiAxisLine from "./MultiAxisLine";
import SalesCard from "./SalesCard";

function ChartContainer() {
  const salesProps = {
    value1: "21,230.00",
    value2: "1,000,000.00",
    value3: "1,000,000.00",
    value4: "12.900,000.00",
  };
  const expenseProps = {
    value1: "26,230.00",
    value2: "1,000,000.00",
    value3: "1,000,000.00",
    value4: "8.800,000.00",
  };
  const drawerProps = {
    value1: "216,230.00",
    value2: "2,000,000.00",
    value3: "6,000,000.00",
    value4: "8.800,000.00",
  };
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-2">
        <h1 class="h3 mb-0 text-gray-900 font-weight-bold ">
          Whats's Happening Today
        </h1>
      </div>

      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-4 col-lg-5 ">
          {/* <Card commonProps={commonProps} /> */}
          <SalesCard salesProps={salesProps} />
        </div>

        <div class="col-xl-4 col-lg-5">
          <ExpenseCard expenseProps={expenseProps} />
        </div>
      </div>
      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-7 col-lg-6">
          <DrawerCard drawerProps={drawerProps} />
        </div>
      </div>

      <div class="d-sm-flex align-items-center justify-content-between mb-2">
        <h1 class="h3 mb-0 text-gray-900 font-weight-bold ">SALES SUMMARY</h1>
      </div>

      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-8 col-lg-6">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"></div>

            <div class="card-body">
              <div
                class="chart-area"
                style={{ bottom: "65px", width: "80%", height: "80%" }}
              >
                {/* <canvas id="myAreaChart"></canvas> */}
                <MultiAxisLine />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-sm-flex align-items-center justify-content-between mb-2">
        <h1 class="h3 mb-0 text-gray-900 font-weight-bold">WEAK STOCK</h1>
      </div>
      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              {/* <h6 class="m-0 font-weight-bold text-primary ">
                Earnings Overview
              </h6> */}
              {/* <div class="dropdown no-arrow">
                <a
                  class="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div> */}
            </div>

            <div class="card-body">
              <div class="chart-area" style={{ bottom: "50px", width: "80%" }}>
                {/* <canvas id="myAreaChart"></canvas> */}
                <div class="table-responsive ">
                  <DataTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartContainer;
