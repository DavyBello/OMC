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
    path: "/mdr/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    // component: DashboardPage
  },
  {
    path: "/mdr/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    // component: UserProfile
  },
  {
    path: "/mdr/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    // component: TableList
  },
  {
    path: "/mdr/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    // component: Typography
  },
  {
    path: "/mdr/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    // component: Icons
  },
  {
    path: "/mdr/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    // component: Maps
  },
  {
    path: "/mdr/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    // component: NotificationsPage
  },
  // { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
