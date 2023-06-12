import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side font-serif uppercase">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 h-full bg-rose-500 text-white">
            {/* Sidebar content here */}

            <div className="text-center mt-8 mb-12">
              <h1 className="text-black text-3xl font-bold">Dance Studio</h1>
              <h4 className="text-lg font-semibold text-black">dance class</h4>
            </div>
            <li>
              <Link to="/dashboard/mycarts">
               
                <BsCart4 size={20}></BsCart4>my cart
              </Link>
            </li>
            <li>
              <Link to='/dashboard/enrollclass'>
                <BsFillCalendarCheckFill size={18}></BsFillCalendarCheckFill>{" "}
                Enroll class
              </Link>
            </li>
            <li>
              <Link to='/dashboard/paymentHistory'>
                <BsPaypal size={18}></BsPaypal> payment history
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
