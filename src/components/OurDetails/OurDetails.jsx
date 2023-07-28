import { FaBook, } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import{GiBlackBook} from "react-icons/gi"

const OurDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className=" text-white bg-emerald-400 p-6">
          <FaBook size={48}></FaBook>
          <h4 className="text-xl font-medium my-1">Special Education</h4>
          <p className="text-gray-200">
            Our Special Education Program offers quality education to children
            with disabilities and developmental delays.
          </p>
        </div>
        <div className=" text-white bg-cyan-300 p-6">
          <BsSun size={48}></BsSun>
          <h4 className="text-xl font-medium my-1">Full Day Session</h4>
          <p className="text-gray-200">
            At Kinderex, we offer full-day preschool sessions built on a
            play-based approach for kids ages two to five.
          </p>
        </div>
        <div className=" text-white bg-orange-500 p-6">
          <GiBlackBook color="white" size={48}></GiBlackBook>
          <h4 className="text-xl font-medium my-1">Qualified Teachers</h4>
          <p className="text-gray-200">
          Our team consists of experienced and creative teachers who are dedicated to your kids’ successful education.
          </p>
        </div>
        <div className=" text-white bg-fuchsia-600 p-6">
            <p className="text-gray-200">The Best Preschool</p>
            <h2 className="text-[20px]  mt-2 font-medium">Providing Quality Education in a Creative Environment</h2>
            <button className="w-full border-2 bg-transparent text-white border-white rounded-full mt-4 p-3 hover:bg-emerald-300 hover:border-emerald-300 transition-all ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default OurDetails;
