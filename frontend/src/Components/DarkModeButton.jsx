import React, { useState, useEffect } from "react";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Dark mode" : "Light mode"}
    </button>
  );
};

export default DarkModeButton;
