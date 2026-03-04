# MoneyLog - 나만의 가계부

> 수입/지출 관리, 예산 설정, 리포트 시각화까지 한 곳에서 관리하는 개인 재무 관리 웹 애플리케이션

<br/>

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [기술 스택](#기술-스택)
3. [주요 기능](#주요-기능)
4. [아키텍처 & 설계](#아키텍처--설계)
5. [기술 사용 결정](#기술-사용-결정)
6. [프로젝트 구조](#프로젝트-구조)

<br/>

## 프로젝트 소개

**MoneyLog**는 개인의 수입과 지출을 체계적으로 관리할 수 있는 웹 애플리케이션입니다.

거래 내역 기록, 카테고리별 예산 설정, 캘린더 뷰, 월별 트렌드 리포트 등의 기능을 통해 사용자가 자신의 재무 상태를 한눈에 파악하고 더 나은 소비 습관을 형성할 수 있도록 돕습니다.

- **개발 기간**: 2026.02 ~
- **개발 인원**: 1인 (개인 프로젝트)

<br/>

## 기술 스택

| 분류 | 기술 |
| --- | --- |
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript 5 |
| **상태 관리** | TanStack React Query 5 (서버 상태), Zustand 5 (클라이언트 상태) |
| **폼 & 유효성 검증** | React Hook Form 7, Zod 4 |
| **스타일링** | Tailwind CSS 4 |
| **차트** | Recharts 3 |
| **데이터베이스 & 인증** | Supabase (PostgreSQL + Auth) |
| **기타 라이브러리** | date-fns, Lucide React, react-day-picker, react-hot-toast, react-error-boundary |

<br/>

## 주요 기능

### 1. 대시보드
- 월별 수입/지출/잔액 요약 카드
- 카테고리별 지출 비율 차트 (Recharts)
- 최근 거래 내역 리스트

### 2. 거래 관리
- 수입/지출 내역 CRUD
- 카테고리, 날짜, 거래 유형별 필터링 & 정렬
- 페이지네이션 처리
- React Hook Form + Zod를 활용한 폼 유효성 검증

### 3. 예산 관리
- 지출 카테고리별 월간 예산 설정 (insert, update 통합)
- 예산 대비 실제 지출 Progress Bar 시각화
- 초과 시 색상 경고 (50% 이상 빨간색)

### 4. 캘린더 뷰
- DayPicker 라이브러리 스타일 커스텀하여 사용
- 월간 달력에 일별 수입/지출 합계 표시
- 날짜 선택 시 해당일 거래 내역 상세 조회

### 5. 리포트 & 분석
- 최근 6개월 월별 트렌드 차트
- 월 내 일별 지출 추이
- 이번 달 Top 5 지출 항목
- 전월 대비 비교 분석

### 6. 설정
- 커스텀 카테고리 관리 (이모지 아이콘, 색상 선택)
- 프로필 정보 수정
- 로그아웃

### 7. 인증
- 이메일/비밀번호 기반 회원가입 & 로그인
- Supabase Auth를 통한 세션 관리 (HTTP-only 쿠키)
- Middleware를 통한 인증 상태 검증

<br/>

## 아키텍처 & 설계

### 데이터 흐름

```
[Server Component]
  │  Supabase Server Client로 데이터 prefetch
  │  QueryClient에 dehydrate하여 캐시 주입
  ▼
[HydrationBoundary]
  │  서버에서 가져온 데이터를 클라이언트에 전달
  ▼
[Client Component]
  │  React Query 커스텀 훅으로 캐시된 데이터 사용
  │  Mutation 시 관련 쿼리 자동 무효화 & 리페치
  ▼
[Zustand Store]
     월/년도 네비게이션 등 UI 상태 관리
```

<br/>

## 기술 사용 결정

### 1. React Hook Form + Zod (제어 → 비제어 컴포넌트 전환)

**문제**: 기존 `useState` 기반 제어 컴포넌트 방식은 상태마다 에러 로직이 별도 함수로 분산되어 유지보수가 어려웠습니다.

**결정**: React Hook Form의 비제어 컴포넌트 방식과 Zod 스키마 기반 유효성 검증을 도입했습니다.

**효과**:
- 스키마 하나로 타입 추론 + 유효성 검증 통합 → 별도 validate 함수 제거
- 코드 가독성 및 유지보수성 향상

### 2. Server Component + React Query Hydration

**문제**: CSR만 사용할 경우 초기 로딩 시 빈 화면이 표시되어 Next.js의 이점을 활용하지 못함

**결정**: Server Component에서 데이터를 prefetch한 후 `HydrationBoundary`로 클라이언트에 전달하는 패턴을 적용했습니다.

**효과**:
- 초기 로딩 시 데이터가 포함된 완성된 HTML 전달
- staleTime 설정을 통해 클라이언트에서 불필요한 API 재호출 없이 캐시된 데이터 즉시 사용
- 이후 사용자 인터랙션 시 React Query가 백그라운드 리페치 처리

### 3. Zustand을 활용한 날짜 상태 관리

**문제**: 대시보드, 예산, 캘린더, 리포트 등 여러 페이지에서 공통으로 월/년도 상태를 공유해야 합니다.

**결정**: Context API 대신 Zustand을 채택했습니다.

**효과**:
- selector로 구독 컴포넌트만 리렌더 범위를 한정
- Provider를 작성하지 않아도 되며 어디서든 `useDateStore()`로 접근 가능

### 4. Supabase Client 서버/브라우저 분리

**문제**: Server Component에서 브라우저용 Supabase Client를 사용하면 빈 데이터가 캐시되는 버그가 발생했습니다.

**결정**: 서버용(`createServerClient`)과 브라우저용(`createBrowserClient`) 클라이언트를 분리하고, API 함수에 클라이언트를 인자로 주입하는 패턴을 적용했습니다.

**효과**:
- 서버/클라이언트 환경에 맞는 인증 정보 처리 (쿠키 vs 브라우저 세션)
- 동일 API 함수를 양쪽 환경에서 재사용 가능
- 빈 데이터 캐시 버그 해결

<br/>

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # 인증 페이지 (로그인, 회원가입)
│   └── (main)/             # 보호된 메인 페이지
│       ├── dashboard/      # 대시보드
│       ├── budget/         # 예산 관리
│       ├── calendar/       # 캘린더 뷰
│       ├── reports/        # 리포트
│       └── settings/       # 설정
│
├── apis/                   # Supabase API 호출 함수
│   ├── transaction/        # 거래 CRUD
│   ├── budget/             # 예산 CRUD
│   ├── dashboard/          # 대시보드 집계
│   ├── categories/         # 카테고리 CRUD
│   ├── calendar/           # 캘린더 일별 합계
│   └── reports/            # 리포트 트렌드
│
├── hooks/
│   ├── query/              # React Query 조회 훅
│   ├── mutation/           # React Query 변경 훅
│   └── useAuth.ts          # 인증 관련 훅
│
├── components/
│   ├── layout/             # Sidebar, MobileNav, Header
│   ├── skeleton/           # Suspense 로딩 스켈레톤 UI
│   └── ui/                 # 공통 UI 컴포넌트
│
├── lib/
│   ├── supabase/           # Supabase 클라이언트 (Server / Browser)
│   ├── queryKey.ts         # React Query 키 중앙 관리
│   └── utils.ts            # 유틸리티 함수
│
├── schema/                 # Zod 유효성 검증 스키마
├── stores/                 # Zustand 스토어
├── types/                  # TypeScript 타입 정의
├── constants/              # 상수 (카테고리, 라우트 등)
└── middleware.ts            # Next.js Middleware (인증 상태 검증)
```
