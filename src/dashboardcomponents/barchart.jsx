import React from "react";
import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from "recharts";

const data = [
  {
    name: "1 sep",
    uv: 2000,
    amt: 2400
  },
  {
    name: "2 sep",
    uv: 3000,
    amt: 2210
  },
  {
    name: "3 sep",
    uv: 2000,
    amt: 2290
  },
  {
    name: "4 sep",
    uv: 2780,
    amt: 2000
  }
];

export default function barchart() {
  return (
    <div className="h-[37vh] mt-2 w-[100%]">
         <ResponsiveContainer  width="100%"  height="80%">
    <AreaChart
      width={700}
      height={900}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#109CF1" fill="#109CF1" />
    </AreaChart>
    </ResponsiveContainer>
    </div>
  );
}
