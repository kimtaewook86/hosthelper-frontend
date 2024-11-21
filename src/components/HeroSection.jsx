import React from "react";
import heroItems from "../assets/images/projects/65eec572af91e.jpg";

const HeroSection = () => (
  <section className="bg-green-600 text-white min-h-[450px] relative px-6 py-12">
    <div className="max-w-7xl mx-auto relative">
      {/* 왼쪽 컨텐츠 */}
      <div className="w-full lg:w-1/2 z-10 relative">
        {/* 타이틀 */}
        <h1 className="text-4xl font-bold mb-2">HostHelper</h1>
        <p className="text-lg mt-2 mb-8">
          빈집의 가치를 재발견하는 크라우드펀딩 플랫폼
        </p>
        {/* 통계 섹션과 버튼을 포함하는 반투명 박스 */}
        <div className="relative">
          {/* 반투명 배경 박스 */}
          <div className="absolute top-0 left-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg w-full lg:w-[480px] h-full z-0" />
          {/* 통계 컨텐츠와 버튼 */}
          <div className="relative z-10 p-8">
            {/* 통계 섹션 */}
            <div className="flex justify-between items-center w-full lg:w-[400px] mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8.5%</div>
                <div className="text-sm text-green-100">평균 수익률</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">150억+</div>
                <div className="text-sm text-green-100">누적 펀딩금액</div>
              </div>
            </div>
            {/* 버튼 */}
            <div className="w-full lg:w-[400px]">
              <button className="w-full bg-white text-green-600 py-3 px-6 rounded-md hover:bg-green-50 transition-colors text-base font-medium">
                크라우드펀딩 시작하기
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 오른쪽 이미지 */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:flex items-center justify-center p-8">
        <div className="relative w-full max-w-[500px] aspect-[4/3] bg-gray-900 rounded-lg shadow-xl">
          <img
            src={heroItems}
            alt="HostHelper Projects"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
