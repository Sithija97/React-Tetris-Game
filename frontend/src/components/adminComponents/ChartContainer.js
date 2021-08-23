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
      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-4 col-lg-5 ">
          <h1 class="h4 mb-4 text-gray-900 font-weight-bold ">
            Whats's Happening Today
          </h1>
          <SalesCard salesProps={salesProps} />
        </div>

        <div class="col-xl-4 col-lg-5 ">
          <div class="mb-5 "></div>
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

      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-8 col-lg-6">
          <h1 class="h4 mb-4 text-gray-900 font-weight-bold pt-4 ">
            SALES SUMMARY
          </h1>

          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"></div>

            <div class="card-body">
              <div
                class="chart-area"
                style={{ bottom: "65px", width: "80%", height: "80%" }}
              >
                <MultiAxisLine />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div class="col-xl-8 col-lg-7">
          <h1 class="h4 mb-4 text-gray-900 font-weight-bold ">WEAK STOCK</h1>
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"></div>

            <div class="card-body" style={{ overflow: "hidden" }}>
              <div class="chart-area" style={{ bottom: "20px", width: "80%" }}>
                <div class="table-responsive">
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
