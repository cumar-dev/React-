import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const Courses = () => {
  const useQuery = ()=> {
  return new URLSearchParams(useLocation().search);
}
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
    image: "images/download (10).jpg",
    description: "Create a professional and unique business logo.",
    stars: 4.3,
    price: 80
  },
  {
    id: 5,
    title: "Web Development",
    image: "images/download (3).jpg",
    description: "Learn how to build modern and responsive websites using HTML, CSS, JavaScript, and frameworks.",
    stars: 4.8,
    price: 1000
  },
  {
    id: 6,
     title: "Frontend Development",
     image: "images/download.png",
     description: "Build interactive user interfaces using HTML, CSS, JavaScript, and React with real projects.",
     stars: 4.7,
     price: 150
  },
  {
    id: 7,
    title: "Mobile Application Development",
    image: "images/images.jpg",
    description: "Create mobile applications and understand how Android and iOS apps work.",
    stars: 4.6,
    price: 180
  },
  {
    id: 8,
    title: "UI / UX Design",
    image: "images/download.jpg",
    description: "Learn how to design clean, user-friendly interfaces and improve user experience.",
    stars: 4.5,
     price: 100
  },
  {
    id: 9,
    title: "Data Analysis",
    image: "images/download (4).jpg",
    description: "Analyze and visualize data using tools like Excel and Python for better decision-making.",
    stars: 4.4,
      price: 200
  },
  {
    id: 10,
    title: "Artificial Intelligence Basics",
    image: "images/download (5).jpg",
    description: "Understand the fundamentals of AI and how it is used in real-world applications.",
    stars: 4.3,
    price: 220
  },
  {
    id: 11,
    title: "Cyber Security Fundamentals",
    image: "images/download (9).jpg",
    description: "Learn how to protect systems, networks, and data from cyber threats.",
    stars: 4.6,
     price: 170
  },
  {
    id: 12,
    title: "Digital Marketing",
    image: "images/download (7).jpg",
    description: "Learn SEO, social media marketing, and online advertising strategies.",
    stars: 4.5,
     price: 90
  }, 
  {
    id: 13,
    title: "IT Support",
    image: "images/download (8).jpg",
    description: "Gain essential IT support skills including troubleshooting and basic networking.",
    stars: 4.4,
     price: 80
  }
];

const query = useQuery();
const searchTerm = query.get("q") || "";
const navigate = useNavigate();
const [search, setSearch] = useState(searchTerm);
useEffect(() => {
if(search) {
   navigate(`?q=${search}`);
} else {
  navigate("");
}
}, [search, navigate])
const filteredTask = tasks.filter(tasks => tasks.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  return (
    <>
    <h1 className='text-2xl text-gray-800 font-bold mb-3'>All Courses</h1>
    <div className='flex flex-col gap-3'>
      <input className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-sky-600 ' 
      type="text"
      value={search} onChange={(e) => setSearch(e.target.value)} />
      <button className='py-2 px-3 bg-orange-500 text-white mb-10 cursor-pointer'>Search</button>
    </div>
       {
        tasks.length > 0 ? (
         <ul>
          <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
         {
          filteredTask.map((task, index) => (
            <li key={task.id}> 
            <NavLink to={`/course/${task.id}`}>
             <div key={index} className='max-w-[400px] p-5 shadow-md rounded-md mb-5 transition duration-300 ease-in-out hover:scale-110'>
              <div className='flex flex-col gap-3 '>
              <img className='rounded' src={task.image} alt={task.title} />
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