import { BudgetContent } from "./_components/budgetContent";
import BudegetHeader from "./_components/budegetHeader";

export default function BudgetPage() {
  return (
    <div className="h-full flex flex-col bg-gray-50 lg:bg-white relative">
      <BudegetHeader />
      <div className="flex-1 overflow-auto p-4 lg:p-5 pb-24 lg:pb-5">
        <BudgetContent />
      </div>
    </div>
  );
}
