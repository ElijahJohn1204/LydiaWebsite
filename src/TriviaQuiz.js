import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold text-pink-600">Hold on tight!!</h2>
      <p className="text-lg">Our lazy web devs haven't gotten around to finishing up this page. Coming soon!!</p>
      <p className="text-lg">In the meantime, enjoy this
        <a
            href="https://elijahjohn.weebly.com/my-family.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
        > page</a>, exposing our useless and unprofessoinal web dev.</p>
    
    </div>
  );
}
