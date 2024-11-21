import React from "react";

const ProcessSection = () => {
  const steps = [
    { number: "01", title: "물건 선정", desc: "전문가의 철저한 실사" },
    { number: "02", title: "펀딩 참여", desc: "안전한 펀딩금 관리" },
    { number: "03", title: "리모델링", desc: "전문 시공사 관리" },
    { number: "04", title: "수익 실현", desc: "안정적인 월 수익" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">
          크라우드펀딩 프로세스
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="text-green-600 font-bold mb-2">{step.number}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
