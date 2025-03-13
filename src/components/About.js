import React, { useState } from "react";


const About = ({ visi }) => {
  // Internal state to manage visibility
  const [isVisible, setIsVisible] = useState(visi === "visible");

  // Toggle visibility when the component is clicked
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Clickable "About Us" text in the navbar */}
      <div
        className="text-gray-200 text-2xl font-semibold hover:text-gray-300 cursor-pointer"
        style={{ fontFamily: "'Playfair Display', serif" }}
        onClick={toggleVisibility}
      >
        About Us
      </div>

      {/* Full-screen overlay for About content */}
      {isVisible && (
        <div className="fixed inset-0 bg-gray-100 z-50 overflow-y-auto p-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            onClick={toggleVisibility}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* About Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">About DSA Tracker</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              DSA Tracker is your ultimate guide to mastering Data Structures and Algorithms. 
              By solving our carefully curated problems, you enhance your problem-solving skills 
              and increase your chances of cracking top product-based companies like Google, 
              Amazon, Microsoft, and more.
            </p>
          </div>

          {/* Achievers Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">
              Top Achievers
            </h2>
            
            {/* Achievers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src="/shots/achiever3.jpg"
                  alt="Achiever 1"
                  className="w-full h-56 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-2">John Doe</h3>
                <p className="text-gray-600">Software Engineer @ Google</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fstudent&psig=AOvVaw3Cbs6sl04X9j7HG28fdL_N&ust=1741955849256000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiHirCJh4wDFQAAAAAdAAAAABAE"}
                  alt="Achiever 2"
                  className="w-full h-56 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-2">Jane Smith</h3>
                <p className="text-gray-600">SDE @ Amazon</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img
                  src="achiever3.jpg"
                  alt="Achiever 3"
                  className="w-full h-56 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-2">Alex Johnson</h3>
                <p className="text-gray-600">Developer @ Microsoft</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;