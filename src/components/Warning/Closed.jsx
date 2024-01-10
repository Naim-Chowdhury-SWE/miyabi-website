import { useState, useEffect } from "react";

const Closed = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [isWithinTimeRange, setIsWithinTimeRange] = useState(checkTimeRange());

  // Function to get the current time in "hh:mm:ss" format
  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  // Function to check if the current time is within the specified range
  function checkTimeRange() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    return (currentHour >= 20 && currentMinute < 30) || currentHour < 11;
  }

  // Update the current time and check time range every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
      setIsWithinTimeRange(checkTimeRange());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  console.log(currentTime);

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    padding: "0.5em",
    backgroundColor: "#6a0000",
  };

  // Render the component conditionally based on the time range check
  return isWithinTimeRange ? (
    <div style={centerStyle}>
      <p className="p__cormorant">
        Nu är restuarangen stängd, vi ses igen imorrn!
      </p>
    </div>
  ) : null;
};

export default Closed;
