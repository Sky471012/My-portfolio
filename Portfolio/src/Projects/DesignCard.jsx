import React, { useState, useEffect } from "react";

function DesignCard() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, title: "/src/assets/design/aa3.png", description: "Photo Manipulation" },
        { id: 2, title: "/src/assets/design/logo.jpg", description: "Human Vector" },
        { id: 3, title: "/src/assets/design/Swachhta Hi Seva Pledge.png", description: "Photo Collage" },
        { id: 4, title: "/src/assets/design/Untitled-1.jpg", description: "Photo Manipulation" },
        { id: 5, title: "/src/assets/design/Untitled-1.png", description: "Logo" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className="design">
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

            <h2>Designs</h2>
        </div>
    );
}

export default DesignCard;
