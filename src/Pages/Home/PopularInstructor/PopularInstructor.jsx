import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import InstructorCard from "../../../components/Shared/InstructorCard/InstructorCard";
import { Link } from "react-router-dom";

const PopularInstructor = () => {
  const [Instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://dance-class-server.vercel.app/popularinstructor")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  return (
    <div className="my-10">
      <SectionTitle heading={"our popular instructor"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:w-4/5 md:mx-auto gap-8 ">
        {Instructors.map((item) => (
          <InstructorCard key={item._id} item={item}></InstructorCard>
        ))}
      </div>

      <div className="w-32 mx-auto my-12 ">
        <Link to="/allinstructor" className= 'border-b-4 border-[#2DDA85] font-semibold rounded-lg  my-6  py-[8px] px-[15px] hover:shadow hover:shadow-[#2DDA85] hover:bg-[#2DDA85] transition duration-300'>All Instructor</Link>
      </div>
     
    </div>
  );
};

export default PopularInstructor;
