import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { x: '1:25AM', y: 100 },
  { x: '1:30AM', y: 80 },
  { x: '1:35AM', y: 60 },
  { x: '1:40AM', y: 69.2 },
  { x: '1:45AM', y: 80 },
  { x: '2:00AM', y: 70 },
];

const LineChartine = () => {
  return (
    <ResponsiveContainer width="80%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" /> {/* Use "x" as the dataKey for XAxis */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#0028FE" activeDot={{ r: 8 }} /> {/* Use "y" as the dataKey for Line */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartine;
