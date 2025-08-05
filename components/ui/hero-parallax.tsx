"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react"
import { cn } from "@/lib/utils"
import { TypewriterEffectSmooth } from "./typewriter-effect"
import { Button } from "./button"

export const HeroParallax = ({
  products,
  isDark,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
  isDark: boolean
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1200]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1200]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.3], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.1, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.3], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.3], [-800, 600]), springConfig)

  return (
    <div
      ref={ref}
      className={cn(
        "h-[300vh] py-20 md:py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",
        isDark ? "bg-black" : "bg-white",
      )}
    >
      <Header isDark={isDark} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} isDark={isDark} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} isDark={isDark} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} isDark={isDark} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = ({ isDark }: { isDark: boolean }) => {
  const words = [
    {
      text: "RuyaaCapital",
      className: "text-blue-500 dark:text-blue-400",
    },
  ]

  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-24 px-4 w-full left-0 top-0">
      <h1 className={cn("text-2xl md:text-7xl font-bold mb-6 md:mb-8", isDark ? "text-white" : "text-gray-900")}>
        Transform Your Business with <br /> AI-Powered Solutions
      </h1>

      {/* Unified Brand Presentation with Enhanced Effects */}
      <div className="flex flex-col items-center md:items-start max-w-4xl">
        {/* Logo and Typewriter Combined with Brand Animation Variants */}
        <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            whileHover={{
              scale: 1.15,
              rotate: 8,
              transition: { duration: 0.4, type: "spring", stiffness: 300 },
            }}
            className="relative"
          >
            {/* Enhanced Logo Effects */}
            <div
              className={cn(
                "absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse",
                isDark ? "bg-blue-500" : "bg-blue-400",
              )}
            />
            <div
              className={cn("absolute inset-0 rounded-full blur-lg opacity-20", isDark ? "bg-cyan-400" : "bg-blue-300")}
            />
            <img
              src="/images/ruyaa-capital-logo.png"
              alt="Ruyaa Capital Logo"
              className="relative h-12 md:h-16 lg:h-20 w-auto drop-shadow-2xl filter brightness-110"
            />
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 1.4, type: "spring", stiffness: 100 }}
          >
            <TypewriterEffectSmooth words={words} className="justify-start" />
          </motion.div>
        </div>

        {/* Enhanced Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 2.8,
            type: "spring",
            stiffness: 120,
          }}
          className={cn(
            "text-lg md:text-xl lg:text-2xl font-medium mb-6 md:mb-8 text-center md:text-left relative",
            isDark ? "text-gray-300" : "text-gray-600",
          )}
        >
          <span className="relative z-10">Future Vision Powered by AI</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 4.0, ease: "easeInOut" }}
            className={cn("absolute bottom-0 left-0 h-0.5 opacity-50", isDark ? "bg-blue-400" : "bg-blue-500")}
          />
        </motion.div>
      </div>


    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
  isDark,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
  isDark: boolean
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -25,
        scale: 1.02,
        rotateY: 5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <motion.div 
        className="block group-hover/product:shadow-2xl transition-shadow duration-300"
        whileHover={{
          boxShadow: isDark 
            ? "0 25px 50px -12px rgba(255, 255, 255, 0.25)" 
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
      >
        <img
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </motion.div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg"></div>
      <motion.h2 
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold text-lg"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {product.title}
      </motion.h2>
    </motion.div>
  )
}
