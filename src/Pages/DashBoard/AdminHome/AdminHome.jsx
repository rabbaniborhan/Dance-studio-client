import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";



const AdminHome = () => {
    const {user}=useAuth();

    const [classes, setClasses] = useState([]);
    const [axiosSecure]= useAxiosSecure()

    useEffect(() => {
      fetch("http://localhost:5000/allclass")
        .then((res) => res.json())
        .then((data) => setClasses(data));
    }, []);
    
    const { data: users = [] } = useQuery(["users"], async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    });
    const { data } = useQuery(["revenue"], async () => {
      const res = await axiosSecure.get("/adminhistory");
      return res.data;
    });
    console.log(data)
    const instructor = users.filter(pd=>pd.role=="instructor")
    const student = users.filter(pd=>pd.role=="student")

  
    return (
        <div className="w-full">
              <Helmet>
        <title>Admin Home| DashBoard | Dance Studio</title>
      </Helmet>
          <div className=""> <h1 className="text-3xl font-extrabold font-serif  items-center inline-flex  m-10 text-black">Hi, Welcome Back <h1 className=" text-rose-500 font-bold text-2xl ml-3"> {user.displayName}</h1></h1></div>

          <div className="grid mx-24 my-16 grid-cols-1 md:grid-cols-2 gap-10 text-white text-center ">
            <div className="w-72 h-44 bg-gradient-to-r  to-blue-300 from-blue-600 rounded-lg shadow-md"><h2 className="font-bold my-16 text-2xl uppercase "> Total revenue : ${data?.revenue}</h2></div>
            <div className="w-72 h-44 bg-gradient-to-r  to-green-300 from-green-600 rounded-lg shadow-md"><h2 className="font-bold my-16 text-2xl uppercase "> Total class : {classes.length}</h2></div>
            <div className="w-72 h-44 bg-gradient-to-r to-rose-300 from-rose-600 rounded-lg shadow-md"><h2 className="font-bold my-16 text-2xl uppercase"> Total Instructor : {instructor.length}</h2></div>
            <div className="w-72 h-44 bg-gradient-to-r  to-yellow-300 from-yellow-600 rounded-lg shadow-md"><h2 className="font-bold my-16 text-2xl uppercase "> Total student : {student.length}</h2></div>
            
          </div>
            
        </div>
    );
};

export default AdminHome;