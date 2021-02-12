import React from 'react'
import { Line } from "react-chartjs-2";
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis'

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "First dataset",
        data: [500, 250, 250, 250, 400, 400, 800, 400, 600, 250, 250, 450, 450],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [300, 600, 900],
        fill: true,
        borderColor: "#742774"
      }
    ]
  };
  
  export default function App() {
    return (
      <div className="App">
        <Line data={data} />
      </div>
    );
  }
  