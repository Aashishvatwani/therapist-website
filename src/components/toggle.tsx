// components/ThemeToggle.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button'; // Assuming Shadcn UI Button
import { Sun, Moon } from 'lucide-react'; // Sun and Moon icons

function ThemeToggle() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'dark'; // Default to dark if no preference
    }
    return 'dark'; // Default for SSR
  });

  // Effect to apply the theme class and save to localStorage
  useEffect(() => {
    const root = document.documentElement; // This is the <html> element
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light'); // Ensure light class is removed
    } else {
      root.classList.remove('dark');
      root.classList.add('light'); // Add light class (optional, but good for clarity)
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Button
      variant="ghost" // Use ghost variant for a subtle button
      size="icon"    // Make it an icon-only button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="text-gray-400 hover:text-amber-300 transition-colors" // Styling for the button icon
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" /> // Show Sun icon in dark mode
      ) : (
        <Moon className="h-5 w-5" /> // Show Moon icon in light mode
      )}
    </Button>
  );
}

export default ThemeToggle;