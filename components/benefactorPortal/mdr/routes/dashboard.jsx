// import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/benefactor/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
  },
  {
    path: "/benefactor/icons",
    sidebarName: "Services",
    navbarName: "Services",
    icon: BubbleChart,
  },
  {
    path: "/benefactor/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
  },
  //
  {
    path: "/benefactor/typography",
    sidebarName: "Treatment Records",
    navbarName: "Treatment Records",
    icon: LibraryBooks,
  },
  // {
  //   path: "/benefactor/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  // },
  {
    path: "/benefactor/notifications",
    sidebarName: "Healtcare Blog",
    navbarName: "Healtcare Blog",
    icon: Notifications,
  },
  {
    path: "/benefactor/table",
    sidebarName: "Chat",
    navbarName: "Chat",
    icon: ContentPaste,
  },
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
