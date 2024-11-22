import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, X } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 네비게이션 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            뒤로가기
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-600">{project.description}</p>
        </div>

        {/* 메인 이미지와 진행 상태 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick(project.imageSrc)}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-1">펀딩 진행률</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span>{project.progress}% 달성</span>
                  <span>D-{project.dday}</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-2xl font-bold text-green-600 mb-1">
                  {project.expectedReturn}{" "}
                  <span className="text-base">예상 수익률</span>
                </p>
                <p className="text-gray-600">
                  월 {project.monthlyReturn}만원 예상 수익
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">투자 정보</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">목표 금액</span>
                <span className="font-bold">{project.totalAmount}억원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">최소 투자금액</span>
                <span className="font-bold">{project.minAmount}만원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">운영 기간</span>
                <span className="font-bold">{project.period}년</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">시설 정보</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">객실 수</span>
                <span className="font-bold">{project.rooms}개</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">면적</span>
                <span className="font-bold">{project.size}</span>
              </div>
              <div className="mt-4">
                <h3 className="font-bold mb-2">주요 특징</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 투자하기 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg md:static md:shadow-none md:p-0">
          <div className="max-w-7xl mx-auto">
            <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors">
              투자하기
            </button>
          </div>
        </div>
      </div>

      {/* 이미지 모달 */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="확대보기"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
