import React, { useState, useRef, useEffect } from "react";

function App() {
  // Stores current input value
  const [goal, setGoal] = useState("");

  // Stores list of goals
  const [goals, setGoals] = useState([]);


  // Gives direct access to the input DOM element
  const inputRef = useRef(null);


  useEffect(() => {
    // Runs once when component mounts
    inputRef.current.focus();
  }, []);

  const addGoalHandler = () => {

    // Validation: prevent empty goals
    if (goal.trim() === "") {

      // Direct DOM manipulation using ref
      inputRef.current.style.border = "2px solid red";
      inputRef.current.focus();
      return;
    }

    // Create new goal object
    const newGoal = {
      id: Date.now(),
      text: goal
    };

    // Update state immutably
    setGoals((prevGoals) => [...prevGoals, newGoal]);

    // Clear input
    setGoal("");

    // Reset border
    inputRef.current.style.border = "1px solid #ccc";

    // Focus input again
    inputRef.current.focus();
  };


  const deleteGoalHandler = (id) => {
    setGoals((prevGoals) =>
      prevGoals.filter((item) => item.id !== id)
    );
  };

  const clearAllHandler = () => {
    setGoals([]);
    inputRef.current.focus();
  };

  return (
    <div style={styles.container}>
      <h2>Goal Tracker</h2>

      {/* Derived value from state */}
      <p>Total Goals: {goals.length}</p>

      <div style={styles.inputContainer}>
        <input
          ref={inputRef}
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Type your goal here"
          style={styles.input}
        />

        <button onClick={addGoalHandler} style={styles.button}>
          Add Goal
        </button>

        <button onClick={clearAllHandler} style={styles.clearButton}>
          Clear All
        </button>
      </div>

      <ul style={styles.list}>
        {goals.map((item) => (
          <li key={item.id} style={styles.listItem}>
            {item.text}
            <button
              onClick={() => deleteGoalHandler(item.id)}
              style={styles.deleteButton}
            >
              | Delete |
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    width: "250px",
    marginRight: "10px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "8px 12px",
    marginRight: "5px",
    cursor: "pointer"
  },
  clearButton: {
    padding: "8px 12px",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "white",
    border: "none"
  },
  list: {
    listStyle: "none",
    padding: 0,
    width: "350px",
    margin: "0 auto"
  },
  listItem: {
    background: "#f4f4f4",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  deleteButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default App;
