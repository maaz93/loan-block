import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import BorrowPage from "views/BorrowPage/BorrowPage.jsx";
import ReviewPage from "views/ReviewPage/ReviewPage.jsx";

var indexRoutes = [
  { path: "/borrow", name: "BorrowPage", component: BorrowPage },
  { path: "/review", name: "ReviewPage", component: ReviewPage },
  { path: "/comp", name: "Components", component: Components },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
