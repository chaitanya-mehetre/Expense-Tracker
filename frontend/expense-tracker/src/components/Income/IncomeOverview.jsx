import React, { useMemo } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions = [], onAddIncome }) => {
  
  // Calculate the chart data directly during render using useMemo
  const chartData = useMemo(() => {
    return prepareIncomeBarChartData(transactions);
  }, [transactions]);

  const hasData = transactions && transactions.length > 0;

  return (
    <div className="card p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h5 className="text-lg font-bold text-gray-800 leading-tight">Income Overview</h5>
          <p className="text-xs text-slate-400 font-medium">Track your income sources</p>
        </div>

        <button
          className="add-btn flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-all active:scale-95 shadow-sm"
          onClick={onAddIncome}
        >
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

      <div className="mt-8">
        {hasData ? (
          <CustomBarChart data={chartData} xAxisKey="date" />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400 border border-dashed border-gray-200 rounded-xl bg-slate-50/50">
            <p className="text-sm font-medium">No income data available yet</p>
            <p className="text-xs text-slate-400 mt-1">Click the button above to add transactions and generate your chart.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeOverview;
