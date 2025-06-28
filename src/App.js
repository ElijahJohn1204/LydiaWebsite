import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quizzes from "./QuizHub.js"
import PQuiz from "./PersonalityQuiz.js";
import TQuiz from "./TriviaQuiz.js";
import Home from "./Home";
import License from "./License";

export default function App() {
  return (
    <Router>

      <div className="min-h-screen bg-pink-100 flex flex-col">
        <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-600">LydiaWeb</h1>
          <div className="space-x-4">
            <Link to="/" className="text-pink-500 hover:text-pink-700">Home</Link>
            <Link to="/quiz-hub" className="text-pink-500 hover:text-pink-700">Quizzes</Link>
          </div>
        </nav>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz-hub" element={<Quizzes />} />
            <Route path="/which-lydia-quote-are-you-quiz" element={<PQuiz />} />
            <Route path="/guess-the-lydia-quote" element={<TQuiz />} />
            <Route path="/license" element={<License />} />
          </Routes>
        </main>
        <footer className="text-center text-sm text-gray-500 mt-12 p-4 border-t">
          <p>
            Some images are used under licenses such as CC-BY or GFDL and have been cropped for layout.
            Full attributions and licenses can be found on the{" "}
            <a
              href="/license"
              className="text-pink-600 hover:underline"
            >
              License
            </a>.
          </p>
        </footer>
      </div>
    </Router>
  );
}
