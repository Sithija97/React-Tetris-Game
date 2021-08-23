import React from "react";

function DrawerCard({ drawerProps }) {
  return (
    <div
      class="cardamount shadow mb-4"
      style={{
        background:
          "linear-gradient(90deg, rgb(91, 0, 111) 0%, rgb(65, 7, 135) 100%)",
      }}
    >
      <div
        class="card-header py-3 justify-content-between"
        style={{
          background:
            "linear-gradient(90deg, rgb(91, 0, 111) 0%, rgb(65, 7, 135) 100%)",
        }}
      >
        <h5 class="m-0 font-weight-bold text-primary text-light mb-2">
          DRAWER DETAILS
        </h5>

        <span class="font-weight-bold">
          <div
            class="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Total Sales */}
              </div>
              <div class=" mb-0 font-weight-bold text-light pl-4">
                $ Starting Balance
              </div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {drawerProps.value1}
              </span>
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
                {/* Cash */}
              </div>
              <div class=" mb-0 font-weight-bold text-light pl-4">
                $ Total Cash Sales
              </div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {drawerProps.value2}
              </span>
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
                {/* Cash */}
              </div>
              <div class=" mb-0 font-weight-bold text-light pl-4">
                $ Total Expense by Cash
              </div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {drawerProps.value3}
              </span>
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
                {/* Cash */}
              </div>
              <div class="h3 mb-0 font-weight-bold text-light">
                $ DRAWER BALANCE
              </div>
            </div>
            <div class="col-auto">
              <span class="h3 mb-0 font-weight-bold text-light">
                {drawerProps.value4}
              </span>
            </div>
          </div>
        </span>
      </div>

      <div class="card-body">
        <div class="chart-pie pt-4 pb-2"></div>
        <div class="mt-4 text-center small">
          <span class="mr-2"></span>
          <span class="mr-2"></span>
          <span class="mr-2"></span>
        </div>
      </div>
    </div>
  );
}

export default DrawerCard;
