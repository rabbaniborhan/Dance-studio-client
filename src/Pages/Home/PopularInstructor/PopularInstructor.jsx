import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import InstructorCard from "../../../components/Shared/InstructorCard/InstructorCard";
import { Link } from "react-router-dom";

const PopularInstructor = () => {
  const [Instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularinstructor")
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

      <div className="w-32 mx-auto ">
        <Link to="/allinstructor">
          
          <button className="btn bg-pink-700  my-6 text-white ">
            All Instructor
          </button>
        </Link>
      </div>
      <hr className="border-2 w-4/5 mx-auto  border-purple-600 mb-20" />
    </div>
  );
};

export default PopularInstructor;
