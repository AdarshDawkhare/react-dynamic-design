import { NavLink } from "react-router-dom";
import navigation from "../navigation/navigation";
import Logo from "./Logo";

function AppSidebar({ mobile, close }) {
  return (
    <aside
      className={`
      w-72
      bg-white
      border-r
      flex
      flex-col

      ${mobile ? "h-full" : ""}
      `}
    >
      <Logo />

      <div className="flex-1 overflow-auto py-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="mb-2 px-5 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {section.title}
            </div>

            {section.children.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={close}
                className={({ isActive }) =>
                  `mx-3 mb-1 flex items-center gap-3 rounded-lg px-4 py-3 transition

                  ${
                    isActive ? "bg-slate-900 text-white" : "hover:bg-slate-100"
                  }`
                }
              >
                <item.icon size={18} />

                {item.title}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default AppSidebar;
