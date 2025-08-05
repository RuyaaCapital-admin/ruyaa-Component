"use client"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import React from "react"

export const CleanBackgroundAnimation = ({
  children,
  className,
  isDark,
}: {
  children: React.ReactNode
  className?: string
  isDark?: boolean
}) => {
  // Create floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <div
      className={cn(
        "relative flex items-center w-full justify-center overflow-hidden",
        isDark ? "" : "bg-gradient-to-b from-gray-50 to-white",
        className,
      )}
      style={isDark ? { backgroundColor: "rgba(11, 11, 11, 1)" } : {}}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark 
            ? [
                "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              ]
            : [
                "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
                "radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
                "radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)",
                "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={cn(
            "absolute rounded-full opacity-40",
            isDark ? "bg-blue-400/20" : "bg-blue-500/15"
          )}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Bottom fade */}
      <div
        className={cn(
          "absolute bottom-0 w-full h-32 pointer-events-none",
          isDark ? "bg-gradient-to-t from-black to-transparent" : "bg-gradient-to-t from-white to-transparent"
        )}
      />
    </div>
  )
}
