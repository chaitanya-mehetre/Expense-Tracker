import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  const legendPayload = data.map((entry, index) => ({
    value: entry.name,
    color: colors[index % colors.length],
    payload: entry,
  }));

  return (
    <div className="w-full">
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={80}
              paddingAngle={2}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />

            {showTextAnchor && (
              <>
                <text
                  x="50%"
                  y="46%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                   className="fill-gray-500 dark:fill-slate-400"
                  style={{ fontSize: "12px", fontWeight: 500 }}
                >
                  {label}
                </text>
                <text
                  x="50%"
                  y="56%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-gray-900 dark:fill-white"
                  style={{ fontSize: "20px", fontWeight: 700 }}
                >
                  {totalAmount}
                </text>
              </>
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>

      <CustomLegend payload={legendPayload} />
    </div>
  );
};

export default CustomPieChart;