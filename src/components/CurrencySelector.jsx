import React from "react";
import { ChevronDownIcon } from "../assets/icons/icons";

const CURRENCIES = ["USD, $", "INR, ₹"];

const CurrencySelector = ({ currency, setCurrency, className = "", openUp = false }) => {
  const textStyle = "font-fondamento text-black text-[16px]";

  return (
    <div className={`group relative w-[90px] lg:w-[100px] h-[41px] border border-[#aca09a] cursor-pointer bg-[#F0E5DB] ${className}`}>
      <div className="w-full h-full flex items-center justify-between px-3">
        <span className={textStyle}>{currency}</span>
        <ChevronDownIcon className="w-3 h-3 text-black" />
      </div>
      <div className={`hidden group-hover:block absolute -left-[1px] w-[calc(100%+2px)] bg-white border border-[#aca09a] z-50 ${openUp ? "bottom-full mb-[1px]" : "top-full"}`}>
        {CURRENCIES.map((c) => (
          <div
            key={c}
            onClick={() => setCurrency(c)}
            className={`px-3 py-2 cursor-pointer font-fondamento text-[15px] border-b border-[#eee] last:border-none ${
              currency === c
                ? "bg-[#001f33] text-[#FFFFFF]"
                : "text-black hover:bg-gray-100"
            }`}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
