import React, { useState } from "react";
import "./styles.css";

var dict = {
  "🫶": "Smilling",
  "🎄": "Christmas Tree",
  "❤️": "Red-Heart",
  "🎅": "Santa Clause",
  "🎊": "New Year’s Eve",
  "🥳": "Partying Face"
};
var emojiWeKnow = Object.keys(dict);
export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiDict(event) {
    var input = event.target.value;
    var meaning = dict[input];
    setMeaning(meaning);
  }

  function emojiClick(emoji) {
    var meaning = dict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outtt !! </h1>

      <input onChange={emojiDict} />

      <h2> {meaning} </h2>
      <h3> Emoji we have ..</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
