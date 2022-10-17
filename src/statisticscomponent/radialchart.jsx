import React from "react";
import { RadialBarChart, RadialBar, Legend,ResponsiveContainer } from "recharts";

const data = [
  {
    name: "",
    uv: "30" ,
    pv: 7000,
    fill: "#ffc658"
  },
  {
    name: "MTN",
    uv: 26.69,
    pv: 3000,
    fill: "#E81414"
  },
  {
    name: 'Airtel',
    uv: 15.69,
    pv: 5000,
    fill: '#EBEF36',
  },
];

const style = {
  top: 100,
  left: 350,
  lineHeight: "44px"
};

export default function Radialchart() {
  return (
    <div className="h-[35vh] w-[100%]">
        <ResponsiveContainer>
            <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={15}
            data={data}
            >
            <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#fff" }}
                background
                clockWise
                dataKey="pv"
            />
            <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
            />
            </RadialBarChart>
        </ResponsiveContainer>
    </div>
  );
}
