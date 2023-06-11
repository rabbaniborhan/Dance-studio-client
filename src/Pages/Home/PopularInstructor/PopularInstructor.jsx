import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import InstructorCard from "../../../components/Shared/InstructorCard/InstructorCard";

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
    </div>
  );
};

export default PopularInstructor;
