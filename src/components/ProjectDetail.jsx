import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">프로젝트 상세 페이지</h1>
      <p>프로젝트 ID: {id}</p>
      {/* 프로젝트 상세 정보를 여기에 추가하세요 */}
    </div>
  );
};

export default ProjectDetail;
