import React, { useState } from "react";

const questions = [
  {
    question: "What would you bring to a picnic?",
    options: [
      { text: "A weird Furby", result: "furby" },
      { text: "A pizza with mystery toppings", result: "pizza" },
      { text: "A nerf gun", result: "nerf" },
      { text: "A quote journal", result: "quote" },
      { text: "A small dog and vibes", result: "dog" },
    ],
  },
  {
    question: "What’s your communication style?",
    options: [
      { text: "Chaotic but honest", result: "quote" },
      { text: "Loud and meme-like", result: "furby" },
      { text: "Through food metaphors", result: "pizza" },
      { text: "Wholesome but unpredictable", result: "dog" },
      { text: "Toy-based warfare", result: "nerf" },
    ],
  },
];

const results = {
  furby: {
    quote: "Oh my gosh, it's a biblically accurate Furby!",
    emoji: "🧸",
  },
  pizza: {
    quote: "I WANT TO KNOW MY LOVE LANGUAGE BASED ON MY PIZZA TOPPINGS!!",
    emoji: "🍕",
  },
  nerf: {
    quote: "You're choosing nerf guns over me? Smh!",
    emoji: "🔫",
  },
  quote: {
    quote: "Am I just quotes to you?",
    emoji: "📜",
  },
  dog: {
    quote: "God has smiled on me this week with a dog and pregnancy.",
    emoji: "🐶",
  },
};

export default function LydiaQuoteQuiz() {
  const [answers, setAnswers] = useState([]);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswer = (resultKey) => {
    const newAnswers = [...answers, resultKey];
    setAnswers(newAnswers);

    if (step + 1 === questions.length) {
      // Count which result appears most
      const counts = {};
      newAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
      });
      const finalResult = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(finalResult);
    } else {
      setStep(step + 1);
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setStep(0);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Which Lydia Quote Are You?</h1>

        {result ? (
          <div className="text-center">
            <p className="text-5xl mb-4">{results[result].emoji}</p>
            <p className="text-xl font-semibold mb-2">{results[result].quote}</p>
            <button
              onClick={restartQuiz}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium mb-2">{questions[step].question}</p>
            <div className="space-y-2">
              {questions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.result)}
                  className="block w-full px-4 py-2 bg-pink-200 rounded-xl hover:bg-pink-300"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
