"use client"

import { cn } from "@/lib/utils"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
}

export function TypewriterEffect({
  words,
  className,
}: TypewriterEffectProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.25,
          delay: stagger(0.1),
        }
      )
    }
  }, [isInView, animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => {
          return (
            <motion.span
              initial={{ opacity: 0 }}
              key={`${word}-${idx}`}
              className={cn("dark:text-white text-black", word.className)}
            >
              {word.text}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn("font-bold", className)}>
      {renderWords()}
    </div>
  )
}
