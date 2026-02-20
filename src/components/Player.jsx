import { useState, useRef } from "react";

export default function Player() {
  const [userName, setUserName] = useState('');
  const playerName = useRef();

  function handleClick(){
    console.log("Button is Clicked");
    setUserName(playerName.current.value);

  }

  return (
    <section id="player">
      <h2>Welcome {userName !="" ? userName : "unknown User" }</h2>
      
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
