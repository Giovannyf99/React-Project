import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-blue-700">
      <div className="container py-10">
        <h1 className="text-6xl mt-2 font-bold text-center text-white">WORD WIZARDRY</h1>
        <div className="flex items-center justify-center mt-5">
          <Link to="/dictionary">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">
              Dictionary
            </button>
          </Link>
          <Link to="/random-word-generator">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Random Word Generator
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
