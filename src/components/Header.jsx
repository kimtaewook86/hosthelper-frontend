import React from "react";
import { Home, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "투자하기", path: "/invest" },
    { name: "프로젝트", path: "/projects" },
    { name: "이용안내", path: "/guide" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* 로고와 드롭다운 */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <Home className="w-6 h-6 text-green-600" />
              <span className="text-xl font-bold">HostHelper</span>
              <ChevronDown className="w-5 h-5 text-gray-600 transition-transform duration-200 group-hover:rotate-180" />
            </div>

            {/* 드롭다운 메뉴 */}
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 transition-all duration-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 로그인/회원가입 버튼 */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <button className="text-gray-600 hover:text-gray-800 transition-colors">
                로그인
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                회원가입
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
