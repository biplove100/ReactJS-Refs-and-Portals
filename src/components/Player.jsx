import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [buttonClicking, setButtonClicking] = useState(false);

  function handleClick(){
    setButtonClicking(true);
  }

  console.log("player.jsx is rerendered");

  return (
    <section id="player">
      <h2>Welcome {buttonClicking ? playerName.value : "unknown User"}</h2>
      
      <p>
        <input type="text" value={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
