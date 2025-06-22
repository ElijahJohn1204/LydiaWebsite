import React, { useRef, useState, useEffect } from "react";

const questions = [
  {
    question: "Choose a word/phrase that best describes how you feel today:",
    options: [
      { text: "Whimsical", result: "tutu" },
      { text: "Impatient", result: "pizza" },
      { text: "YOLO", result: "butterflies" },
      { text: "Concerned", result: "onomatopoeia" },
      { text: "Grateful", result: "dog" },
      { text: "Indignant", result: "nerf" },
    ],
  },  
  {
    question: "Choose the words that best describe yourself:",
    options: [
      { text: "Spontaneous and free-spirited", result: "butterflies" },
      { text: "Wholesome but unpredictable", result: "tutu" },
      { text: "Dramatic and memorable", result: "onomatopoeia" },
      { text: "Introspective and emotional", result: "dog" },
      { text: "Direct and confrontational", result: "nerf" },
      { text: "Chaotic but honest", result: "pizza" },
    ],
},
  {
    question: "Choose a random fun word:",
    options: [
      { text: "Kerfuffle", result: "butterflies" },
      { text: "Cattywampus", result: "nerf" },
      { text: "Lollygag", result: "tutu" },
      { text: "Coccyx", result: "dog" },
      { text: "Gobbledygook", result: "pizza" },
      { text: "Supercalifragilisticexpialidocious", result: "onomatopoeia" },
    ],
  },
  {
    question: "Choose a color that resonates with you:",
    options: [
      { color: "bg-violet-500", result: "onomatopoeia" },
      { color: "bg-pink-500", result: "tutu" },
      { color: "bg-blue-500", result: "butterflies" },
      { color: "bg-orange-500", result: "pizza" },
      { color: "bg-green-500", result: "nerf" },
      { color: "bg-red-500", result: "dog" },
    ],
    type: "color",
  },
  {
    question: "Choose some items to bring to a picnic:",
    options: [
      { text: "Burgers and hot dogs", result: "pizza" },
      { text: "Mac and cheese", result: "tutu" },
      { text: "Veggie plate", result: "dog" },
      { text: "A nice blanket", result: "onomatopoeia" },
      { text: "A frisbee", result: "butterflies" },
      { text: "Water balloons, hehehe", result: "nerf" },
    ],
  },
  {
    question: "Choose a song to play on repeat:",
    options: [
      { text: "\"Cherry Wine\" by Hozier", result: "nerf" },
      { text: "\"Ain't it Fun?\" by Paramore", result: "butterflies" },
      { text: "\"Unwritten\" by Natasha Bedingfield", result: "dog" },
      { text: "\"The Climb\" by Miley Cyrus", result: "tutu" },
      { text: "\"Ceilings\" by Lizzy McAlpine", result: "onomatopoeia" },
      { text: "\"Your Love is a Song\" by Switchfoot", result: "pizza" },
    ],
  },
  {
    question: "Choose a biblical excerpt that sticks out to you:",
    options: [
      { 
        imageUrl: "/images/verses/praise.png",
        caption: "Psalm 150:6", 
        result: "butterflies" 
      },
      { 
        imageUrl: "/images/verses/victory.png",
        caption: "1 Corinthians 15:57", 
        result: "nerf" 
      }, 
      { 
        imageUrl: "/images/verses/knit.png",
        caption: "Psalm 139:13-14", 
        result: "dog" 
      },
      { 
        imageUrl:"/images/verses/burden.png",
        caption: "Psalm 55:22", 
        result: "onomatopoeia" 
      },   
      { 
        imageUrl: "/images/verses/rejoice.png", 
        caption: "Philippians 4:4",
        result: "tutu" 
      },
      { 
        imageUrl: "/images/verses/bread.png",
        caption: "Matthew 4:4", 
        result: "pizza" 
      }, 
    ],
    type: "image",
  },
  {
    question: "Choose an actor to play your father in a movie about your life:",
    options: [
      { 
        imageUrl: "/images/actors/bridges.png", 
        caption: "Jeff Bridges",
        result: "butterflies" 
      },
      { 
        imageUrl: "/images/actors/allen.png",
        caption: "Tim Allen", 
        result: "tutu" 
      },
      { 
        imageUrl: "/images/actors/neeson.png",
        caption: "Liam Neeson", 
        result: "onomatopoeia" 
      },
      { 
        imageUrl:"images/actors/oldman.png",
        caption: "Gary Oldman", 
        result: "nerf" 
      },    
      { 
        imageUrl: "/images/actors/costner.png",
        caption: "Kevin Costner", 
        result: "pizza" 
      },
      { 
        imageUrl: "/images/actors/ford.png",
        caption: "Harrison Ford", 
        result: "dog" 
      }, 
    ],
    type: "image",
  },
  {
    question: "Choose a female fictional character to be your best friend:",
    options: [
      { 
        imageUrl: "/images/characters/meena.png", 
        caption: "Meena the Elephant from Sing",
        result: "butterflies" 
      },
      { 
        imageUrl: "/images/characters/annabeth.png",
        caption: "Annabeth Chase from Percy Jackson", 
        result: "dog" 
      },
      { 
        imageUrl: "/images/characters/luisa.png",
        caption: "Luisa Madrigal from Encanto", 
        result: "tutu" 
      },
      { 
        imageUrl:"images/characters/padme.png",
        caption: "Padmé Amidala from Star Wars", 
        result: "onomatopoeia" 
      },    
      { 
        imageUrl: "/images/characters/candace.png",
        caption: "Candace Flynn from Phineas and Ferb", 
        result: "nerf" 
      },
      { 
        imageUrl: "/images/characters/katniss.png",
        caption: "Katniss Everdeen from The Hunger Games", 
        result: "pizza" 
      }, 
    ],
    type: "image",
  },
  {
    question: "Finally, choose your favorite ChatGPT-generated Lydia quote:",
    options: [
      { text: "\"Why isn't there a Buzzfeed quiz to figure out your emotional baggage?\"", result: "nerf" },
      { text: "\"I want my love language to include Netflix and garlic bread!\"", result: "dog" },
      { text: "\"What if my enneagram type is just \'hungry?\'\"", result: "tutu" },
      { text: "\"I'm not indecisive, I'm just exploring all my options at once.\"", result: "onomatopoeia" },
      { text: "\"If you don't have a plan, then chaos can't ruin it.\"", result: "butterflies" },
      { text: "\"Why are we talking about philosophy when we could be eating tacos?\"", result: "pizza" },
    ],
  },
];

