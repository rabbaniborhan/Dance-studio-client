import google from "../../../assets/login/google.png"
import googleLogo from "../../../assets/login/google-logo.png"
import { useContext } from "react";
import  { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {

    const { signInWithGoogle}= useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

const handleGoogleLogin=()=>{
    signInWithGoogle()
    .then(result => {
        console.log(result)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'login successfull',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(from, { replace: true });
    })
    .catch(error=>{

        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: "Login Filled",
            showConfirmButton: false,
            timer: 1500
          })
          console.log(error)

    })
    


}

    return (
        <div onClick={handleGoogleLogin} className="flex gap-3 border justify-center w-80 rounded-md items-center mx-auto my-8 p-2 shadow-lg">
            <img src={googleLogo} alt="" className="w-8 h-8" />
            <img src={google} alt=""className="w-10 h-8" />
            
        </div>
    );
};

export default SocialLogin;