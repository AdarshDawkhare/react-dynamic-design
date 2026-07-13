import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import LayoutList from "../../modules/display-management/Layouts/pages/LayoutList";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LayoutList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
