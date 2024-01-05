import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { data, data2 } from '../Redux/data';



const MyComposedChart = () => {
  return (
    <ComposedChart width={1200} height={400} data={data2}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Emissions" barSize={20} fill="#8884d8" />
      {/* Increase the width of the line by setting strokeWidth */}
      <Line type="monotone" dataKey="Emissions" stroke="#82ca9d" strokeWidth={2} />
      <Bar dataKey="Emissions" barSize={20} fill="#8884d8" />
    </ComposedChart>
  );
};

export default MyComposedChart;