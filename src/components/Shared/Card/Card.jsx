const Card = ({ item }) => {
  const {
    AvailableSeats,
    Price,
    Name,
    Image,
    InstructorName,
    TotalSeats,
    EnrollSeats,
  } = item;
  
  return (
    <div className="">
      <div className="card w-72 bg-base-100 mb-10 shadow-xl m group">
        <figure className="relative">
          <p className=" absolute top-0 right-0 font-semibold  bg-black p-2  text-pink-600">
           
            $ {Price}
          </p>
          <img className="w-full h-52 group-hover:scale-110 transition" src={Image} alt="Shoes" />
        </figure>
        <div className="card-body group-hover:bg-black group-hover:rounded-lg group-hover:text-white transition  h-1/2">
          <h2 className="card-title text-purple-400">{Name}</h2>
          <h4 className="text-lg text-purple-600 font-semibold">
            {InstructorName}
          </h4>
          <p className=" flex justify-between  items-center font-semibold">
            <p>Total Seat:{TotalSeats}</p>
            <p>Total Enroll :{EnrollSeats}</p>
          </p>
            <p  className="text-green-400">Available Seat:{AvailableSeats}</p>
          <div className="card-actions justify-end">
            <button className="btn  hover:bg-pink-700 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"> Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
