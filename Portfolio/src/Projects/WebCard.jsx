import React, { useState, useEffect } from "react";

function WebCard() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, title: "/src/assets/web-dev/Screenshot (521).png", description: "Digital Clock" },
        { id: 2, title: "/src/assets/web-dev/Screenshot (522).png", description: "Stop-Watch" },
        { id: 3, title: "/src/assets/web-dev/Screenshot (523).png", description: "To-Do-List" },
        { id: 4, title: "/src/assets/web-dev/Screenshot (524).png", description: "Spotify-Clone" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className="web-dev">
            <div className="slider-container">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`card ${index === currentIndex ? "active" : ""}`}
                        style={{
                            transform: `translateX(${(index - currentIndex) * 100}%)`,
                        }}
                    >
                        <img src={card.title} alt={`Slide ${card.id}`} />
                        <span>{card.description}</span>
                    </div>
                ))}
            </div>
            <h2>Web Pages</h2>
        </div>
    );
}

export default WebCard;
