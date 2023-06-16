import useAuth from "../../../Hooks/useAuth";


const StudentHome = () => {
    const {user}=useAuth();
    return (
        <div className="w-full m-10">
           <div className=""> <h1 className="text-3xl font-extrabold font-serif  items-center inline-flex  m-10 text-black">Hi, Welcome Back <h1 className=" text-rose-500 font-bold text-2xl ml-3"> {user.displayName}</h1></h1></div>
            
        </div>
    );
};

export default StudentHome;