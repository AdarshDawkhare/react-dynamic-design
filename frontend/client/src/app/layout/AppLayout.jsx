import { useState } from "react";

import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:flex">
        <AppSidebar />
      </div>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />

          <div className="fixed left-0 top-0 z-50 h-screen lg:hidden">
            <AppSidebar mobile close={() => setOpen(false)} />
          </div>
        </>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader onMenuClick={() => setOpen(true)} />

        <AppContent />
      </div>
    </div>
  );
}

export default AppLayout;
