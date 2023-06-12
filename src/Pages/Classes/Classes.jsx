import { useEffect, useState } from "react";
import Card from "../../components/Shared/Card/Card";
import { Helmet } from "react-helmet-async";



const Classes = () => {
    const [classes,setClasses]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allclass')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    

    return (
        <div className="py-16">

<Helmet>
        <title>class | Dance Studio</title>
      </Helmet>
            <div className="bg-[url('https://i.ibb.co/BnNgy1F/classimg.jpg')] bg-cover bg-fixed bg-no-repeat">
                <div className="w-4/6  text-white text-center mx-auto py-32 ">
                    <h1 className="font-bold text-3xl uppercase  py-8">
                       <span className="text-blue-600"> Welcome</span> to Your  dance classe
                    </h1>
                    <p>
                    dance, the movement of the body in a rhythmic way, usually to music and within a given space, for the purpose of expressing an idea or emotion, releasing energy, or simply taking delight in the movement itself.
                    </p>

                    
                </div>
            </div>

            <div className="grid grid-cols-1 my-10 md:grid-cols-3 mx-8 md:w-4/5 md:mx-auto">
                {classes.map(item=><Card key={item._id} item={item}></Card>)}
            </div>
            
        </div>
    );
};

export default Classes;