// import React from 'react'; // 사용되지 않으므로 제거

export const projects = [
  {
    id: 1,
    title: "강원도 속초 게스트하우스",
    location: "속초시 중앙로",
    totalAmount: "3",
    minAmount: "150",
    monthlyReturn: "2,000",
    period: "3",
    progress: 60,
    dday: 7,
    imageSrc: require("../assets/images/projects/sokcho-guesthouse.jpg.jpg"),
    description: "속초 중심가에 위치한 프리미엄 게스트하우스",
    features: ["해변까지 도보 5분", "옥상 테라스", "공용 주방"],
    rooms: 12,
    size: "198㎡",
    expectedReturn: "8.5%",
    detailImages: [
      require("../assets/images/projects/sokcho-guesthouse.jpg.jpg"),
      // 추가 이미지들...
    ],
  },
  {
    id: 2,
    title: "제주도 서귀포 풀빌라",
    location: "서귀포시 중문동",
    totalAmount: "5",
    minAmount: "250",
    monthlyReturn: "3,000",
    period: "3",
    progress: 45,
    dday: 14,
    imageSrc: require("../assets/images/projects/seogwipo-villa.jpg.jpg"),
    description: "중문관광단지 인근 프라이빗 풀빌라",
    features: ["프라이빗 풀", "오션뷰", "BBQ 시설"],
    rooms: 8,
    size: "297㎡",
    expectedReturn: "9.2%",
    detailImages: [
      require("../assets/images/projects/seogwipo-villa.jpg.jpg"),
      // 추가 이미지들...
    ],
  },
  {
    id: 3,
    title: "경주 한옥 스테이",
    location: "경주시 황남동",
    totalAmount: "2",
    minAmount: "180",
    monthlyReturn: "1,000",
    period: "3",
    progress: 85,
    dday: 3,
    imageSrc: require("../assets/images/projects/hanok.webp"),
    description: "경주 황리단길 인근 전통 한옥 스테이",
    features: ["전통 한옥", "개별 욕실", "한복 체험"],
    rooms: 6,
    size: "165㎡",
    expectedReturn: "7.8%",
    detailImages: [
      require("../assets/images/projects/hanok.webp"),
      // 추가 이미지들...
    ],
  },
];

// 추후 프로젝트 관련 유틸리티 함수나 컴포넌트를 추가할 수 있음
export const getProjectById = (id) => {
  return projects.find((project) => project.id === parseInt(id));
};
