import { Bell, Menu, Search, UserCircle2 } from "lucide-react";

function AppHeader({ onMenuClick }) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg border p-2 lg:hidden"
        >
          <Menu size={18} />
        </button>

        <div>
          <h2 className="text-lg font-semibold">
            Flight Information Display System
          </h2>

          <p className="text-sm text-slate-500">React Designer</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg border p-2 hover:bg-slate-100">
          <Search size={18} />
        </button>

        <button className="rounded-lg border p-2 hover:bg-slate-100">
          <Bell size={18} />
        </button>

        <button className="flex items-center gap-2 rounded-lg border px-3 py-2 hover:bg-slate-100">
          <UserCircle2 size={22} />

          <span className="hidden md:block">Administrator</span>
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
