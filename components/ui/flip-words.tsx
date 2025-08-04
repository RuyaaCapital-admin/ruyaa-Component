"use client"
import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

export const FlipWords = ({
  words,
  duration = 3000,
  className,
  isDark, // Added isDark prop
}: {
  words: string[]
  duration?: number
  className?: string
  isDark: boolean // Added isDark prop type
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation()
      }, duration)
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative",
          isDark ? "text-white" : "text-gray-900", // Dynamic text color based on isDark
          className,
        )}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => {
          // Check if this word should be highlighted
          const shouldHighlight = (
            (word === "AI" && currentWord.includes("AI For")) ||
            (word === "For" && currentWord.includes("AI For")) ||
            (word === "it" && currentWord.includes("it works")) ||
            (word === "works" && currentWord.includes("it works")) ||
            (word === "we" && currentWord.includes("we serve")) ||
            (word === "serve" && currentWord.includes("we serve"))
          )

          return (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className={cn(
                "inline-block whitespace-nowrap",
                shouldHighlight && "highlight-phrase"
              )}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}
