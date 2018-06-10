import LandingPage from "views/LandingPage/LandingPage.jsx";
import BorrowPage from "views/BorrowPage/BorrowPage.jsx";
import ReviewPage from "views/ReviewPage/ReviewPage.jsx";
import LendingPage from "views/LendingPage/LendingPage.jsx";

var indexRoutes = [
  { path: "/borrow", name: "BorrowPage", component: BorrowPage },
  { path: "/review", name: "ReviewPage", component: ReviewPage },
  { path: "/lend", name: "LendingPage", component: LendingPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
