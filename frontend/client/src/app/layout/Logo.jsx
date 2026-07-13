import { MonitorSmartphone } from "lucide-react";

function Logo() {
  return (
    <div className="flex h-16 items-center gap-3 border-b px-6">
      <div className="rounded-lg bg-slate-900 p-2 text-white">
        <MonitorSmartphone size={22} />
      </div>

      <div>
        <h1 className="font-bold tracking-wide">FIDS</h1>
        <p className="text-xs text-slate-500">Dynamic Designer</p>
      </div>
    </div>
  );
}

export default Logo;
