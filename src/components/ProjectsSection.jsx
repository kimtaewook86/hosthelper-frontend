import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  title,
  location,
  totalAmount,
  minAmount,
  monthlyReturn,
  period,
  progress,
  dday,
  imageSrc,
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
        모집중
      </span>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
        <span className="text-green-600 font-bold">연 {progress}%</span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">목표 금액</span>
          <span className="font-bold">{totalAmount}억</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">최소 금액</span>
          <span className="font-bold">{minAmount}만원</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">월수익</span>
          <span className="font-bold">{monthlyReturn}만원</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">운영 기간</span>
          <span className="font-bold">{period}년</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>진행률 {progress}%</span>
          <span>D-{dday}</span>
        </div>
      </div>

      <Link
        to={`/project/${id}`}
        className="w-full mt-4 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 block text-center"
      >
        상세보기
      </Link>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section className="py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">진행중인 크라우드펀딩</h2>
        <button className="text-green-600 flex items-center gap-1">
          전체보기 <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="강원도 속초 게스트하우스"
          location="속초시 중앙로"
          totalAmount="3"
          minAmount="150"
          monthlyReturn="2,000"
          period="3"
          progress={60}
          dday={7}
          imageSrc={require("../assets/images/projects/sokcho-guesthouse.jpg.jpg")}
        />
        <ProjectCard
          title="제주도 서귀포 풀빌라"
          location="서귀포시 중문동"
          totalAmount="5"
          minAmount="250"
          monthlyReturn="3,000"
          period="3"
          progress={45}
          dday={14}
          imageSrc={require("../assets/images/projects/seogwipo-villa.jpg.jpg")}
        />
        <ProjectCard
          title="경주 한옥 스테이"
          location="경주시 황남동"
          totalAmount="2"
          minAmount="180"
          monthlyReturn="1,000"
          period="3"
          progress={85}
          dday={3}
          imageSrc={require("../assets/images/projects/hanok.webp")}
        />
      </div>
    </div>
  </section>
);

export default ProjectsSection;
