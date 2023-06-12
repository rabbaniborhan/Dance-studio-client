import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "react-query";


const useCart = () => {
  const {user,loading}=useContext(AuthContext);
//   console.log(user.email)
  const {refetch,data:cart=[]}=useQuery({
    queryKey:['carts',user?.email],
    enabled: !!user?.email && !loading ,
    queryFn:async()=>{
        const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
        return res.json();
    }
  })

  return[cart,refetch]
};

export default useCart;