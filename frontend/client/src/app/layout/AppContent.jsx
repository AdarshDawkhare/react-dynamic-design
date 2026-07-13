import { Outlet } from "react-router-dom";

import Breadcrumbs from "../../shared/ui/Breadcrumbs";

function AppContent() {
  return (
    <main className="flex-1 overflow-auto bg-slate-100">
      <div className="space-y-5 p-6">
        <Breadcrumbs />
        <Outlet />
      </div>
    </main>
  );
}

export default AppContent;
