'use client';

import React, {
  useState,
  /* useEffect , */ useContext,
  createContext,
} from 'react';
import { theme } from '../types/type';
const themeProvider = createContext<theme | null>(null);

export const ThemeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [theme, setTheme] = useState('light');

  const setTheTheme = () => {
    if (theme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
  };

  /*   useEffect(() => setTheTheme(), [theme]);   */

  /* 
  
  waiorfwioauhfawohfioawhfawda
  
  */

  return (
    <themeProvider.Provider value={{ theme, setTheTheme }}>
      {children}
    </themeProvider.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(themeProvider);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
