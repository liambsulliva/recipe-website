import React, { useEffect, useState } from 'react';
import Button from './Button';

const LandingPageContainer: React.FC<{ carbs: any[], fats: any[], proteins: any[] }> = ({ carbs, fats, proteins }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    useEffect(() => {
        const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
        setDarkModeEnabled(isDarkModeEnabled);

        const handleDarkModeChange = (event: CustomEvent) => {
            setDarkModeEnabled(event.detail);
        };

        window.addEventListener('darkModeChanged', handleDarkModeChange as EventListener);

        return () => {
            window.removeEventListener('darkModeChanged', handleDarkModeChange as EventListener);
        };
    }, []);

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
        <div className="flex flex-row justify-between h-screen" style={{ maxHeight: 'calc(100vh * 12/13)' }}>
            <div className="m-16 mb-8 flex-grow">
                <h1 className="text-8xl max-md:text-7xl font-bold mb-4">Explore</h1>
                <div className="flex flex-row gap-6 max-[430px]:gap-0 max-[430px]:mx-0 my-6 mx-2">
                    <Button label="Carbs" onClick={() => setCurrentIndex(0)} />
                    <Button label="Fats" onClick={() => setCurrentIndex(2)} />
                    <Button label="Proteins" onClick={() => setCurrentIndex(4)} />
                </div>
                <div style={{ maxHeight: 'calc(100vh * 5/6)' }} className="flex flex-col gap-6">
                    {currentIndex === 0 && carbs.map((post: any) => (
                        <>
                            <div className="border-t border-gray-300"></div>
                            <a href={`/${post.slug}`} className="px-4 py-1 pb-6">
                                <h2 className="text-2xl font-bold">{post.data.title}</h2>
                                <p className="text-gray-500">{post.data.description}</p>
                            </a>
                        </>
                    ))}
                    {currentIndex === 2 && fats.map((post: any) => (
                        <>
                            <div className="border-t border-gray-300"></div>
                            <a href={`/${post.slug}`} className="px-4 py-1 pb-6">
                                <h2 className="text-2xl font-bold">{post.data.title}</h2>
                                <p className="text-gray-500">{post.data.description}</p>
                            </a>
                        </>
                    ))}
                    {currentIndex === 4 && proteins.map((post: any) => (
                        <>
                            <div className="border-t border-gray-300"></div>
                            <a href={`/${post.slug}`} className="px-4 py-1 pb-6">
                                <h2 className="text-2xl font-bold">{post.data.title}</h2>
                                <p className="text-gray-500">{post.data.description}</p>
                            </a>
                        </>
                    ))}
                </div>
            </div>
            <div className="w-1/2 max-md:hidden">
                {!darkModeEnabled && <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-full object-cover"/>}
                {darkModeEnabled && <img src={images[currentIndex + 1].src} alt={images[currentIndex + 1].alt} className="w-full h-full object-cover"/>}
            </div>
        </div>
    );
};

export default LandingPageContainer;