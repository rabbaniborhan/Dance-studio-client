import { useEffect, useState } from "react";
import InstructorCard from "../../components/Shared/InstructorCard/InstructorCard";

const Instructor = () => {
  const [Instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allinstructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(Instructors)

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/RNgnSHv/instructor.jpg')] bg-cover bg-fixed bg-no-repeat">
        <div className="w-4/6  text-white text-center mx-auto py-32 ">
          <h1 className="font-bold text-3xl uppercase  py-8">
            <span className="text-blue-600"> Our</span> instructor
          </h1>
          <p>
            dance, the movement of the body in a rhythmic way, usually to music
            and within a given space, for the purpose of expressing an idea or
            emotion, releasing energy, or simply taking delight in the movement
            itself.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:w-4/5 my-20 md:mx-auto gap-8 ">
          {Instructors.map((item) => (
            <InstructorCard key={item._id} item={item}></InstructorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
