// pages/index.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateText, fetchRandomText } from "../store/actions";

export default function Home() {
  const text = useSelector((state) => state.textState.text);
  const error = useSelector((state) => state.textState.error);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleUpdate = () => {
    dispatch(updateText(inputValue));
    setInputValue("");
  };

  const handleFetchRandomText = () => {
    dispatch(fetchRandomText()); // Dispatch async action
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Thunk Example in Next.js</h1>
      <p>Current State: <strong>{text}</strong></p>
      
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      
      <input
        type="text"
        placeholder="Enter new text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleUpdate}>Update State</button>

      <br /><br />

      <button onClick={handleFetchRandomText}>
        Fetch Random Text (Async)
      </button>
    </div>
  );
}
