import  { useEffect, useState } from 'react';
import Card from '../../../components/Shared/Card/Card';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const PopularClass = () => {
      const [classes , setClasses]=useState([])


      useEffect(()=>{
        fetch("https://dance-class-server.vercel.app/popularclass")
        .then(res=>res.json())
        .then(data=>setClasses(data))
      },[])
     

    return (
       <div className='bg-[#f2935b] py-10 my-10'>
        <SectionTitle heading={'our popular classes'}></SectionTitle>
         <div className='grid grid-cols-1 md:grid-cols-3 mx-4 md:w-4/5 md:mx-auto'>
            {
               classes.map(item=><Card key={item._id} item={item}></Card>)
            }
        </div>
       <div className='w-32 mx-auto '>
      <Link to='/allclass' className= 'border-b-4 border-[#2DDA85] font-semibold rounded-lg  my-6  py-[5px] px-[15px] text-white hover:shadow hover:shadow-[#2DDA85] hover:bg-[#2DDA85] transition duration-300'> All class</Link>
       </div>
       {/* <hr className='border-2 w-4/5 mx-auto  border-purple-600 mb-20' /> */}
       </div>
    );
};

export default PopularClass;