'use client';

import { useState } from 'react';
import { DEFAULT_CATEGORIES } from '@/constants/categories';

interface BudgetFormProps {
  onClose?: () => void;
}

export function BudgetForm({ onClose }: BudgetFormProps) {
  const [categoryId, setCategoryId] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-medium text-gray-600 mb-1.5 block">카테고리</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">카테고리 선택...</option>
          {DEFAULT_CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs font-medium text-gray-600 mb-1.5 block">예산 금액</label>
        <div className="border border-gray-200 rounded-lg px-3 py-2.5 flex items-center gap-2">
          <span className="text-gray-400 text-sm">₩</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            className="flex-1 text-sm text-gray-700 outline-none placeholder:text-gray-300"
          />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 bg-blue-500 text-white px-3 py-1.5 text-sm rounded-md font-medium hover:bg-blue-600">
          저장
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-gray-100 text-gray-700 px-3 py-1.5 text-sm rounded-md font-medium hover:bg-gray-200"
        >
          취소
        </button>
      </div>
    </div>
  );
}
