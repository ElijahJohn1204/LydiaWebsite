import React from "react";
import { Link } from "react-router-dom";

import PQuiz from "./PersonalityQuiz.js";
import TQuiz from "./TriviaQuiz.js";

export default function QuizHub() {
  return (
    <div className="text-center px-4 py-12 space-y-6">
      <h2 className="text-3xl font-bold text-pink-600">Feeling in-quiz-itive??? 🔮</h2>
      <p className="text-lg">Explore quizzes inspired by Lydia herself.</p>

      {/* Add padding above + spacing between buttons horizontally */}
      <div className="pt-12 flex justify-center gap-8 flex-wrap">
        <Link to="/which-lydia-quote-are-you-quiz">
          <button className="w-48 h-48 text-lg font-bold rounded-2xl border-4 border-pink-400 bg-white hover:bg-pink-100 hover:scale-105 transition-all duration-300 p-4">
            Which Lydia Quote Are You?
          </button>
        </Link>
        <Link to="/guess-the-lydia-quote">
          <button className="w-48 h-48 text-lg font-bold rounded-2xl border-4 border-pink-400 bg-white hover:bg-pink-100 hover:scale-105 transition-all duration-300 p-4">
            Guess the Lydia Quote
          </button>
        </Link>
      </div>
    </div>
  );
}



