import { Link, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
import { FaHome,FaUserShield } from "react-icons/fa";
import { MdClass,MdHome } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import useCart from "../../Hooks/UseCart";
const Dashboard = () => {
    const[cart]=useCart();

    const isAdmin= true;
    
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
        <div className="drawer-side  bg-rose-500 font-serif uppercase">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <div className="text-center mt-8 mb-12">
              <h1 className="text-black text-3xl font-bold">Dance Studio</h1>
              <h4 className="text-lg font-semibold text-black">dance class</h4>
            </div>
          <ul className="menu p-4 w-72 h-full bg-rose-500 text-white">
           

            {
              isAdmin?<>
              <li><Link to='/dashboard'> <MdHome size={20}></MdHome> Admin Home</Link></li>
              <li><Link to='/dashboard/allclass'> <BsFillCalendarCheckFill size={18}></BsFillCalendarCheckFill> manage class</Link></li>
              <li><Link to='/dashboard/alluser'><FaUserShield size={18}></FaUserShield> manage user</Link></li>

              </>: <>
               <li>
              <Link to="/dashboard/mycarts" className="flex ">
                <BsCart4 size={20}></BsCart4>my cart
                <span className="badge bg-black text-white border-0">{cart?.length || 0}</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrollclass">
                <BsFillCalendarCheckFill size={18}></BsFillCalendarCheckFill>{" "}
                Enroll class
              </Link>
            </li>
            <li>
              <Link to="/dashboard/paymentHistory">
                <BsPaypal size={18}></BsPaypal> payment history
              </Link>
              </li>
              </>
            }
           

            <div className="divider my-6"></div>

            <li>
              <Link to="/">
                <FaHome size={18}></FaHome>home
              </Link>
            </li>
            <li>
              <Link to="/allclass">
                <MdClass size={18}></MdClass> class
              </Link>
            </li>
            <li>
              <Link to="/allinstructor">
                <GiTeacher size={18}></GiTeacher> Instructor
              </Link>
            </li>
            <div className="divider my-6"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