const results = {
  tutu: {
    quote: "\"The thing that is true about both The Game Plan and Zoom is that I'm the girl in the tutu.\"",
    emoji: "🧸",
    description: `You're a self-aware, lovable soul who loves drama and has a heart of gold. 
                  Analytical insight and a playful spirit rarely go together, but you have both.
                  Your friends appreciate your perceptiveness and often turn to you for heartfelt conversations.`,
  },
  pizza: {
    quote: "\"I WANT TO KNOW MY LOVE LANGUAGE BASED ON MY PIZZA TOPPINGS!!\"",
    emoji: "🍕",
    description: `You're a starry-eyed dreamer who desires connection and understanding.
                  You have a unique perspective on life and often see the world through a different lens.
                  Your friends appreciate your creativity and often turn to you for inspiration.`,
  },
  butterflies: {
    quote: "\"Life is short, eat the butterflies!\"",
    emoji: "🦋",
    description: `You're a fun-loving, adventurous spirit who thrives on spontaneity and excitement.
                  You probably would be down to bite a cattail, and prefer to live in the moment.
                  Your friends love your infectious energy and often seek you out for a good time.`,
  },
  onomatopoeia: {
    quote: "\"Do we need to talk about our onomatopoeias?\"",
    emoji: "📜",
    description: `You're a kind-hearted, amiable person who deeply cares about others.
                  You have a strong sense of empathy and often put others' needs before your own.
                  Your friends value your support and often turn to you for comfort and understanding.`,
  },
  dog: {
    quote: "\"God has smiled on me this week with a dog and pregnancy.\"",
    emoji: "🐶",
    description: `You're a sentimental and positive soul who radiates joy.
                  You have a knack for finding joy in the little things and spreading positivity wherever you go.
                  Your friends appreciate your uplifting spirit and often go to you to be cheered up.`,
  },
  nerf: {
  quote: "\"You're choosing nerf guns over me? Smh!\"",
    emoji: "🔫",
    description: `You're a straightforward, no-nonsense person who values honesty and directness.
                  You have a strong sense of justice and aren't afraid to speak your mind.
                  Your friends respect your opinions and often come to you for candid advice.`,
},
};

