"use client";

import { useState } from "react";
import { useSignUp } from "@/hooks/useAuth";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signUp = useSignUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setPasswordError("");
    signUp.mutate({ email, password, name });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-full w-full max-w-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <div className="flex-1 bg-main flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-xl font-bold">MONEYLOG</h1>
          <p className="text-blue-100 text-xs mt-2 text-center">
            가입하고 지금 바로 시작하세요
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-gray-800">회원가입</h2>
              <p className="text-xs text-gray-400 mt-1">새 계정을 만드세요</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs text-gray-600 mb-1 block">이름</label>
                <div className="border border-gray-200 rounded-lg px-3 py-2">
                  <input
                    className="text-sm text-gray-700 w-full bg-transparent focus:outline-none"
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  이메일
                </label>
                <div className="border border-gray-200 rounded-lg px-3 py-2">
                  <input
                    className="text-sm text-gray-700 w-full bg-transparent focus:outline-none"
                    placeholder="email@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  비밀번호
                </label>
                <div className="border border-gray-200 rounded-lg px-3 py-2">
                  <input
                    className="text-sm text-gray-700 w-full bg-transparent focus:outline-none"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  비밀번호 확인
                </label>
                <div className="border border-gray-200 rounded-lg px-3 py-2">
                  <input
                    className="text-sm text-gray-700 w-full bg-transparent focus:outline-none"
                    placeholder="••••••••"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {passwordError && (
                  <p className="text-xs text-red-500 mt-1">{passwordError}</p>
                )}
              </div>

              {signUp.error && (
                <p className="text-xs text-red-500">{signUp.error.message}</p>
              )}

              <button
                type="submit"
                disabled={signUp.isPending}
                className="w-full bg-main text-white px-3 py-1.5 text-sm rounded-md font-medium text-center cursor-pointer hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {signUp.isPending ? "가입 중..." : "가입하기"}
              </button>
            </form>

            <p className="text-xs text-center text-gray-400">
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="text-blue-500">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
