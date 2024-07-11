import { useEffect, useState } from "react";

import DarkModeLogo from "../../assets/dark-mode.svg?react";
import NormalModeLogo from "../../assets/normal-mode.svg?react";

function MobileModeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <li
      id="mobile-mode-switcher"
      className="ml-2 mt-1 flex h-14 w-full flex-row items-center rounded-md bg-gray-700/90 dark:bg-gray-300/90 sm:ml-4 xl:hidden"
      onClick={toggleDarkMode}
    >
      {!isDarkMode ? (
        <>
          <NormalModeLogo className="ml-2 mr-2 w-7 rounded-full bg-gray-300/30 fill-gray-300 p-1 transition-colors duration-300 hover:fill-amber-600 dark:fill-white/70 sm:ml-6 sm:mr-4 sm:w-10" />
          <p className="font-ubuntu text-xl text-gray-300">Day Mode</p>
        </>
      ) : (
        <>
          <DarkModeLogo className="ml-2 mr-2 w-7 rounded-full bg-gray-500/30 fill-gray-500 p-1 transition-colors duration-300 hover:fill-amber-600 dark:fill-black/70 sm:ml-6 sm:mr-4 sm:w-10" />
          <p className="font-ubuntu text-xl text-black/70">Dark Mode</p>
        </>
      )}
    </li>
  );
}

export default MobileModeSwitcher;