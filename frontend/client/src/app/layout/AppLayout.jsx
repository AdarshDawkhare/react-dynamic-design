import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      Header
      <hr />
      Sidebar
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
