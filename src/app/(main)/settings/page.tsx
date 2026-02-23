import { MobileShell } from '@/components/layout/mobile-shell';
import { ProfileSection } from './_components/profile-section';

const MANAGE_MENU = [
  { icon: '📁', label: '카테고리 관리', sub: '13개' },
  { icon: '🔄', label: '반복 거래 관리', sub: '3개' },
];

export default function SettingsPage() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <MobileShell title="설정">
        <div className="space-y-4 pt-2">
          <ProfileSection />

          {/* 관리 */}
          <div className="bg-white rounded-xl overflow-hidden">
            <p className="px-4 pt-3 pb-1.5 text-[10px] font-semibold text-gray-400 uppercase">관리</p>
            {MANAGE_MENU.map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-50">
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs text-gray-700 flex-1">{item.label}</span>
                <span className="text-[10px] text-gray-400 mr-1">{item.sub}</span>
                <span className="text-xs text-gray-300">›</span>
              </div>
            ))}
          </div>

          {/* 앱 설정 */}
          <div className="bg-white rounded-xl overflow-hidden">
            <p className="px-4 pt-3 pb-1.5 text-[10px] font-semibold text-gray-400 uppercase">앱 설정</p>
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-50">
              <span className="text-sm">🌙</span>
              <span className="text-xs text-gray-700 flex-1">다크 모드</span>
              <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm" />
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-50">
              <span className="text-sm">🔔</span>
              <span className="text-xs text-gray-700 flex-1">알림 설정</span>
              <span className="text-xs text-gray-300">›</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5">
              <span className="text-sm">📤</span>
              <span className="text-xs text-gray-700 flex-1">데이터 내보내기</span>
              <span className="text-xs text-gray-300">›</span>
            </div>
          </div>

          {/* 로그아웃 */}
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3.5">
              <span className="text-sm">🚪</span>
              <span className="text-xs text-red-500 flex-1">로그아웃</span>
            </div>
          </div>

          <p className="text-center text-[10px] text-gray-300 pt-2">MoneyLog v1.0.0</p>
        </div>
      </MobileShell>
    </div>
  );
}
