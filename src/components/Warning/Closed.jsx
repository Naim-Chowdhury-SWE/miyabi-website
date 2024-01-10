import { useState, useEffect } from "react";

const Closed = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  const [isNight, setIsNight] = useState(checkNightTime());
  const [isMorning, setIsMorning] = useState(checkMorningTime());

  function getFormattedTime() {
    const now = new Date();
    const formatNumber = (number) => number.toString().padStart(2, "0");
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  function checkNightTime() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    return currentHour >= 20 && currentMinute < 30;
  }

  function checkMorningTime() {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour < 11;
  }

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getFormattedTime());
      setIsNight(checkNightTime());
      setIsMorning(checkMorningTime());
    };

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    padding: "0.5em",
    backgroundColor: "#6a0000",
  };

  return isNight ? (
    <div style={centerStyle} className="p__cormorant">
      <p>Nu är restuarangen stängd, vi ses igen imorrn!</p>
    </div>
  ) : isMorning ? (
    <div style={centerStyle} className="p__cormorant">
      <p>Klockan 11 öppnar vi</p>
      <p>Välkomna!</p>
    </div>
  ) : null;
};

export default Closed;
