import React, { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const Header = ({ handleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    handleDarkMode((prev) => !prev);
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="header">
      <h1 className="flex text-4xl">
        Noteify <PencilSquareIcon className="h-10 w-10" />
      </h1>
      <div className="toggle-mode">
        {isDarkMode ? (
          <SunIcon
            onClick={toggleDarkMode}
            className="h-6 w-6 cursor-pointer text-yellow-300"
          />
        ) : (
          <MoonIcon
            onClick={toggleDarkMode}
            className="h-6 w-6 cursor-pointer text-blue-950"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
