import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  

  const [userName, setUserName] = useState('');
  const [buttonClicking, setButtonClicking] = useState(false);

  function handleInputText(inputText){
    setUserName(inputText.target.value);
    console.log(userName);
  }

  function handleClick(){
    setButtonClicking(true);
  }

  return (
    <section id="player">
      <h2>Welcome {buttonClicking ? userName : "unknown User"}</h2>
      
      <p>
        <input type="text" onChange={handleInputText} value={userName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
