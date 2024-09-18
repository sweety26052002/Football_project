import DashboardStyles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
import useCurrentLocation from "../../utils/useCurrentLocation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const Dashboard = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };

  const location = useCurrentLocation();
  console.log(location);

  return (
    <>
      <div className={DashboardStyles.container}>
        <Header />
        <Outlet />
        <Footer />
       
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>

      
    </>
  );
};

export default Dashboard;
