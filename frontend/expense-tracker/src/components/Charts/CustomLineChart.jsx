import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length)
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300 dark:bg-slate-800 dark:border-slate-700">
        <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-400 mb-1">
          {payload[0].payload.category}
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-400">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            ₹{payload[0].payload.amount}
          </span>
        </p>
      </div>
    );
  return null;
};

const CustomLineChart = ({ data }) => {
  return (
    <div className="text-gray-600 dark:text-slate-400">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "currentColor" }}
            stroke="none"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "currentColor" }}
            stroke="none"
          />
          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#06b6d4"
            fill="url(#incomeGradient)"
            strokeWidth={3}
            dot={{ r: 3, fill: "#8af7ff" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;