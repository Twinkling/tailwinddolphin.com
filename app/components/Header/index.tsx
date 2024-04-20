'use client';

import { useState, useEffect } from 'react';
import Logo from "@/components/Logo";

const Header = () => {
    const [isDark, setIsDark] = useState(false);

  const isLocalStorageEmpty = () => {
    return !localStorage.getItem('isDarkTheme');
  };

  const setValueToLocal = (value: boolean) => {
    localStorage.setItem('isDarkTheme', `${value}`);
  };

  const toggleThemeHandler = () => {
    const currentTheme = JSON.parse(localStorage.getItem('isDarkTheme')!);

    setIsDark(() => !currentTheme);
    document.querySelector('html')?.classList.toggle('dark');
    setValueToLocal(!currentTheme);
  };

  useEffect(() => {
    // toggles theme based on system theme
    const systemThemeToggle = () => {
      // true if dark theme
      const systemTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (systemTheme) document.querySelector('html')?.classList.add('dark');
      if (!systemTheme) document.querySelector('html')?.classList.remove('dark');

      setIsDark(systemTheme);
      setValueToLocal(systemTheme);
    };

    if (isLocalStorageEmpty()) systemThemeToggle();
    else {
      const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme')!);
      isDarkTheme && document.querySelector('html')?.classList.add('dark');
      setIsDark(() => isDarkTheme);
    }

    // watches for system theme change
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', systemThemeToggle);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', systemThemeToggle);
    };
  }, []);

    return (
      <header className="mx-4 h-16 flex justify-between items-center">
        <Logo />
        <div className='flex justify-between items-center'>
          {/* THEME TOGGLE */}
          <button
            className='w-10 h-10 text-gray-700 sm:w-11 sm:h-11 dark:text-slate-400 hover:text-indigo-600 hover:dark:text-indigo-400 mr-2'
            onClick={toggleThemeHandler}>
            <span className='sr-only'>Toggle dark/light theme</span>
            {isDark ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path
                  opacity='1'
                  fill='currentColor'
                  d='M12 8.73a3.271 3.271 0 1 0 .002 6.542A3.271 3.271 0 0 0 12 8.73zm0 5.6c-1.29 0-2.33-1.04-2.33-2.33S10.71 9.67 12 9.67s2.33 1.04 2.33 2.33-1.04 2.33-2.33 2.33zm0 1.87c.26 0 .47.21.47.47v1.87a.47.47 0 1 1-.94 0v-1.87c0-.26.21-.47.47-.47zm0-8.4a.47.47 0 0 1-.47-.47V5.47a.47.47 0 1 1 .94 0v1.87c0 .25-.21.46-.47.46zM7.8 12c0 .26-.21.47-.47.47H5.47a.47.47 0 1 1 0-.94h1.87c.25 0 .46.21.46.47zm10.73-.47a.47.47 0 1 1 0 .94h-1.87a.47.47 0 1 1 0-.94h1.87zM8.37 9.03L7.05 7.71a.547.547 0 0 1-.09-.28c0-.26.21-.47.47-.47.11 0 .2.04.28.09l1.32 1.32c.08.08.14.2.14.33s-.05.25-.14.33c-.08.08-.2.14-.33.14s-.25-.06-.33-.14zm7.26 5.94l1.32 1.32c.06.08.09.18.09.28 0 .26-.21.47-.47.47-.11 0-.2-.04-.28-.09l-1.32-1.32a.444.444 0 0 1-.14-.34c0-.26.21-.47.47-.47.13.01.24.06.33.15zm-.33-5.8a.47.47 0 0 1-.47-.47c0-.13.05-.25.14-.33l1.32-1.32c.08-.11.22-.19.37-.19.26 0 .47.21.47.47 0 .15-.07.29-.19.37l-1.32 1.32a.38.38 0 0 1-.32.15zm-6.93 5.8c.08-.09.2-.15.33-.15.26 0 .47.21.47.47 0 .13-.06.25-.14.34l-1.32 1.32c-.08.05-.18.09-.28.09a.47.47 0 0 1-.47-.47c0-.11.04-.2.09-.28l1.32-1.32z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='pl-2'>
                <path
                  d='M18.9 14.4c-.2-.2-.4-.2-.6-.1-.9.4-1.8.7-2.8.7-3.5 0-6.4-2.9-6.4-6.4 0-1 .2-1.9.7-2.8.1-.2.1-.4-.1-.6-.2-.2-.5-.2-.6-.1A7.19 7.19 0 0 0 5 11.6c0 4.1 3.3 7.4 7.4 7.4 2.8 0 5.3-1.6 6.6-4.1 0-.1 0-.4-.1-.5zM12.4 18C8.9 18 6 15.1 6 11.6c0-1.9.9-3.6 2.3-4.8C8.1 7.4 8 8 8 8.6c0 4.1 3.3 7.4 7.4 7.4.6 0 1.2-.1 1.8-.2-1.2 1.3-2.9 2.2-4.8 2.2z'
                  opacity='1'
                  fill='currentColor'
                />
              </svg>
            )}
          </button>
          {/* GITHUB */}
          <a href="https://github.com/Twinkling/tailwind-helper-online">
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
              />
            </svg>
          </a>
        </div>
      </header>
    );
};
export default Header;