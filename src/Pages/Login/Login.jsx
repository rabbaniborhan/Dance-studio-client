import { useState } from "react";
import loginImg from "../../assets/login/login.png";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [show, setShow] = useState(true);

  const showPassword =()=>{
    setShow(!show);
   
  }

  return (
    <div className="w-4/5 mx-auto my-20 p-10  font-serif shadow-2xl">
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
              <input
                className="bg-gray-200 w-full my-4 shadow p-2 border border-black rounded-full "
                placeholder="Email"
                type="text"
                {...register("firstName", { required: true, maxLength: 20 })}
              />

              <div className="flex items-center  w-full">
                <input
                  className="bg-gray-200 w-full my-4 shadow p-2 border border-black rounded-full "
                  placeholder="password"
                  type={show ? "text" : "password"}
                  {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                />
                <span className="-ml-10"  onClick={showPassword}>
                    {
                        show ? < AiOutlineEyeInvisible></AiOutlineEyeInvisible>:<FiEye></FiEye>
                    }
                </span>
              </div>
              <input type="submit" className="btn btn-block rounded-full mt-4 btn-primary" />
            </form>
            <h1 className="text-black mx-10 mt-4 mb-10">You are new?<Link to='/singup' className="link text-blue-700">please SingUp</Link></h1>
            <div className="divider ">OR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
