import React, { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: "M",
    uv: 4000,
    amt: 2400
  },
  {
    name: "T",
    uv: 3000,
    amt: 2210
  },
  {
    name: "W",
    uv: 2000,
    amt: 2290
  },
  {
    name: "Th",
    uv: 2780,
    amt: 2000
  },
  {
    name: "F",
    uv: 1890,
    amt: 2181
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500
  }
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function triangulaBar () {
  return (
    <div  className="h-[35vh] w-[100%]">
        <ResponsiveContainer>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                    dataKey="uv"
                    fill="#8884d8"
                    shape={<TriangleBar />}
                    label={{ position: "top" }}
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
}
