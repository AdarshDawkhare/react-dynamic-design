import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function title(value) {
  return value
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim();
}

function Breadcrumbs() {
  const { pathname } = useLocation();

  const parts = pathname.split("/").filter(Boolean);

  if (!parts.length) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500">
      <Link to="/" className="hover:text-black">
        Home
      </Link>

      {parts.map((part, index) => {
        const url = "/" + parts.slice(0, index + 1).join("/");

        return (
          <div key={url} className="flex items-center gap-2">
            <ChevronRight size={14} />

            <Link to={url} className="hover:text-black">
              {title(part)}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
