import React from "react";
import { Home } from "lucide-react";

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-white">
    <div className="flex items-center gap-2">
      <Home className="w-6 h-6 text-green-600" />
      <span className="text-xl font-bold">HostHelper</span>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-gray-600 hover:text-gray-800">로그인</button>
      <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        회원가입
      </button>
    </div>
  </header>
);

export default Header;
