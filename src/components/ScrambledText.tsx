
import React, { useState, useEffect, useCallback } from 'react';

interface ScrambledTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' |'span' | 'p';
}

const ScrambledText: React.FC<ScrambledTextProps> = ({ text, className = '', tag: Tag = 'span' }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(true);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  const scramble = useCallback(() => {
    let iterations = 0;
    const maxIterations = 20;
    const interval = setInterval(() => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            return iterations >= maxIterations
              ? text[index]
              : characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iterations += 1;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledText(text);
        setIsScrambling(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (isScrambling) {
      const cleanup = scramble();
      return cleanup;
    }
  }, [isScrambling, scramble]);

  return (
    <Tag
      className={`${className} transition-colors duration-300`}
      onMouseEnter={() => setIsScrambling(true)}
    >
      {scrambledText}
    </Tag>
  );
};

export default ScrambledText;
