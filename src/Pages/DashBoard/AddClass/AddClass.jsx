import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {
    const { user } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title> AddClass | Dance Studio</title>
      </Helmet>
      <div className="text-rose-500 w-96 bg-black text-center  mx-auto my-12">
        <h1 className=" border-t-2 border-b-2 border-rose-500 p-4 font-bold text-3xl uppercase ">
          my selected class
        </h1>
      </div>
      <div className=" mx-auto my-8 rounded-md bg-rose-300">
        <form onSubmit={handleSubmit(onSubmit)} className="p-12">
          <div className="w-full flex flex-col justify-center">
            <label className="font-bold ">Class Name*</label>
            <input
              type="text"
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
              <input className=" p-2 rounded-sm mb-2" value={user.displayName} type="text" {...register("instructorName", {})} />
            </div >
           <div className="flex flex-col justify-center"> <label className="font-bold ">Instructor Email*</label>
            <input className=" p-2 rounded-sm mb-2" value={user.email} type="email" {...register("instructorEmail")} /></div>
          </div>

          <div className="flex items-center gap-4">
            <div className=" flex flex-col justify-center">
              <label className="font-bold">Price*</label>
              <input
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
              <input className=" p-2 rounded-sm mb-2"
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
          <input type="file"
          className=" p-2 rounded-sm mb-2"
           {...register("image", { required: true })}
           aria-invalid={errors.image ? "true" : "false"}
           /> {errors.image?.type === "required" && (
            <p role="alert" className="text-red-500">
             plase choose file
            </p>
          )}

          <input type="submit" value="add class" className="btn  bg-rose-500 block mx-auto" />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
