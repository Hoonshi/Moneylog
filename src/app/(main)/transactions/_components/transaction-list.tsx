//무한스크롤 적용

import { Utensils, Car, Repeat, Package, Wallet } from "lucide-react";
import { TransactionItem } from "./transaction-item";

const DATE_GROUPS = [
  {
    label: "2월 20일 목요일",
    items: [
      {
        Icon: Utensils,
        name: "스타벅스 강남점",
        cat: "식비",
        memo: "아메리카노",
        amount: "-₩6,500",
        neg: true,
      },
      {
        Icon: Utensils,
        name: "김밥천국",
        cat: "식비",
        memo: "점심",
        amount: "-₩8,000",
        neg: true,
      },
    ],
  },
  {
    label: "2월 19일 수요일",
    items: [
      {
        Icon: Car,
        name: "카카오택시",
        cat: "교통",
        memo: "",
        amount: "-₩12,000",
        neg: true,
      },
      {
        Icon: Repeat,
        name: "넷플릭스",
        cat: "구독",
        memo: "월 구독료",
        amount: "-₩17,000",
        neg: true,
      },
    ],
  },
  {
    label: "2월 18일 화요일",
    items: [
      {
        Icon: Package,
        name: "쿠팡",
        cat: "쇼핑",
        memo: "생필품",
        amount: "-₩32,000",
        neg: true,
      },
    ],
  },
  {
    label: "2월 15일 토요일",
    items: [
      {
        Icon: Wallet,
        name: "월급",
        cat: "급여",
        memo: "2월 급여",
        amount: "+₩3,200,000",
        neg: false,
      },
    ],
  },
];

export function TransactionList() {
  return (
    <div className="space-y-3">
      {DATE_GROUPS.map((group) => (
        <div key={group.label}>
          <p className="text-[11px] font-semibold text-gray-500 mb-2">
            {group.label}
          </p>
          <div className="bg-white rounded-xl overflow-hidden">
            {group.items.map((tx, i) => (
              <TransactionItem
                key={i}
                {...tx}
                isLast={i === group.items.length - 1}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
