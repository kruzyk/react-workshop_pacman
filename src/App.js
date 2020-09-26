import React, { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState(2);
  return (
    <div className="App">
      {score}
      {/* <Header /> */}
      {/* <Board /> */}
    </div>
  );
}

export default App;
