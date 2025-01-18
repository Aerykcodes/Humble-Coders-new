import React from 'react';
import { PieChart as RechartPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './PieChart.css'; // Import custom CSS for the legend

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#6A5ACD'];

const renderCustomizedLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="custom-legend">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ color: entry.color }}>
          {entry.value}%
        </li>
      ))}
    </ul>
  );
};

const PieChart = ({ data }) => {
  return (
    <RechartPieChart width={360} height={300}>
      <Pie
        data={data.filter(item => item.value > 0)}
        cx={180}
        cy={150}
        labelLine={false}
        outerRadius={130}
        fill="#8884d8"
        dataKey="value"
      >
        {data.filter(item => item.value > 0).map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend
        content={renderCustomizedLegend}
        layout="vertical"
        verticalAlign="middle"
        align="right"
        payload={data.map((entry, index) => ({
          value: `${entry.name}: ${entry.value}`,
          type: "square",
          id: `${entry.name}-${index}`,
          color: COLORS[index % COLORS.length]
        }))}
      />
    </RechartPieChart>
  );
};

export default PieChart;
