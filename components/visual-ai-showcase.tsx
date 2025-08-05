"use client"
import React from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import SocialMediaMarquee from "./social-media-marquee"

// High-quality AI Brain Icon
const AIBrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 5.96 2.4 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"/>
    <path d="M9 12h.01M15 12h.01M12 16h.01"/>
  </svg>
)

// Simple connection line component
const ConnectionLine = ({ isDark, delay = 0 }: { isDark: boolean; delay?: number }) => (
  <motion.div
    className={cn("absolute w-0.5 h-24", isDark ? "bg-gray-300" : "bg-gray-600")}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 0.6 }}
    transition={{
      duration: 1.5,
      delay,
      ease: "easeInOut"
    }}
    style={{
      transformOrigin: "top"
    }}
  />
)

// Curved connection paths
const CurvedPath = ({ isDark, pathId }: { isDark: boolean; pathId: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
    <defs>
      <path
        id={pathId}
        d="M 50 50 Q 200 50 350 100"
        fill="none"
        stroke={isDark ? "#d1d5db" : "#6b7280"}
        strokeWidth="2"
        strokeDasharray="5,5"
      />
    </defs>
    <motion.path
      d="M 50 50 Q 200 50 350 100"
      fill="none"
      stroke={isDark ? "#d1d5db" : "#6b7280"}
      strokeWidth="2"
      strokeDasharray="5,5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.circle
      r="3"
      fill={isDark ? "#ffffff" : "#000000"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <animateMotion dur="2s" begin="0s" fill="freeze">
        <mpath xlinkHref={`#${pathId}`} />
      </animateMotion>
    </motion.circle>
  </svg>
)

const aiServices = [
  {
    id: "social-management",
    title: "Social Media Management",
    description: "AI manages all your social platforms automatically",
    visual: "SocialAI",
    results: ["Posts to all platforms", "Responds to comments 24/7", "Analyzes engagement data"],
    example: "Schedule posts across Instagram, Twitter, LinkedIn simultaneously"
  },
  {
    id: "customer-support",
    title: "Multi-Platform Support",
    description: "One AI handles customer queries across all channels",
    visual: "SupportAI",
    results: ["WhatsApp, email, social unified", "Instant responses", "95% resolution rate"],
    example: "Customer asks on Instagram, AI provides support and follows up via email"
  },
  {
    id: "content-creation",
    title: "Content & Campaign Automation",
    description: "AI creates and distributes content across platforms",
    visual: "ContentAI",
    results: ["Platform-specific content", "Optimal timing", "Brand consistency"],
    example: "AI creates LinkedIn post for professionals, Instagram story for youth audience"
  }
]

export default function VisualAIShowcase({ isDark }: { isDark: boolean }) {
  const [activeService, setActiveService] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % aiServices.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={ref}
      className={cn(
        "py-20 md:py-32 px-4 relative",
        isDark ? "bg-black" : "bg-gray-50"
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold mb-6",
            isDark ? "text-white" : "text-gray-900"
          )}>
            One AI Agent, Every Platform
          </h2>
          <p className={cn(
            "text-xl max-w-3xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Watch how a single AI connects and manages all your business platforms automatically
          </p>
        </motion.div>

        {/* Main Visual Connection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            "relative mb-16 p-8 rounded-2xl",
            isDark ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left: AI Brain */}
            <div className="flex flex-col items-center">
              <motion.div
                className={cn(
                  "w-24 h-24 rounded-full border-4 flex items-center justify-center mb-4",
                  isDark ? "bg-white border-gray-600 text-black" : "bg-black border-gray-300 text-white"
                )}
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: isDark 
                    ? ["0 0 0 0 rgba(255, 255, 255, 0.3)", "0 0 0 10px rgba(255, 255, 255, 0)", "0 0 0 0 rgba(255, 255, 255, 0.3)"]
                    : ["0 0 0 0 rgba(0, 0, 0, 0.3)", "0 0 0 10px rgba(0, 0, 0, 0)", "0 0 0 0 rgba(0, 0, 0, 0.3)"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <AIBrainIcon className="w-12 h-12" />
              </motion.div>
              <h3 className={cn(
                "text-xl font-bold text-center",
                isDark ? "text-white" : "text-gray-900"
              )}>
                AI Agent
              </h3>
              <p className={cn(
                "text-sm text-center mt-2",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                One intelligent brain managing everything
              </p>
            </div>

            {/* Center: Connection Visualization */}
            <div className="relative flex items-center justify-center h-40">
              {/* Curved connecting lines */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={cn("absolute w-1 opacity-60", isDark ? "bg-gray-300" : "bg-gray-600")}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '40%',
                      height: '20%',
                      transformOrigin: 'bottom'
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Connecting text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={cn(
                  "text-center px-4 py-2 rounded-lg",
                  isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                )}
              >
                <span className="text-sm font-medium">Connected to</span>
              </motion.div>
            </div>

            {/* Right: Social Media Platforms */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={cn(
                  "p-4 rounded-lg border",
                  isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                )}
              >
                <SocialMediaMarquee isDark={isDark} />
              </motion.div>
              <h3 className={cn(
                "text-xl font-bold text-center mt-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                All Platforms
              </h3>
              <p className={cn(
                "text-sm text-center mt-2",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                Social media, messaging, email & more
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Examples */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h3 className={cn(
              "text-2xl md:text-3xl font-bold mb-4",
              isDark ? "text-white" : "text-gray-900"
            )}>
              See It In Action
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={cn(
                  "p-6 rounded-lg border transition-all duration-300 hover:scale-105",
                  isDark 
                    ? "bg-gray-900 border-gray-800 hover:border-gray-600" 
                    : "bg-white border-gray-200 hover:border-gray-400"
                )}
              >
                <h4 className={cn(
                  "text-lg font-bold mb-3",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {service.title}
                </h4>
                <p className={cn(
                  "text-sm mb-4",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  {service.description}
                </p>
                <div className={cn(
                  "text-xs p-3 rounded border-l-4 mb-4",
                  isDark 
                    ? "bg-gray-800 border-gray-600 text-gray-300" 
                    : "bg-gray-50 border-gray-400 text-gray-600"
                )}>
                  {service.example}
                </div>
                <div className="space-y-2">
                  {service.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className={cn(
                        "w-2 h-2 rounded-full mr-3",
                        isDark ? "bg-gray-300" : "bg-gray-600"
                      )} />
                      <span className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className={cn(
            "px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105",
            isDark 
              ? "bg-white text-black hover:bg-gray-100" 
              : "bg-black text-white hover:bg-gray-900"
          )}>
            Connect Your AI Agent
          </button>
        </motion.div>
      </div>
    </section>
  )
}
