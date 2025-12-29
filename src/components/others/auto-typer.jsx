import { useEffect, useState } from "react";

const AutoTyper = ({ 
    words = [
        "Full-Stack Web Developer", 
        "Network Engineer",
        "Ethical Hacker"
    ], 
    className }) => {
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="inline-flex items-center h-[3rem]">
        <span
            className={`bg-gradient-to-r bg-clip-text text-transparent ${className}`}
        >
            {text}
        </span>

        {/* Blinking cursor stays solid */}
        <span className="ml-1 w-[2px] h-8 bg-blue-400 blink" />
    </span>
  );
}

export default AutoTyper