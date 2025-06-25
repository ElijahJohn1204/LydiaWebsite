// probably need to add more content here later

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-pink-600">Welcome to Lydia's World ✨</h2>
      <p className="text-lg">Explore quotes, chaos, and quizzes inspired by Lydia herself.</p>
      <Link to="/quiz">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl">
          Take the Lydia Quote Quiz
        </button>
      </Link>
    </div>
  );
}
