const InstructorCard = ({ item }) => {
  const { Image, Name, Name_category, Email } = item;
  return (
    <div>
      <div className="card h-72 card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-52 h-full " src={Image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold italic">{Name}</h2>
          <p>{Email}</p>
          <div>
            <p className="text-xl font-bold">Class Category</p>
            <ol>
              {Name_category?.map((item, index) => (
                <li key={index}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
