import React, {useState} from "react";

function App() {

  setInterval(changeTime, 1000);

  const currentTime = new Date().toLocaleTimeString('en-GB');
  const [time, setTime] = useState(currentTime);

  function changeTime() 
  {
    const newTime = new Date().toLocaleTimeString('en-GB');
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
