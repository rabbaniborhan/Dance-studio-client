import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/UseCart";
import useInstructor from "../../../Hooks/useInstructor";
import useAdmin from "../../../Hooks/useAdmin";

const Card = ({ item }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {
    AvailableSeats,
    Price,
    Name,
    Image,
    InstructorName,
   
    EnrollSeats,
  } = item;

  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    const {
      Name,
      Image,
      Price,
      _id,
      InstructorName,
      AvailableSeats,
      EnrollSeats,
      TotalSeats,
    } = item;

    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        Name,
        Image,
        Price,
        InstructorName,
        AvailableSeats,
        EnrollSeats,
        TotalSeats,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add to Cart successfull",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="">
      <div className="card w-full mx-4 md:w-72 bg-base-100 mb-10 shadow-xl m group">
        <figure className="relative">
          <p className=" absolute top-0 right-0 font-semibold  bg-black p-2  text-pink-600">
            $ {Price}
          </p>
          <img
            className="w-full h-52 group-hover:scale-110 transition"
            src={Image}
            alt="Shoes"
          />
        </figure>
        <div className={`card-body ${AvailableSeats==0? 'bg-red-500': 'bg-white'}   h-1/2`}>
          <h2 className="card-title text-purple-600">ClassName: <span className="text-xl">{Name}</span></h2>
          <h4 className="text-lg text-purple-600 font-semibold">
            {InstructorName}
          </h4>

          <p>Total Enroll :{EnrollSeats}</p>

          <p className="text-green-400">Available Seat:{AvailableSeats}</p>
          <div className="card-actions justify-end">
            <button disabled={AvailableSeats==0 ||isAdmin||isInstructor}
              onClick={() => handleAddToCart(item)}
              className="btn hover:bg-pink-700 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
            >
              {" "}
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
