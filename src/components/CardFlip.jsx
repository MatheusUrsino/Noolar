import { useState } from "react";
import { motion } from "framer-motion";
import "./css/styleCardFlip.css";

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="divCard">
      <div className="flip-card cardFlipdiv" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner flipcardInnerDiv"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front flipCardFront"
          style={{backgroundColor:`yellow`}}>
            <h2 className="textFront">titulo aqui</h2>
            <p>texto aqui</p>
          </div>
          <div className="flip-card-back flipCardBack"
          style={{backgroundColor:`blue`}}>
            <h2 className="textBack">verso aqui</h2>
            <p>aaaaaaaaaa</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
