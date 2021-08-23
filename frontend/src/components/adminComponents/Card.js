import React from "react";

function Card({ commonProps }) {
  return (
    <div
      class="cardamount shadow mb-4"
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
          SALES DETAILS
        </h6>

        <span class="font-weight-bold">
          <div
            class="row no-gutters align-items-center"
            style={{ marginBottom: "15px" }}
          >
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-light text-uppercase mb-1">
                {/* Total Sales */}
              </div>
              <div class=" mb-0 font-weight-bold text-light">
                $ {commonProps.myProp1}
              </div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                1 000 000.00
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
              <div class=" mb-0 font-weight-bold text-light">$ CREDIT</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                1 000 000.00
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
              <div class=" mb-0 font-weight-bold text-light">$ CHECK</div>
            </div>
            <div class="col-auto">
              <span class=" mb-0 font-weight-bold text-light">
                1 000 000.00
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
              <div class="h3 mb-0 font-weight-bold text-light">$ TOTAL</div>
            </div>
            <div class="col-auto">
              <span class="h3 mb-0 font-weight-bold text-light">
                1 000 000.00
              </span>
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
  );
}

export default Card;
