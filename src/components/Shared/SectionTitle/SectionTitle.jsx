
const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-12">
        <h3 className="text-3xl font-bold hover:text-pink-700 transition hover:scale-110 text-purple-600 uppercase border-y-4 py-4">{heading}</h3>
       
    </div>
    );
};

export default SectionTitle;