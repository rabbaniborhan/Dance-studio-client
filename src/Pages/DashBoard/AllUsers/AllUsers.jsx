import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure]= useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleAdmin = (id) => {
    fetch(`https://dance-class-server.vercel.app/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This users Now Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleInstructor = (id) => {
    fetch(`https://dance-class-server.vercel.app/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This users Now Instructor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are delete this users",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dance-class-server.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "This User has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>All Users| DashBoard | Dance Studio</title>
      </Helmet>

      <div>
        <div className="text-rose-500 w-96 bg-black text-center  mx-auto my-12">
          <h1 className=" border-t-2 border-b-2 border-rose-500 p-4 font-bold text-3xl uppercase ">
            all users
          </h1>
        </div>
        <div className="  my-6 font-bold text-xl">
          <h2>Total Users: {users.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full text-center">
              {/* head */}
              <thead className="bg-rose-500">
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="font-bold">{row.Name}</div>
                    </td>
                    <td>${row.Email}</td>
                    <td>{row.role}</td>

                    {row.role == "student" ? (
                      <>
                        <button
                          className="btn btn-sm bg-rose-500 my-auto text-center mt-2"
                          onClick={() => handleInstructor(row._id)}
                        >
                          Make Instructor
                        </button>
                      </>
                    ) : row.role == "instructor" ? (
                      <>
                        <button
                          className="btn btn-sm bg-rose-500 my-auto text-center mt-2"
                          onClick={() => handleAdmin(row._id)}
                        >
                          Make Admin
                        </button>
                      </>
                    ) : (
                      <>
                        <h3 className="btn btn-sm bg-green-500 mt-2">Admin</h3>
                      </>
                    )}
                    <th>
                      <button
                        onClick={() => handleDelete(row._id)}
                        className="btn bg-rose-500 btn-xs px-3"
                      >
                        <MdDelete></MdDelete>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
