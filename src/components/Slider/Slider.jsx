import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import PropertyImage1 from "../../assets/property/PropertyImage1.png";
import PropertyImage2 from "../../assets/property/PropertyImage2.png";
import PropertyImage3 from "../../assets/property/PropertyImage3.png";

const CardStack = ({
  cardsData = [
    { color: "#266678", image: PropertyImage1, name: "Mairitime City" },
    { color: "#cb7c7a", image: PropertyImage2, name: "Downtown Dubai" },
    { color: "#36a18b", image: PropertyImage3, name: "Palm Jumeirah" },
    // { color: "#cda35f", image: PropertyImage1, name: "Card 4" },
    // { color: "#747474", image: PropertyImage3, name: "Card 5" },
  ],
  cardWidth = "90vw",
  cardHeight = "90vh",
  cardOffset = 12,
  scaleFactor = 0.02,
  autoSlideInterval = 5000, // 5 seconds
}) => {
  const [cards, setCards] = useState(cardsData);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active card index

  // Automatic slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      moveToEnd(0); // Move the first card to the end every 5 seconds
    }, autoSlideInterval);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [cards, autoSlideInterval]);

  const moveToEnd = (from) => {
    setCards((prevCards) => {
      const updatedCards = move(prevCards, from, prevCards.length - 1);
      // Calculate the new active index based on the updated card list
      const newIndex = (activeIndex + 1) % updatedCards.length;
      setActiveIndex(newIndex);
      return updatedCards;
    });
  };

  return (
    <div
      className="my-5"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {/* Card Stack */}
      <ul
        style={{
          position: "relative",
          width: cardWidth,
          height: cardHeight,
          listStyle: "none",
        }}
      >
        {cards.map((card, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={card.color}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: cardWidth,
                height: cardHeight,
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "8px",
                transformOrigin: "top center",
                listStyle: "none",
                cursor: canDrag ? "grab" : "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
              animate={{
                top: index * -cardOffset,
                scale: 1 - index * scaleFactor,
                zIndex: cards.length - index,
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              {/* Overlay for dimmed background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                  borderRadius: "8px",
                }}
              />
              {/* Text Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  textAlign: "center",
                  color: "#fff",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                {card.name}
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* Indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {cards.map((_, index) => (
          <div
            key={index}
            style={{
              width: index === activeIndex ? "20px" : "10px",
              height: "10px",
              borderRadius: "50px",
              backgroundColor:
                index === activeIndex ? "var(--primary-color)" : "#fff",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
