import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function ChartCustom() {
  // set data
  const [barData, setBarData] = useState({
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
    datasets: [
      {
        label: "Doanh Thu",
        color: "#FFF",
        data: [30, 40, 30, 20, 10],
        backgroundColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
        barThickness: 30,
        // hoverBorderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Người dùng",
        data: [15, 25, 35, 45, 55],
        backgroundColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
        barThickness: 30,
        // hoverBorderColor: "rgba(108, 93, 211, 0.6)"
      },
    ],
  });

  // set options
  const [barOptions, setBarOptions] = useState({
    options: {
      color: "#FFF",
      scales: {
        yAxes: {
          grid: {
            color: "rgba(108, 93, 211, 0.6)",
          },
          ticks: {
            beginAtZero: true,
            color: "#FFF",
          },
        },

        xAxes: {
          grid: {
            color: "rgba(108, 93, 211, 0.6)",
          },
          ticks: {
            beginAtZero: true,
            color: "#FFF",
          },
        },
      },
    },
  });

  function choXuly() {
    setBarData("");
    setBarOptions("");
  }

  return (
    <div>
      <h4 className="title" onClick={choXuly}>
        Doanh thu
      </h4>
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
