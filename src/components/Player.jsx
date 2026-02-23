import { useState, useRef } from "react";


export default function Player() {
  const [inputText, setInputText] = useState('');
  const playerName = useRef();

  function handleClick(){
    setInputText(playerName.current.value);
    console.log(inputText);
  }

  return (
    <section id="player">
      <h2>Welcome {inputText!='' ? inputText : "Unknown User"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
