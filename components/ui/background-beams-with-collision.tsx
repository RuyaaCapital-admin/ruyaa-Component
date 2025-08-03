"use client"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import React, { useRef, useState, useEffect } from "react"

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  isDark,
}: {
  children: React.ReactNode
  className?: string
  isDark?: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)

  const beams = [
    // Fast moving beams - left side
    {
      initialX: 50,
      translateX: 50,
      duration: 4,
      repeatDelay: 1,
      delay: 0,
      className: "h-8",
    },
    {
      initialX: 150,
      translateX: 150,
      duration: 3,
      repeatDelay: 2,
      delay: 1,
      className: "h-12",
    },
    {
      initialX: 250,
      translateX: 250,
      duration: 5,
      repeatDelay: 1.5,
      delay: 0.5,
      className: "h-6",
    },

    // Medium speed beams - center
    {
      initialX: 400,
      translateX: 400,
      duration: 6,
      repeatDelay: 3,
      delay: 2,
      className: "h-16",
    },
    {
      initialX: 500,
      translateX: 500,
      duration: 7,
      repeatDelay: 2.5,
      delay: 1.5,
      className: "h-10",
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 5.5,
      repeatDelay: 4,
      delay: 3,
      className: "h-14",
    },

    // Slow moving beams - right side
    {
      initialX: 750,
      translateX: 750,
      duration: 8,
      repeatDelay: 5,
      delay: 2.5,
      className: "h-20",
    },
    {
      initialX: 850,
      translateX: 850,
      duration: 9,
      repeatDelay: 6,
      delay: 4,
      className: "h-18",
    },
    {
      initialX: 950,
      translateX: 950,
      duration: 7.5,
      repeatDelay: 4.5,
      delay: 3.5,
      className: "h-12",
    },

    // Extra wide coverage beams
    {
      initialX: 1100,
      translateX: 1100,
      duration: 6.5,
      repeatDelay: 3.5,
      delay: 1,
      className: "h-8",
    },
    {
      initialX: 1250,
      translateX: 1250,
      duration: 4.5,
      repeatDelay: 2,
      delay: 0.8,
      className: "h-10",
    },
    {
      initialX: 1400,
      translateX: 1400,
      duration: 8.5,
      repeatDelay: 7,
      delay: 5,
      className: "h-24",
    },

    // Sporadic beams for randomness
    {
      initialX: 320,
      translateX: 320,
      duration: 3.5,
      repeatDelay: 8,
      delay: 6,
      className: "h-6",
    },
    {
      initialX: 680,
      translateX: 680,
      duration: 10,
      repeatDelay: 12,
      delay: 8,
      className: "h-22",
    },
    {
      initialX: 1050,
      translateX: 1050,
      duration: 4,
      repeatDelay: 10,
      delay: 7,
      className: "h-8",
    },
  ]

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-96 md:h-[40rem] relative flex items-center w-full justify-center overflow-hidden",
        isDark ? "bg-gradient-to-b from-gray-900 to-black" : "bg-gradient-to-b from-gray-50 to-white",
        className,
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
          isDark={isDark}
        />
      ))}
      {children}
      <div
        ref={containerRef}
        className={cn("absolute bottom-0 w-full inset-x-0 pointer-events-none", isDark ? "bg-black" : "bg-white")}
        style={{
          boxShadow: isDark
            ? "0 0 24px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 0, 0, 0.2)"
            : "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  )
}

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>
    parentRef: React.RefObject<HTMLDivElement>
    isDark?: boolean
    beamOptions?: {
      initialX?: number
      translateX?: number
      initialY?: number
      translateY?: number
      rotate?: number
      className?: string
      duration?: number
      delay?: number
      repeatDelay?: number
    }
  }
>(({ parentRef, containerRef, beamOptions = {}, isDark }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null)
  const [collision, setCollision] = useState<{
    detected: boolean
    coordinates: { x: number; y: number } | null
  }>({
    detected: false,
    coordinates: null,
  })
  const [beamKey, setBeamKey] = useState(0)
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false)

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
        const beamRect = beamRef.current.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()
        const parentRect = parentRef.current.getBoundingClientRect()

        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2
          const relativeY = beamRect.bottom - parentRect.top

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          })
          setCycleCollisionDetected(true)
        }
      }
    }

    const animationInterval = setInterval(checkCollision, 50)
    return () => clearInterval(animationInterval)
  }, [cycleCollisionDetected, containerRef])

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null })
        setCycleCollisionDetected(false)
      }, 2000)

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1)
      }, 2000)
    }
  }, [collision])

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full",
          isDark
            ? "bg-gradient-to-t from-gray-400 via-gray-300 to-transparent"
            : "bg-gradient-to-t from-gray-600 via-gray-500 to-transparent",
          beamOptions.className,
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            isDark={isDark}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
})

CollisionMechanism.displayName = "CollisionMechanism"

const Explosion = ({ isDark, ...props }: React.HTMLProps<HTMLDivElement> & { isDark?: boolean }) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }))

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={cn(
          "absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full blur-sm",
          isDark
            ? "bg-gradient-to-r from-transparent via-gray-400 to-transparent"
            : "bg-gradient-to-r from-transparent via-gray-600 to-transparent",
        )}
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className={cn(
            "absolute h-1 w-1 rounded-full",
            isDark ? "bg-gradient-to-b from-gray-400 to-gray-600" : "bg-gradient-to-b from-gray-600 to-gray-800",
          )}
        />
      ))}
    </div>
  )
}
