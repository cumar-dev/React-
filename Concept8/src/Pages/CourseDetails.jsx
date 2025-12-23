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
    image: "/images/download (10).jpg",
    description: "Create a professional and unique business logo.",
    stars: 4.3,
    price: 80
  },
  {
    id: 5,
    title: "Web Development",
    image: "/images/download (3).jpg",
    description: "Learn how to build modern and responsive websites using HTML, CSS, JavaScript, and frameworks.",
    stars: 4.8,
    price: 1000
  },
  {
    id: 6,
     title: "Frontend Development",
     image: "/images/download.png",
    description: "Build interactive user interfaces using HTML, CSS, JavaScript, and React with real projects.",
    stars: 4.7,
     price: 150
  },
  {
    id: 7,
    title: "Mobile App Development",
    image: "/images/images.jpg",
    description: "Create mobile applications and understand how Android and iOS apps work.",
    stars: 4.6,
    price: 180
  },
  {
    id: 8,
    title: "UI / UX Design",
    image: "/images/download.jpg",
    description: "Learn how to design clean, user-friendly interfaces and improve user experience.",
    stars: 4.5,
     price: 100
  },
  {
    id: 9,
    title: "Data Analysis",
    image: "/images/download (4).jpg",
    description: "Analyze and visualize data using tools like Excel and Python for better decision-making.",
    stars: 4.4,
      price: 200
  },
  {
    id: 10,
    title: "Artificial Intelligence Basics",
    image: "/images/download (5).jpg",
    description: "Understand the fundamentals of AI and how it is used in real-world applications.",
    stars: 4.3,
    price: 220
  },
  {
    id: 11,
    title: "Cyber Security Fundamentals",
    image: "/images/download (9).jpg",
    description: "Learn how to protect systems, networks, and data from cyber threats.",
    stars: 4.6,
     price: 170
  },
  {
    id: 12,
    title: "Digital Marketing",
    image: "/images/download (7).jpg",
    description: "Learn SEO, social media marketing, and online advertising strategies.",
    stars: 4.5,
     price: 90
  }, 
  {
    id: 13,
    title: "IT Support",
    image: "/images/download (8).jpg",
    description: "Gain essential IT support skills including troubleshooting and basic networking.",
    stars: 4.4,
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
