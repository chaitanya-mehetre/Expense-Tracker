import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data, xAxisKey = "category" }) => {
  const getBarColor = (index) => (index % 2 === 0 ? "#06b6d4" : "#a5f3fc");

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const label = payload[0].payload[xAxisKey];
    const amount = payload[0].payload.amount;

    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300 dark:bg-slate-800 dark:border-slate-700">
        <p className="text-xs font-semibold text-cyan-800 dark:text-cyan-400 mb-1">
          {label}
        </p>
        <p className="text-xs text-gray-600 dark:text-slate-400">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            ₹{amount}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="mt-6 text-gray-600 dark:text-slate-400">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="currentColor"
            strokeOpacity={0.15}
          />
          <XAxis
            dataKey={xAxisKey}
            tick={{ fontSize: 12, fill: "currentColor" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "currentColor" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={CustomTooltip}
            cursor={{ fill: "currentColor", fillOpacity: 0.08 }}
          />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;