import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-xl text-black dark:text-stone-200 font-[350] px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#232323] rounded-md transition duration-100 ease-in-out"
        >
            {label}
        </button>
    );
};

export default Button;