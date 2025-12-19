import React from 'react'
import { NavLink } from 'react-router-dom';
const Courses = () => {
    const tasks = [
  {
    id: 1,
    title: "Web Design Task",
    image: "images/download (1).jpg",
    description: "Create a modern and responsive website design.",
    stars: 4.5,
    price: 120
  },
  {
    id: 2,
    title: "Mobile App UI",
    image: "images/download (2).jpg",
    description: "Design a clean user interface for a mobile application.",
    stars: 4.8,
    price: 150
  },
  {
    id: 3,
    title: "E-commerce Setup",
    image: "images/images (1).jpg",
    description: "Build and configure a complete online store.",
    stars: 4.6,
    price: 200
  },
  {
    id: 4,
    title: "Logo Design",
    image: "images/Screenshot 2025-12-06 161336.png",
    description: "Create a professional and unique business logo.",
    stars: 4.3,
    price: 80
  }
];

  return (
    <>
    <h1 className='text-2xl text-gray-800 font-bold mb-3'>All Courses</h1>
       {
        tasks.length > 0 ? (
         <ul>
          <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
         {
          tasks.map((task, index) => (
            <li key={task.id}> 
            <NavLink to={`/course/${task.id}`}>
             <div key={index} className='max-w-[400px] p-5 shadow-md rounded-md'>
              <div className='flex flex-col gap-3'>
              <img src={task.image} alt={task.title} />
              <h1 className='text-xl text-gray-800 font-bold'>{task.title}</h1>
              <div className='flex justify-between items-center'>
                <strong>${task.price}</strong>
                <button className='bg-rose-800 text-white px-3 py-2 rounded-md'> ⭐{task.stars}</button>
              </div>
               </div>
             </div>
            </NavLink>
            </li>
          ))
         }
         </div>
         </ul>
        ): (
          <p className='text-red-800'>No Courses Found!</p>
        )
       }
   
    </>
  )
}

export default Courses;