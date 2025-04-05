import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600">John Doe</h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Crafting digital experiences with code. Specialized in React, Node.js, and cloud technologies.
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
          >
            View My Work
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;