import  { useEffect, useState } from 'react';
import Card from '../../../components/Shared/Card/Card';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const PopularClass = () => {
      const [classes , setClasses]=useState([])


      useEffect(()=>{
        fetch("http://localhost:5000/popularclass")
        .then(res=>res.json())
        .then(data=>setClasses(data))
      },[])
     

    return (
       <div>
        <SectionTitle heading={'our popular classes'}></SectionTitle>
         <div className='grid grid-cols-1 md:grid-cols-3 mx-4 md:w-4/5 md:mx-auto'>
            {
               classes.map(item=><Card key={item._id} item={item}></Card>)
            }
        </div>
       <div className='w-32 mx-auto '>
      <Link to='/allclass'> <button className='btn bg-pink-700  my-6 text-white '>All class</button></Link>
       </div>
       <hr className='border-2 w-4/5 mx-auto  border-purple-600 mb-20' />
       </div>
    );
};

export default PopularClass;