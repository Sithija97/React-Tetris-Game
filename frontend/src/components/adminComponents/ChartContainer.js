import React from "react";
import DataTable from "./DataTable";
import MultiAxisLine from "./MultiAxisLine";

function ChartContainer() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-2">
        <h1 class="h3 mb-0 text-gray-900 font-weight-bold ">SALES SUMMARY</h1>
      </div>

      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-4 col-lg-5">
          <div
            class="card shadow mb-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
            }}
          >
            <div
              class="card-header py-3 justify-content-between"
              style={{
                background:
                  "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
              }}
            >
              <h6 class="m-0 font-weight-bold text-primary text-light mb-2">
                Today
              </h6>

              <span class="font-weight-bold">
                {/* <text class="text-truncate text-light h3 font-weight-bold ">
                  TOTAL SALES
                </text> */}
                <div
                  class="row no-gutters align-items-center"
                  style={{ marginBottom: "15px" }}
                >
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Total Sales
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-briefcase fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
              <span class="font-weight-bold">
                <div
                  class="row no-gutters align-items-center"
                  style={{ marginBottom: "15px" }}
                >
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Cash
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 20,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
              <span class="font-weight-bold">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Credit
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 10,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="far fa-credit-card fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
            </div>

            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                {/* <canvas id="myPieChart"></canvas> */}
              </div>
              <div class="mt-4 text-center small">
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-primary"></i> Direct */}
                </span>
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-success"></i> Social */}
                </span>
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-info"></i> Referral */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-5">
          <div
            class="card shadow mb-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
            }}
          >
            <div
              class="card-header py-3 justify-content-between"
              style={{
                background:
                  "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
              }}
            >
              <h6 class="m-0 font-weight-bold text-primary text-light mb-2">
                Today
              </h6>

              <span class="font-weight-bold">
                {/* <text class="text-truncate text-light h3 font-weight-bold ">
                  TOTAL SALES
                </text> */}
                <div
                  class="row no-gutters align-items-center"
                  style={{ marginBottom: "15px" }}
                >
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Total Sales
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-briefcase fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
              <span class="font-weight-bold">
                <div
                  class="row no-gutters align-items-center"
                  style={{ marginBottom: "15px" }}
                >
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Cash
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 20,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
              <span class="font-weight-bold">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Credit
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 10,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="far fa-credit-card fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
            </div>

            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                {/* <canvas id="myPieChart"></canvas> */}
              </div>
              <div class="mt-4 text-center small">
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-primary"></i> Direct */}
                </span>
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-success"></i> Social */}
                </span>
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-info"></i> Referral */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-4 col-lg-5">
          <div
            class="card shadow mb-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
            }}
          >
            <div
              class="card-header py-3 justify-content-between"
              style={{
                background:
                  "linear-gradient(90deg, rgba(98,45,217,1) 0%, rgba(65,7,135,1) 100%)",
              }}
            >
              <h6 class="m-0 font-weight-bold text-primary text-light mb-2">
                Today
              </h6>

              <span class="font-weight-bold">
                {/* <text class="text-truncate text-light h3 font-weight-bold ">
                  TOTAL SALES
                </text> */}
                <div
                  class="row no-gutters align-items-center"
                  style={{ marginBottom: "15px" }}
                >
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Total Sales
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 40,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-briefcase fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
              <span class="font-weight-bold">
                <div
                  class="row no-gutters align-items-center"
                  style={{ marginBottom: "15px" }}
                >
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Cash
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 20,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
              <span class="font-weight-bold">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                      Credit
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-light">
                      $ 10,000
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="far fa-credit-card fa-2x text-gray-300"></i>
                  </div>
                </div>
              </span>
            </div>

            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                {/* <canvas id="myPieChart"></canvas> */}
              </div>
              <div class="mt-4 text-center small">
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-primary"></i> Direct */}
                </span>
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-success"></i> Social */}
                </span>
                <span class="mr-2">
                  {/* <i class="fas fa-circle text-info"></i> Referral */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-sm-flex align-items-center justify-content-between mb-2">
        <h1 class="h3 mb-0 text-gray-900 font-weight-bold ">SALES SUMMARY</h1>
      </div>

      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"></div>

            <div class="card-body pre-scrollable">
              <div
                class="chart-area "
                style={{ minHeight: "50px", maxHeight: "250px" }}
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
              <h6 class="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div class="dropdown no-arrow">
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
              </div>
            </div>

            <div class="card-body  pre-scrollable">
              <div
                class="chart-area"
                style={{ minHeight: "50px", maxHeight: "250px" }}
              >
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
