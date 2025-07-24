import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function ModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const storedPref = localStorage.getItem('darkMode') === 'false';
    setDarkMode(storedPref);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="cursor-pointer hover:text-primary"
    >
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
}

export default ModeToggle;
