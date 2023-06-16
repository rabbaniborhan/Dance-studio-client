import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const InstructorHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myClass = [] } = useQuery({
    queryKey: ["myClass", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/myclass/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="w-full">
      <Helmet>
        <title>Instructor Home| DashBoard | Dance Studio</title>
      </Helmet>

      <h1 className="text-3xl text-rose-500 uppercase font-bold m-16">
        Hi, dear Instructor
      </h1>
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
         
          Total class : {myClass.length}
        </h2>
      </div>
    </div>
  );
};

export default InstructorHome;
