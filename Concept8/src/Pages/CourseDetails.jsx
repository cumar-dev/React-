import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetails = () => {
 const tasks = [
  {
    id: 1,
    title: "Web Design Task",
    image: "/images/download (1).jpg",
    description: "Create a modern and responsive website design.",
    stars: 4.5,
    price: 120
  },
  {
    id: 2,
    title: "Mobile App UI",
    image: "/images/download (2).jpg",
    description: "Design a clean user interface for a mobile application.",
    stars: 4.8,
    price: 150
  },
  {
    id: 3,
    title: "E-commerce Setup",
    image: "/images/images (1).jpg",
    description: "Build and configure a complete online store.",
    stars: 4.6,
    price: 200
  },
  {
    id: 4,
    title: "Logo Design",
    image: "/images/Screenshot 2025-12-06 161336.png",
    description: "Create a professional and unique business logo.",
    stars: 4.3,
    price: 80
  }
];

  const { coursesId } = useParams();
  const navigate = useNavigate();

  const taskData = tasks.find(task => task.id === Number(coursesId));

  if (!taskData) {
    return <p>Course not found</p>;
  }

  return (
    <>
     <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Course Details</h1>

      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 text-white px-4 py-2 rounded mb-6"
      >
        Previous
      </button>
      
      <div className="shadow-md rounded-md p-5 flex flex-col md:flex-row gap-6">
       
        <img
          src={taskData.image}
          alt={taskData.title}
          className="w-full md:w-1/2 h-60 md:h-72 object-cover rounded"
        />

        
        <div className="flex flex-col justify-between gap-4 md:w-1/2">
          <div>
            <h2 className="text-2xl font-bold">{taskData.title}</h2>
            <p className="text-gray-600 mt-2">{taskData.description}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <strong className="text-xl">${taskData.price}</strong>
            <span className="bg-rose-800 text-white px-3 py-1 rounded">
              ⭐ {taskData.stars}
            </span>
          </div>

          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseDetails;
