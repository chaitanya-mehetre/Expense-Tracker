import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const isIncome = type === "income";
  const amountColorClass = isIncome
    ? "bg-green-50 text-green-600"
    : "bg-red-50 text-red-600";

  return (
    <div className="group relative flex items-center gap-3 sm:gap-4 mt-2 p-3 rounded-xl transition-all hover:bg-gray-50 border border-transparent hover:border-gray-100 dark:hover:bg-slate-800 dark:hover:border-slate-700">
      {/* Icon Container */}
      <div className="w-11 h-11 flex shrink-0 items-center justify-center text-xl text-gray-600 bg-gray-100 rounded-full overflow-hidden">
        {icon ? (
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        ) : (
          <LuUtensils size={20} />
        )}
      </div>
      <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-800 dark:text-slate-100 font-semibold truncate">
            {title}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5 truncate">{date}</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {!hideDeleteBtn && (
            <button
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
              onClick={onDelete}
              title="Delete Transaction"
            >
              <LuTrash2 size={16} />
            </button>
          )}

          <div
            className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg whitespace-nowrap ${amountColorClass}`}
          >
            <span className="text-xs font-bold">
              {isIncome ? "+" : "-"} ₹{amount}
            </span>
            {isIncome ? (
              <LuTrendingUp size={14} />
            ) : (
              <LuTrendingDown size={14} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
