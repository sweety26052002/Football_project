import { Suspense, lazy, FunctionComponent, ComponentProps } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import { isUserLoggedIn } from "../utils/isUserLoggedIn";

// layouts
import DashboardLayout from "../pages/Dashboard/Dashboard";
import NationalTeamDynamics from "../pages/NationalTeamDynamics/NationalTeamDynamics";
import ClubsLeaguesEcosystem from "../pages/ClubsLeaguesEcosystem/ClubsLeaguesEcosystem";

const Loadable =
  (Component: FunctionComponent) =>
  (props: ComponentProps<FunctionComponent>) => {
    return (
      <Suspense fallback={"Loading..."}>
        <Component {...props} />
      </Suspense>
    );
  };

const Home = Loadable(lazy(() => import("../pages/Home/Home")));
const ClubListing = Loadable(
  lazy(() => import("../pages/ClubsListing/ClubsListing"))
);
const ClubDetails = Loadable(
  lazy(() => import("../pages/ClubDetails/ClubDetails"))
);
const Page404 = Loadable(lazy(() => import("../pages/404/Error404")));
const TournamentListing = Loadable(
  lazy(() => import("../pages/TournamentListing/TournamentListing"))
);
const TournamentDetails = Loadable(
  lazy(() => import("../pages/TournamentDetails/TournamentDetails"))
);
const ClubRegistration = Loadable(
  lazy(() => import("../pages/ClubRegistration/ClubRegustration"))
);
// const Login = Loadable(lazy(() => import("../pages/Login/Login")));
// const Signup = Loadable(lazy(() => import("../pages/SignUp/SignUp")));

export default function Router() {
  // const isLoggedIn = isUserLoggedIn();
  return useRoutes([
    // isLoggedIn
    //   ?
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "*", element: <Navigate to="/" replace /> },
        { path: "/", element: <Home /> },
        { path: "clubs", element: <ClubListing /> },
        { path: "club-details/:id", element: <ClubDetails /> },
        { path: "tournaments", element: <TournamentListing /> },
        { path: "tournament-details/:id", element: <TournamentDetails /> },
        {
          path: "club-registration",
          element: <ClubRegistration />,
        },
        {
          path:"nationalteamdynamics",element:<NationalTeamDynamics/>
        },
        {
          path:"clubsleaguesecosystem",element:<ClubsLeaguesEcosystem/>
        }
      ],
    },
    // : {
    //     path: "/",
    //     children: [
    //       { path: "login", element: <Login /> },
    //       { path: "signup", element: <Signup /> },
    //       { path: "*", element: <Navigate to="/login" replace /> },
    //     ],
    //   },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);
}
