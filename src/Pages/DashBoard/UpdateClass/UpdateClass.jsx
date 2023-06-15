import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {

    const { user } = useAuth();
    const updateClass = useLoaderData();
    const {Name, AvailableSeats,Price,_id} = updateClass;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        
        formState: { errors },
        handleSubmit,
      } = useForm();



      const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);


        const url = `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_KEY
          }`;
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((imageData) => {
              const imageUrl = imageData.data.display_url;
              const availableSeats = parseInt(data.availableSeate);
              const price = parseFloat(data.price);


              const classData = {
                Name: data.className,
                Image: imageUrl,
                InstructorName: data.instructorName,
                InstructorEmail: data.instructorEmail,
                Price: price,
                AvailableSeats: availableSeats,
                EnrollSeats: 0,
                Status: "pending",
              };

              fetch(`http://localhost:5000/classupdate/${_id}`, {
                method: "PUT",
                headers:{
                   "content-type":"application/json"
                },
                body:JSON.stringify(classData)
              })
                .then((res) => res.json())
                .then((data) => {
                
                  if (data.modifiedCount) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "This class  is update",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });

                navigate(from, { replace: true });








             })


        
      }
    return (
        <div>
           <div className="w-2/4 mx-auto shadow-2xl shadow-rose-300 mt-16">
      <Helmet>
        <title> Update class | Dance Studio</title>
      </Helmet>
      
      <div className=" mx-auto my-8 rounded-md bg-rose-300">
        <form onSubmit={handleSubmit(onSubmit)} className="p-12">
          <div className="w-full flex flex-col justify-center">
            <label className="font-bold ">Class Name*</label>
            <input
              type="text"
              defaultValue={Name}
              className="w-full p-2 rounded-sm mb-2"
              {...register("className", { required: true })}
              aria-invalid={errors.className ? "true" : "false"}
            />
            {errors.className?.type === "required" && (
              <p role="alert" className="text-red-500">
                Name is required
              </p>
            )}
          </div>
          <div className="flex w-full  gap-4">
            <div className="  flex flex-col justify-center">
              <label className="font-bold">Instructor Name*</label>
              <input
                className=" p-2 rounded-sm mb-2"
                value={user?.displayName}
                type="text"
                {...register("instructorName", {})}
              />
            </div>
            <div className="flex flex-col justify-center">
              {" "}
              <label className="font-bold ">Instructor Email*</label>
              <input
                className=" p-2 rounded-sm mb-2"
                value={user?.email}
                type="email"
                {...register("instructorEmail")}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className=" flex flex-col justify-center">
              <label className="font-bold">Price*</label>
              <input
              defaultValue={Price}
                className=" p-2 rounded-sm mb-2"
                type="number"
                {...register("price", { required: true })}
                aria-invalid={errors.price ? "true" : "false"}
              />
              {errors.price?.type === "required" && (
                <p role="alert" className="text-red-500">
                  price is required
                </p>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <label className="font-bold">Available seats*</label>
              <input
              defaultValue={AvailableSeats}
                className=" p-2 rounded-sm mb-2"
                type="number"
                {...register("availableSeate", { required: true })}
                aria-invalid={errors.availableSeate ? "true" : "false"}
              />
              {errors.availableSeate?.type === "required" && (
                <p role="alert" className="text-red-500">
                  AvailableSeat is required
                </p>
              )}
            </div>
          </div>
          <input
            type="file"
            className=" p-2 rounded-sm mb-2"
            {...register("image", { required: true })}
            aria-invalid={errors.image ? "true" : "false"}
          />{" "}
          {errors.image?.type === "required" && (
            <p role="alert" className="text-red-500">
              plase choose file
            </p>
          )}
          <input
            type="submit"
            value="Update class"
            className="btn  bg-rose-500 block mx-auto"
          />
        </form>
      </div>
    </div>
            
        </div>
    );
};

export default UpdateClass;