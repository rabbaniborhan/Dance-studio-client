import { useContext, useState } from "react";
import singUpImg from "../../assets/login/registration.png";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { setLoading, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);
  const [conformError, setConformError] = useState("");

  // handle user create
  const onSubmit = (data) => {
    if (data.password != data.conformPassword) {
      setConformError("Don't Match ConformPassword");
      return;
    }
    // image upload
    const image = data.photo[0];
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

        createUser(data.email, data.password)
          .then((result) => {
            console.log(result.user);

            updateUserProfile(data.name, imageUrl)
              .then(( ) => {
                const userDocument ={Name:data.name,role:'student',Email:data.email,Image:imageUrl}
                fetch("https://dance-class-server.vercel.app/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userDocument),
                 })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "SingUp successfull",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate(from, { replace: true });
                      reset();
                    }
                  });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
      });
  };

  const showPassword = () => {
    setShow(!show);
  };
  return (
    <div className="w-4/5 mx-auto my-10 p-10  font-serif shadow-2xl">
      <Helmet>
        <title>SingUp | Dance Studio</title>
      </Helmet>
      <div>
        <h1 className="font-bold text-5xl text-blue-500 text-center  pb-20 ">
          Please Registration Now !!!!!
        </h1>
        <div className="flex items-center justify-center text-black">
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

              <div className="w-full">
                <input
                  className="bg-gray-200 w-full my-4 shadow p-2 border border-black rounded-full "
                  placeholder="Conform password"
                  type="password"
                  {...register("conformPassword", { required: true })}
                />
                {conformError && (
                  <span className="text-red-600">{conformError}</span>
                )}
              </div>

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
            <div className="w-full">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
