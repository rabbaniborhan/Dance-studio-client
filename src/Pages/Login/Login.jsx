import { useContext, useState } from "react";
import loginImg from "../../assets/login/login.png";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const { loading, setLoading, signIn,  } =
  useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
   

    signIn(data.email, data.password)
    .then(result => {
      console.log(result.user)
      navigate(from, { replace: true })
    })
    .catch(err => {
      setLoading(false)
      console.log(err.message)
     
    })




    reset();
  };
  const [show, setShow] = useState(true);

  const showPassword = () => {
    setShow(!show);
  };

  return (
    <div className="w-4/5 mx-auto my-10 p-10  font-serif shadow-2xl">
      <Helmet>
        <title>Login | Dance Studio</title>
      </Helmet>
      <div>
        <h1 className="font-bold text-5xl text-blue-500 text-center  pb-20 ">
          Please Login Now !!!!!
        </h1>
        <div className="flex text-black">
          <div className="w-1/2 rounded-lg">
            <img src={loginImg} alt="" />
          </div>
          <div className="w-1/2 border rounded-lg ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  items-center justify-between pt-8 px-10 "
            >
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
                type="submit"
                className="btn btn-block rounded-full mt-4 btn-primary"
              />
            </form>
            <h1 className="text-black mx-10 mt-4 mb-10">
              You are new?
              <Link to="/singup" className="link text-blue-700">
                please SingUp
              </Link>
            </h1>
            <div className="divider ">OR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
