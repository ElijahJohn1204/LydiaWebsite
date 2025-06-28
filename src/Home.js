// probably need to add more content here later

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner image across the top */}
      <div className="max-w-3xl mx-auto py-12 px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold text-pink-600">Welcome to Lydia's Website of Fun!</h2>
        <h3 className="text-lg">Look around, look around at how lucky we are to be alive right now!!</h3>
        <h4 className="text-lg">As a great and wise anonymous thinker once said, "Lydia is pretty awesome!"</h4>
            <div className="w-full">
                <img 
                src="/beach.png" 
                alt="Lydia banner" 
                className="w-full h-64 object-cover"
                />
            </div>
        <Link to="/quiz-hub">
            <button className="inline-block mt-8 px-6 py-3 text-xl bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 transition">
            Head over to the Quiz Hub!
            </button>
        </Link>
        </div>
    </div>
  );
}
