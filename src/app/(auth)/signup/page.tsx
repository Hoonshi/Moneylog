"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "@/hooks/useAuth";
import Link from "next/link";
import { SignupFormValues, signupSchema } from "@/schema/signupSchema";

export default function SignupPage() {
  const signUp = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormValues) => {
    signUp.mutate({
      email: data.email,
      password: data.password,
      name: data.name,
    });
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label className="text-xs text-gray-600 mb-1 block">이름</label>
                <div className="border border-gray-200 rounded-lg px-3 py-2">
                  <input
                    className="text-sm text-gray-700 w-full bg-transparent focus:outline-none"
                    placeholder="홍길동"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
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
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
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
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
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
                    {...register("confirmPassword")}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
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
