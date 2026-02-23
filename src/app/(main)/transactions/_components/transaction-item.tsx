interface TransactionItemProps {
  icon: string;
  name: string;
  cat: string;
  memo: string;
  amount: string;
  neg: boolean;
  isLast?: boolean;
}

export function TransactionItem({
  icon, name, cat, memo, amount, neg, isLast,
}: TransactionItemProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${isLast ? '' : 'border-b border-gray-50'}`}>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${neg ? 'bg-gray-50' : 'bg-blue-50'}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-gray-800">{name}</p>
        <p className="text-[10px] text-gray-400">{cat}{memo ? ` · ${memo}` : ''}</p>
      </div>
      <span className={`text-xs font-semibold ${neg ? 'text-red-500' : 'text-blue-600'}`}>
        {amount}
      </span>
    </div>
  );
}
