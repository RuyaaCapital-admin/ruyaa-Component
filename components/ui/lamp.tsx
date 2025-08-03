"use client"
import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function LampDemo({ isDark }: { isDark: boolean }) {
  return (
    <LampContainer isDark={isDark}>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 flex flex-col items-center"
      >
        <img
          src="/images/ruyaa-capital-logo.png"
          alt="Ruyaa Capital Logo"
          className="h-20 md:h-28 lg:h-32 w-auto mb-4 md:mb-6 drop-shadow-2xl"
        />
        <h1
          className={cn(
            "py-4 bg-clip-text text-center text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-transparent",
            isDark ? "bg-gradient-to-br from-slate-300 to-slate-500" : "bg-gradient-to-br from-slate-700 to-slate-900",
          )}
        >
          Future Vision <br /> Powered by AI
        </h1>
      </motion.div>
    </LampContainer>
  )
}

export const LampContainer = ({
  children,
  className,
  isDark,
}: {
  children: React.ReactNode
  className?: string
  isDark: boolean
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className,
      )}
      style={{ backgroundColor: "rgba(15, 15, 16, 1)" }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic text-white [--conic-position:from_70deg_at_center_top]",
            isDark ? "from-cyan-500 via-transparent to-transparent" : "from-blue-500 via-transparent to-transparent",
          )}
        >
          <div
            className={cn(
              "absolute w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-gray-100",
            )}
          />
          <div
            className={cn(
              "absolute w-40 h-[100%] left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-gray-100",
            )}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn(
            "absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white [--conic-position:from_290deg_at_center_top]",
            isDark ? "from-transparent via-transparent to-cyan-500" : "from-transparent via-transparent to-blue-500",
          )}
        >
          <div
            className={cn(
              "absolute w-40 h-[100%] right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-gray-100",
            )}
          />
          <div
            className={cn(
              "absolute w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]",
              isDark ? "bg-slate-950" : "bg-gray-100",
            )}
          />
        </motion.div>
        <div
          className={cn(
            "absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl",
            isDark ? "bg-slate-950" : "bg-gray-100",
          )}
        ></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className={cn(
            "absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl",
            isDark ? "bg-cyan-500" : "bg-blue-500",
          )}
        ></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl",
            isDark ? "bg-cyan-400" : "bg-blue-400",
          )}
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]",
            isDark ? "bg-cyan-400" : "bg-blue-400",
          )}
        />
        <div
          className={cn(
            "absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]",
            isDark ? "bg-slate-950" : "bg-gray-100",
          )}
        ></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">{children}</div>
    </div>
  )
}
