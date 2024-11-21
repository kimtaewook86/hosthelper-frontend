import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "진행중인 프로젝트", value: "12개" },
    { label: "평균 순익 보장", value: "19.3만원" },
    { label: "평균 수익 실현 기간", value: "3.2년" },
    { label: "참여자 수", value: "1,200+" },
  ];

  return (
    <div className="relative z-10 -mt-10">
      <div className="bg-white/90 backdrop-blur-lg rounded-lg p-6 shadow-lg max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
