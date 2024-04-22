'use client';
import { useState, useEffect, Suspense } from 'react';
import { PiSunFill, PiMoonStarsFill } from "react-icons/pi";

export default function ToggleTheme() {
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
        <button
            className='text-gray-700 mr-4 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-400'
            onClick={toggleThemeHandler}>
            <span className='sr-only'>Toggle dark/light theme</span>
            {isDark ? (
                <PiSunFill className='w-6 h-6' />
            ) : (
                <PiMoonStarsFill className='w-6 h-6' />
            )}
        </button>
    )
}