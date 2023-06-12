import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/UseCart";
import{MdDelete} from "react-icons/md"
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart] = useCart();
  
  const total = cart.reduce((sum,item)=>item.Price+sum ,0)



  const handleDelete =(id)=>{
    console.log(id)

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/?${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
         
        }
      })
      
  }




  return (
    <div>
      <Helmet>
        <title>My Cart| DashBoard | Dance Studio</title>
      </Helmet>
      <div>
        <div className="text-rose-500 w-96 bg-black text-center  mx-auto my-12">
          <h1 className=" border-t-2 border-b-2 border-rose-500 p-4 font-bold text-3xl uppercase ">
            my selected class
          </h1>
        </div>
        <div className="flex justify-between items-center  my-6 font-bold text-xl">
            <h2>Total Class: {cart.length}</h2>
            <h2>Total price: ${total}</h2>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-rose-500">
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>InstructorName</th>
                  <th>Action</th>
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((row, index) => (
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
                      <button onClick={()=>handleDelete(row._id)} className="btn bg-rose-500 btn-xs px-3"><MdDelete></MdDelete></button>
                    </th>
                    <th>
                      <button className="btn bg-rose-500 btn-xs">PAY</button>
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

export default MyCart;
