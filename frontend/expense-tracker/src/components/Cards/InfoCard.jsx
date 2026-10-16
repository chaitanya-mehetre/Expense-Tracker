import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-green-100 border border-gray-200/50 dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
      <div
        className={`w-14 h-14 flex items-center justify-center text-[20px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-500 dark:text-slate-400 mb-1">
          {label}
        </h6>
        <span className="text-[22px] font-semibold text-gray-900 dark:text-white">
          ₹{value}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;