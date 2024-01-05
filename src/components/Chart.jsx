import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function Graph(props) {
    const {emmissions,revenue}=useSelector((state)=>state.data);
    console.log( 'data files', emmissions);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width:[0,2]
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    
    yaxis: [
      {
        title: {
          text: "Emissions",
        },
      },
      {
        opposite: true,
        title: {
          text: "E/R",
        },
      },
    ],
    
  });

  const [series, setSeries] = useState([
    {
      name: "Emissions",
      type: "column",
      data: revenue
    },
    {
      name: "E/R",
      type: "line",
      data: [40, 50, 41, 67, 22,20,10,45,7,8,9,10]
    },
    {
      name:'E/R-2022',
      type:'line',
      data:[40, 50, 41, 67, 22,20,10,45,67,28,19,18]
},
    {
        name:'Emissions',
        type:'column',
    data: emmissions
    }
  ]);
  useEffect(()=>{
    setSeries([
        {
          name: "Emissions-2023",
          type: "column",
          data: revenue
        },
        {
          name: "E/R-2023",
          type: "line",
          data: [10, 16, 20, 22, 25,22,45,40,42,39,26,43,20]
        },
        {
              name:'E/R-2022',
              type:'line',
              data:[12, 18, 22, 25, 29,26,40,45,37,28,39,20]
        },
        {
            name:'Emissions-2022',
            type:'column',
        data: emmissions
        }
      ])
  },[emmissions])

  return (
    <div className="barLine">
    <div>
      <p>Emission/Revenue</p>
    </div>
    <div>
    <ReactApexChart
        options={options}
        series={series}
        type='line'
        height={350}
      />
    </div>
      
    </div>
  );
}