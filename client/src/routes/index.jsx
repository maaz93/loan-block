import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import BorrowPage from "views/BorrowPage/BorrowPage.jsx";

var indexRoutes = [
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/comp", name: "Components", component: Components },
  { path: "/borrow", name: "BorrowPage", component: BorrowPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
