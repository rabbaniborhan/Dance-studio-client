import { useQuery } from "react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const StudentHome = () => {
  const { user,loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: mypayment = [] } = useQuery({
    queryKey: ["mypayment", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/mypayment/${user.email}`);
      return res.data;
    },
  });
  
  const myEnroll=mypayment.filter(item=>item.email==user.email)
 
  return (
    <div className="w-full m-10">
      <div className="">
        {" "}
        <h1 className="text-3xl font-extrabold font-serif  items-center inline-flex  m-10 text-black">
          Hi, Welcome Back{" "}
          <h1 className=" text-rose-500 font-bold text-2xl ml-3">
            {" "}
            {user.displayName}
          </h1>
        </h1>
      </div>

      <div>
        <img
          className="w-44 h-44 mx-auto rounded-full border-4 border-black "
          src={user.photoURL}
          alt=""
        />
        <h1 className="text-center font-bold text-3xl text-rose-500">
          {user.displayName}
        </h1>
      </div>
      <div className="w-3/5 my-10 h-44 bg-gradient-to-r mx-auto  to-rose-300 from-rose-600 rounded-lg shadow-md">
        <h2 className="font-bold pt-20 text-2xl uppercase text-center text-white ">
         
          Total Enroll class : {myEnroll.length}
        </h2>
      </div>
    </div>
  );
};

export default StudentHome;
