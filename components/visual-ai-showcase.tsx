"use client"
import React from "react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import SocialMediaMarquee from "./social-media-marquee"
import { Component as GlassIcons } from "./glass-icons"

// High-quality AI Brain Icon
const AIBrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 5.96 2.4 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"/>
    <path d="M9 12h.01M15 12h.01M12 16h.01"/>
  </svg>
)

// Icons for glass icons component
const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
)

const AutomationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18"/>
    <path d="M7 12l3-3 3 3 5-5"/>
  </svg>
)

const IntegrationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"/>
    <path d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
    <rect x="8" y="8" width="8" height="8" rx="2"/>
  </svg>
)

const OptimizationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14,2 14,8 20,8"/>
    <path d="M12 18v-6"/>
    <path d="M9 15h6"/>
  </svg>
)

const glassIconsItems = [
  {
    icon: <MessageIcon />,
    color: "green",
    label: "Chat Support"
  },
  {
    icon: <ShareIcon />,
    color: "purple",
    label: "Social Media"
  },
  {
    icon: <AutomationIcon />,
    color: "orange",
    label: "Automation"
  },
  {
    icon: <AnalyticsIcon />,
    color: "red",
    label: "Analytics"
  },
  {
    icon: <IntegrationIcon />,
    color: "indigo",
    label: "Integration"
  },
  {
    icon: <OptimizationIcon />,
    color: "green",
    label: "Optimization"
  }
]

export default function VisualAIShowcase({ isDark }: { isDark: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

        {/* Glass Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={cn(
            "rounded-2xl p-8",
            isDark ? "text-white" : "text-gray-900"
          )}
        >
          <GlassIcons items={glassIconsItems} className="max-w-4xl" />
        </motion.div>
      </div>
    </section>
  )
}
