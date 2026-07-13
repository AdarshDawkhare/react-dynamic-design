import { Link } from "react-router-dom";

function LayoutList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Layouts</h1>

          <p className="text-slate-500">Manage display layouts.</p>
        </div>

        <Link
          to="/DisplayManagement/layouts/new"
          className="rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-black"
        >
          Create Layout
        </Link>
      </div>

      <div className="rounded-xl border bg-white p-10 shadow-sm">
        <div className="text-center">
          <h2 className="text-xl font-semibold">No layouts available</h2>

          <p className="mt-2 text-slate-500">
            Click "Create Layout" to start designing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LayoutList;
