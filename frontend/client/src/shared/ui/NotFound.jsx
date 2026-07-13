import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-125 items-center justify-center">
      <div className="space-y-5 text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="text-slate-500">Page not found.</p>

        <Link to="/" className="rounded-lg bg-slate-900 px-5 py-3 text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
