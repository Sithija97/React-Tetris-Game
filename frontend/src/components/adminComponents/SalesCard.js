import React from "react";

function SalesCard({ salesProps }) {
  return (
    <div
      class="cardamount shadow mb-4"
      style={{
        background:
          "linear-gradient(90deg, rgb(91, 0, 111) 0%, rgb(101, 0, 112)",
      }}
    >
      <div
        class="card-header py-3 justify-content-between"
        style={{
          background:
            "linear-gradient(90deg, rgb(91, 0, 111) 0%, rgb(101, 0, 112)",
        }}
      >
        <h5 class="m-0 font-weight-bold text-primary text-light mb-2">
          SALES DETAILS
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
              <div class=" mb-0 font-weight-bold text-light pl-4">$ Cash</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {salesProps.value1}
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
              <div class=" mb-0 font-weight-bold text-light pl-4">$ Credit</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {salesProps.value2}
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
              <div class=" mb-0 font-weight-bold text-light pl-4">$ Check</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                {salesProps.value3}
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
              <div class="h5 mb-0 font-weight-bold text-light">$ TOTAL</div>
            </div>
            <div class="col-auto">
              <span class="h3 mb-0 font-weight-bold text-light">
                {salesProps.value4}
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

export default SalesCard;
