import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user, loading } = useContext(AuthContext);
  //   console.log(user.email)
  const [axiosSecure] = useAxiosSecure();
  const { data: myClass = [] } = useQuery({
    queryKey: ["myClass", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myclass/${user.email}`);
      return res.data;
    },
  });


  

  return (
    <div>
      <Helmet>
        <title>My Cart| DashBoard | Dance Studio</title>
      </Helmet>

      <div className="text-rose-500 w-96 bg-black text-center  mx-auto my-12">
        <h1 className=" border-t-2 border-b-2 border-rose-500 p-4 font-bold text-3xl uppercase ">
          my class
        </h1>
      </div>
      <h2 className=" my-6 font-bold text-xl">Total class: {myClass.length}</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            {/* head */}
            <thead className="bg-rose-500">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Enrolled</th>
                <th>Feedback</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {myClass?.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={row.Image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{row.Name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">${row.Price}</td>
                  <td className="font-bold ">{row.Status}</td>
                  <td className="font-bold">{row.EnrollSeats}</td>
                  <th>
                    <button className="btn bg-rose-500 btn-xs px-3">
                      Feedback
                    </button>
                  </th>
                  <th>
                    <Link to={`/updateclass/${row._id}`}>
                      <button className="btn bg-rose-500 btn-xs">Update</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
