import  { useEffect, useState } from 'react';
import Card from '../../../components/Shared/Card/Card';

const PopularClass = () => {
      const [classes , setClasses]=useState([])


      useEffect(()=>{
        fetch("http://localhost:5000/popularclass")
        .then(res=>res.json())
        .then(data=>setClasses(data))
      },[])
     

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mx-8 md:w-4/5 md:mx-auto'>
            {
               classes.map(item=><Card key={item._id} item={item}></Card>)
            }
        </div>
    );
};

export default PopularClass;