export default function LydiaQuoteQuiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef(null);

  const handleAnswer = (qIndex, resultKey) => {
    if (answers[qIndex] !== null) return;

    const newAnswers = [...answers];
    newAnswers[qIndex] = resultKey;
    setAnswers(newAnswers);
  };

  // When all questions are answered, show result + scroll to it
  useEffect(() => {
    if (!answers.includes(null)) {
      setShowResult(true);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [answers]);

  const calculateResult = () => {
    const counts = {};
    answers.forEach((ans) => {
      counts[ans] = (counts[ans] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  };

  const resultKey = showResult ? calculateResult() : null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-10">
      <h2 className="text-3xl font-bold text-pink-600 text-center">
        Which Lydia Quote Are You?
      </h2>

      {questions.map((q, i) => (
        <div key={i} className="space-y-4">
          <h3 className="text-xl font-semibold">{q.question}</h3>
          <div className="grid grid-cols-3 gap-4">
            {q.type === "image" ? (
            <div className="grid grid-cols-3 gap-4">
                {q.options.map((opt, j) => {
                const isSelected = answers[i] === opt.result;
                return (
                    <button
                    key={j}
                    onClick={() => handleAnswer(i, opt.result)}
                    disabled={answers[i] !== null}
                    className={`flex flex-col items-center rounded-xl overflow-hidden border-4 transition ${
                        isSelected
                        ? "border-pink-600 scale-105"
                        : "border-transparent hover:scale-105"
                    }`}
                    >
                    <img
                        src={opt.imageUrl}
                        alt={opt.caption}
                        className="w-full aspect-square object-cover"
                    />
                    <div className="text-sm text-gray-800 bg-white px-2 py-1 text-center w-full">
                        {opt.caption}
                    </div>
                    </button>
                );
                })}
                </div>
            ) : 
            q.type === "color" ? (
            <div className="grid grid-cols-3 gap-4">
                {q.options.map((opt, j) => {
                const isSelected = answers[i] === opt.result;
                return (
                    <button
                    key={j}
                    onClick={() => handleAnswer(i, opt.result)}
                    disabled={answers[i] !== null}
                    className={`w-full aspect-square rounded-xl transition border-4 ${
                        isSelected
                        ? `${opt.color} border-black scale-105`
                        : `${opt.color} border-transparent hover:scale-105`
                    }`}
                    />
                );
                })}
            </div>
            ) : (
            <div className="grid grid-cols-3 gap-4">
                {q.options.map((opt, j) => {
                const isSelected = answers[i] === opt.result;
                return (
                    <button
                    key={j}
                    onClick={() => handleAnswer(i, opt.result)}
                    disabled={answers[i] !== null}
                    className={`text-left px-4 py-4 text-sm rounded-xl border shadow transition-all duration-200 ${
                        isSelected
                        ? "bg-pink-500 text-white border-pink-700 scale-105"
                        : "bg-white hover:bg-pink-50 border-gray-300"
                    }`}
                    >
                    {opt.text}
                    </button>
                );
                })}
            </div>
            )}
          </div>
        </div>
      ))}

      {showResult && (
        <div ref={resultRef} className="text-center space-y-6 pt-10">
          <div className="text-6xl">{results[resultKey].emoji}</div>
          <h2 className="text-2xl font-bold text-pink-600">
            {results[resultKey].quote}
          </h2>
          <p className="text-lg text-gray-700">{results[resultKey].description}</p>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 mt-4"
            onClick={() => {
              setAnswers(Array(questions.length).fill(null));
              setShowResult(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
