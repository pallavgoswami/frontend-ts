import React from "react";

export default function RandomQuote() {
  const quotes = ["Believe in yourself.", "Stay positive.", "Never give up.", "Dream big.", "Push your limits."];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return <div>random quote: {quote};</div>;
}
