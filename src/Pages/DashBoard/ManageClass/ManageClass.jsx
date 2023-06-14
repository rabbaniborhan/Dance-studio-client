import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import Swal from "sweetalert2";


const ManageClass = () => {

    const [axiosSecure]= useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
      const res = await axiosSecure.get("/allclass");
      return res.data;
    });

    const handleApproved = (id) => {
        fetch(`http://localhost:5000/allclassApprove/${id}`, {
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
        console.log(id)
      };


    return (
        <div>
             <Helmet>
        <title>All Class| DashBoard | Dance Studio</title>
      </Helmet>
      <div className="text-rose-500 w-96 bg-black text-center  mx-auto my-12">
          <h1 className=" border-t-2 border-b-2 border-rose-500 p-4 font-bold text-3xl uppercase ">
            all users
          </h1>
        </div>
        <div className="  my-6 font-bold text-xl">
          <h2>Total Class: {classes.length}</h2>
        </div>
        <div className="overflow-x-auto w-full text-center">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-rose-500">
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>InstructorName</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {classes?.map((row, index) => (
                  <tr key={index}>
                    <td>
                        {index+1}
                    </td>
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
                    <td>
                    ${row.Price}
                    </td> 
                    <td>{row.InstructorName}</td>
                    <th>
                        {
                            row?.status =="pendding"?<>panding</>:row.status=='approved'?<> approved</>:<>denied</>
                        }
                    </th>
                    <td>
                       <div className="flex flex-col">
                        <button  className="btn btn-sm bg-rose-500" onClick={()=>handleApproved(row._id)}> Approve</button>
                        <button  className="btn btn-sm bg-rose-500"> Deny</button>
                       </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            
        </div>
    );
};

export default ManageClass;