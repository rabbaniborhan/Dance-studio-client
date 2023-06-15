const InstructorCard = ({ item }) => {
  const { Image, Name,  Email } = item;
  return (
    <div>
      <div className="card h-72 card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-52 h-full " src={Image} alt="Movie" />
        </figure>
        <div className="card-body justify-center my-10">
          <h2 className="card-title text-2xl font-bold italic">{Name}</h2>
          <p>{Email}</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
