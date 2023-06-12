import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      <Outlet />
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </label>
    </div>
    <div className="drawer-side bg-[#D1A054]">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80">
        <li>
          <NavLink to="/dashboard/home">
            <FaHome /> User Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/history">
            <FaWallet /> Payment History
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/mycart">
            <FaShoppingCart /> My Cart
            <span className="badge inline badge-secondary">
              +{cart?.length || 0}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/classes"> Our Classes</NavLink>
        </li>
        <li>
          <NavLink to="/instructor">Our Instructor</NavLink>
        </li>
      </ul>
    </div>
  </div>

  );
};

export default Dashboard;


