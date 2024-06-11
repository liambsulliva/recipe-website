import React, { useEffect, useState } from 'react';
import Button from './Button';

const LandingPageContainer: React.FC<{ posts: any[] }> = ({ posts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    useEffect(() => {
        const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
        setDarkModeEnabled(isDarkModeEnabled);
    }, [currentIndex]);

    const images = [
        {
            src: "/bananas.jpg",
            alt: "bananas",
        },
        {
            src: "/bananas-dark.jpeg",
            alt: "bananas-dark",
        },
        {
            src: "/avocados.jpg",
            alt: "avocados",
        },
        {
            src: "/avocados-dark.jpeg",
            alt: "avocados-dark",
        },
        {
            src: "/eggs.jpg",
            alt: "eggs",
        },
        {
            src: "/eggs-dark.jpeg",
            alt: "eggs-dark",
        }
    ];

    return (
        <div className="flex flex-row justify-between">
            <div className="m-16 mb-8 flex-grow">
                <h1 className="text-8xl max-md:text-7xl font-bold mb-4">Explore</h1>
                <div className="flex flex-row gap-6 max-[430px]:gap-0 max-[430px]:mx-0 my-6 mx-2">
                    <Button label="Carbs" onClick={() => setCurrentIndex(0)} />
                    <Button label="Fats" onClick={() => setCurrentIndex(2)} />
                    <Button label="Proteins" onClick={() => setCurrentIndex(4)} />
                </div>
                <div className="flex flex-col gap-6">
                    {posts.map((post: any) => (
                        <>
                            <div className="border-t border-gray-300"></div>
                            <a href={`/${post.slug}`} className="px-4 py-1 pb-6">
                                <h2 className="text-2xl font-bold">{post.data.title}</h2>
                                <p className="text-gray-500">{post.data.description}</p>
                                <p className="text-gray-500">{post.data.date}</p>
                            </a>
                        </>
                    ))}
                </div>
            </div>
            <div className="w-1/2 max-sm:hidden">
                <img src={images[currentIndex + (darkModeEnabled ? 1 : 0)].src} alt={images[currentIndex + (darkModeEnabled ? 1 : 0)].alt} className="w-full h-screen object-cover" />
            </div>
        </div>
    );
};

export default LandingPageContainer;