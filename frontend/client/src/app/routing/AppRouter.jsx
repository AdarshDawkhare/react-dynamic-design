import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layout/AppLayout";

import LayoutList from "../../modules/DisplayManagement/Layouts/pages/LayoutList";
import LayoutDesigner from "../../modules/DisplayManagement/Layouts/pages/LayoutDesigner";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LayoutList />} />

          <Route path="/DisplayManagement/layouts" element={<LayoutList />} />

          <Route
            path="/DisplayManagement/layouts/new"
            element={<LayoutDesigner />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
