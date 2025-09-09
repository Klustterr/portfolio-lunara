import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * Componente que adiciona elementos decorativos kawaii quando o modo ultra fofo est� ativado
 * @param {Object} props - Propriedades do componente
 * @param {boolean} props.isActive - Se o modo kawaii est� ativo
 * @returns {React.Component}
 */
const KawaiiElements = ({ isActive }) => {
  const [stars, setStars] = useState([]);
  const [hearts, setHearts] = useState([]);

  // Gerar estrelas flutuantes quando o modo kawaii � ativado
  useEffect(() => {
    if (isActive) {
      const newStars = [];
      for (let i = 0; i < 20; i++) {
        newStars.push({
          id: `star-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 5 + 2,
          delay: Math.random() * 2
        });
      }
      setStars(newStars);
    } else {
      setStars([]);
      setHearts([]);
    }
  }, [isActive]);

  // Adiciona cora��es ao clicar na tela quando o modo est� ativo
  const addHeart = useCallback((e) => {
    if (!isActive) return;

    const newHeart = {
      id: `heart-${Date.now()}-${Math.random()}`,
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 30 + 15
    };

    setHearts((prev) => [...prev.slice(-15), newHeart]); // Mant�m apenas os �ltimos 15 cora��es
  }, [isActive]); // Memoriza a função addHeart com dependência apenas de isActive

  useEffect(() => {
    if (isActive) {
      window.addEventListener("click", addHeart);
    }

    return () => {
      window.removeEventListener("click", addHeart);
    };
  }, [isActive, addHeart]);

  if (!isActive) return null;

  return (
    <>
      {/* Estrelas flutuantes */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            fontSize: `${star.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
            y: [0, -20, 0]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay
          }}
        >
          <span role="img" aria-label="star">⭐</span>
        </motion.div>
      ))}

      {/* Cora��es que aparecem ao clicar */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: `${heart.size}px`,
            color: "#FF6BB3"
          }}
          initial={{ opacity: 1, scale: 0, y: 0 }}
          animate={{ opacity: 0, scale: 1.5, y: -100 }}
          transition={{ duration: 1.5 }}
          onAnimationComplete={() => {
            setHearts((prev) => prev.filter((h) => h.id !== heart.id));
          }}
        >
          <span role="img" aria-label="heart">💖</span>
        </motion.div>
      ))}
    </>
  );
};

export default KawaiiElements;
