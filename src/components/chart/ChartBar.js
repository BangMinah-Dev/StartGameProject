import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function ChartCustom() {
  // set data
  const [barData, setBarData] = useState({
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
    datasets: [
      {
        label: "Doanh Thu",
        data: [50, 40, 30, 20, 10],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
        barThickness: 35,
        // hoverBorderColor: "rgba(108, 93, 211, 0.6)",
      },
      {
        label: "Người dùng",
        data: [15, 25, 35, 45, 55],
        backgroundColor: ["rgba(222, 69, 15, 1)"],
        borderWidth: 1,
        barThickness: 35,
        // hoverBorderColor: "rgba(108, 93, 211, 0.6)"
      },
    ],
  });

  // set options
  const [barOptions, setBarOptions] = useState({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              color: "rgba(108, 93, 211, 0.6)",
            },
          },
        ],
        x: [{
          gridLines: {
            color: "rgba(108, 93, 211, 0.6)",
          },
        }],
      },
    },
  });

  console.log(setBarData);
  console.log(setBarOptions);
  return (
    <div>
      <h4 className="title">Biểu đồ doanh thu</h4>
      <div className="BarChart">
        <Bar
          className="chart-bar"
          data={barData}
          options={barOptions.options}
        />
      </div>
    </div>
  );
}
