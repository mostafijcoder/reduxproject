// pages/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateText } from "../store/actions";

export default function Home() {
  // Access Redux State
  const text = useSelector((state) => state.textState.text);
  
  // Get Redux Dispatch Function
  const dispatch = useDispatch();

  // Local State for Input
  const [inputValue, setInputValue] = useState("");

  // Function to Dispatch Action
  const handleUpdate = () => {
    dispatch(updateText(inputValue));  // Update Redux State
    setInputValue("");  // Clear Input Field
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Example in Next.js</h1>
      <p>Current State: <strong>{text}</strong></p>

      <input
        type="text"
        placeholder="Enter new text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <button onClick={handleUpdate}>Update State</button>
    </div>
  );
}
