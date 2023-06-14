import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
  const {user,loading}=useContext(AuthContext);
//   console.log(user.email)
const [axiosSecure]= useAxiosSecure()
  const {refetch,data:cart=[]}=useQuery({
    queryKey:['carts',user?.email],
    enabled: !!user?.email && !loading ,
    queryFn:async()=>{
        const res = await axiosSecure(`http://localhost:5000/carts?email=${user.email}`)
        return res.data;
    }
  })

  return[cart,refetch]
};

export default useCart;