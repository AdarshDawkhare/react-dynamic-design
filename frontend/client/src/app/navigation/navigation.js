import {
  LayoutDashboard,
  Monitor,
  Plane,
  Users,
  ShieldCheck,
} from "lucide-react";

import RoutePaths from "../routing/RoutePaths";

const navigation = [
  {
    title: "Display Management",
    icon: Monitor,
    children: [
      {
        title: "Layouts",
        path: RoutePaths.DISPLAY_LAYOUTS,
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Flight Management",
    icon: Plane,
    children: [
      {
        title: "Flights",
        path: RoutePaths.FLIGHTS,
        icon: Plane,
      },
    ],
  },

  {
    title: "User Management",
    icon: Users,
    children: [
      {
        title: "Users",
        path: RoutePaths.USERS,
        icon: Users,
      },
    ],
  },

  {
    title: "Admin Functions",
    icon: ShieldCheck,
    children: [
      {
        title: "Administration",
        path: RoutePaths.ADMIN,
        icon: ShieldCheck,
      },
    ],
  },
];

export default navigation;
