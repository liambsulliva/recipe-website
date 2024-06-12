import React, { useEffect, useState } from 'react';
import type { SVGProps } from 'react';

export default function DarkModeToggle(props: SVGProps<SVGSVGElement>) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
            <button onClick={toggleDarkMode}>
                {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <path fill="white" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 512 512">
                        <path fill="black" d="M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143l65.054-65.054l31.113 31.113l-65.054 65.054zM77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.053zM394 234h92v44h-92zm-368 0h92v44H26zm312.028 135.14l31.113-31.113l65.054 65.054l-31.113 31.112zM77.802 108.92l31.113-31.113l65.053 65.054l-31.112 31.113zM256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102"/>
                    </svg>
                )}
            </button>
        );
}