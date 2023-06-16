import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import dateFormat from "dateformat";





const PaymentHistory = () => {


    const { user, loading } = useContext(AuthContext);
  //   console.log(user.email)
  const [axiosSecure] = useAxiosSecure();
  const { data: mypayment = [] } = useQuery({
    queryKey: ["mypayment", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/mypayment/${user.email}`);
      return res.data;
    },
  });
    return (
        <div>
             <Helmet>
        <title>Payment History| DashBoard | Dance Studio</title>
      </Helmet>

      <div>
      <div>
      <div className="text-rose-500 w-96 bg-black text-center  mx-auto my-12">
        <h1 className=" border-t-2 border-b-2 border-rose-500 p-4 font-bold text-3xl uppercase ">
          my Payment
        </h1>
      </div>
      <h2 className=" my-6 font-bold text-xl">Total Payment: {mypayment.length}</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full text-center">
            {/* head */}
            <thead className="bg-rose-500">
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Price</th>
                <th>TransactionId</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {mypayment?.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={row.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{row.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">${row.amount}</td>
                  <td className="font-bold ">{row.transactionId}</td>
                  <td className="font-bold">{dateFormat(row.date)}</td>
                
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

export default PaymentHistory;