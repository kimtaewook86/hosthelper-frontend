import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          로그인
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          아직 회원이 아니신가요?{" "}
          <button
            onClick={() => (window.location.href = "/register")}
            className="font-medium text-green-600 hover:text-green-500"
          >
            회원가입
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                이메일
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  로그인 상태 유지
                </label>
              </div>

              <div className="text-sm">
                <button
                  onClick={() => (window.location.href = "/forgot-password")}
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  비밀번호 찾기
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                로그인
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">간편 로그인</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full py-3 px-4 flex items-center justify-center bg-[#FEE500] text-black rounded-md hover:bg-[#FDD800] transition-colors duration-200">
                <img
                  className="h-5 w-5 mr-2"
                  src="/kakao-icon.png"
                  alt="Kakao"
                />
                KakaoTalk으로 로그인
              </button>
              <button className="w-full py-3 px-4 flex items-center justify-center bg-[#03C75A] text-white rounded-md hover:bg-[#02B350] transition-colors duration-200">
                <img
                  className="h-5 w-5 mr-2"
                  src="/naver-icon.png"
                  alt="Naver"
                />
                Naver로 로그인
              </button>
              <button className="w-full py-3 px-4 flex items-center justify-center bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200">
                <img
                  className="h-5 w-5 mr-2"
                  src="/google-icon.png"
                  alt="Google"
                />
                Google로 로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
