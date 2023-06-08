import { useState } from "react";
import singUpImg from "../../assets/login/registration.png";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const showPassword = () => {
    setShow(!show);
  };
  return (
    <div className="w-4/5 mx-auto my-20 p-10  font-serif shadow-2xl">
      <div>
        <h1 className="font-bold text-5xl text-blue-500 text-center  pb-20 ">
          Please Login Now !!!!!
        </h1>
        <div className="flex text-black">
          <div className="w-1/2 rounded-lg">
            <img src={singUpImg} alt="" />
          </div>
          <div className="w-1/2 border rounded-lg ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  items-center justify-between pt-8 px-10 "
            >

              <div className="w-full">
                <input
                  className="bg-gray-200 w-full my-4 shadow p-2 border border-black rounded-full "
                  placeholder="name"
                  type="text"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>


              <div className="w-full">
                <input
                  className="bg-gray-200 w-full my-4 shadow p-2 border border-black rounded-full "
                  placeholder="Email"
                  type="text"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>


              <div className="w-full">
                <input
                  className="py-4"
                  placeholder="photo"
                  type="file"
                  accept="image/*"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-600">photo is required</span>
                )}
              </div>


              <div className="w-full">
                <div className="flex items-center  w-full">
                  <input
                    className="bg-gray-200 w-full my-4 shadow p-2 border border-black rounded-full "
                    placeholder="password"
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                  <span className="-ml-10" onClick={showPassword}>
                    {show ? (
                      <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                    ) : (
                      <FiEye></FiEye>
                    )}
                  </span>
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>



              <input
                className="bg-gray-200 w-full my-4 shadow p-2 border border-black rounded-full "
                placeholder="Conform password"
                type="text"
                {...register("conformPassword", { required: true })}
              />


              <input
                type="submit"
                className="btn btn-block rounded-full mt-4 btn-primary"
              />

            </form>
            <h1 className="text-black mx-10 mt-4 mb-10">
              You have already account?
              <Link to="/login" className="link text-blue-700">
                please Login
              </Link>
            </h1>
            <div className="divider ">OR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
