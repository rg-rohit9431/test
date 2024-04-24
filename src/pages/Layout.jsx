import { Outlet, Link, useLocation, useParams } from "react-router-dom";

//component
import Navbar from "../component/Navbar";

const Layout = () => {
  const location = useLocation();
  const {id} = useParams();
  
  const visiblePaths = [
    `/profile/merchant/${id}`,
    '/restaurant',
  ];

  const isVisible = visiblePaths.includes(location.pathname);
  return (
    <div className="w-full h-fit">
       {
        isVisible ? (
          <div>
          </div>
        )
          : (
              <Navbar />
          )
      }
      <Outlet />
    </div>
  )
};

export default Layout;
