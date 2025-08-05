"use client"
import React, { useState } from "react"
import { motion, AnimatePresence, useInView } from "motion/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import SocialMediaMarquee from "./social-media-marquee"
import { 
  IconX, 
  IconExternalLink, 
  IconTrendingUp,
  IconSparkles,
  IconCheck
} from "@tabler/icons-react"

// High-quality AI Brain Icon
const AIBrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 5.96 2.4 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"/>
    <path d="M9 12h.01M15 12h.01M12 16h.01"/>
  </svg>
)

// Icon Components
const MessageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const ShareIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
)

const AutomationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const AnalyticsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18"/>
    <path d="M7 12l3-3 3 3 5-5"/>
  </svg>
)

const IntegrationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"/>
    <path d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
    <rect x="8" y="8" width="8" height="8" rx="2"/>
  </svg>
)

const OptimizationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14,2 14,8 20,8"/>
    <path d="M12 18v-6"/>
    <path d="M9 15h6"/>
  </svg>
)

interface AIExample {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  realExample: {
    company: string
    shortDescription: string
    mainBenefit: string
    resultNumber: string
    resultLabel: string
    image: string
    link: string
  }
}

const aiExamples: AIExample[] = [
  {
    id: "chat-support",
    title: "AI Chat Support",
    description: "24/7 intelligent customer service",
    icon: <MessageIcon />,
    color: "green",
    realExample: {
      company: "Bank of America",
      shortDescription: "Erica AI assistant helps 35M+ customers with banking instantly",
      mainBenefit: "Instant support, no waiting",
      resultNumber: "35M+",
      resultLabel: "customers served daily",
      image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg",
      link: "https://bankofamerica.com/erica"
    }
  },
  {
    id: "social-media",
    title: "Social Media AI",
    description: "Smart content creation & management",
    icon: <ShareIcon />,
    color: "purple",
    realExample: {
      company: "Netflix",
      shortDescription: "AI creates personalized content for each viewer automatically",
      mainBenefit: "Perfect content every time",
      resultNumber: "93%",
      resultLabel: "customer retention rate",
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
      link: "https://netflix.com"
    }
  },
  {
    id: "automation",
    title: "Process Automation",
    description: "Smart workflow automation",
    icon: <AutomationIcon />,
    color: "orange",
    realExample: {
      company: "Deutsche Bank",
      shortDescription: "Loan approvals now take 2 hours instead of 2 weeks",
      mainBenefit: "168x faster processing",
      resultNumber: "99.7%",
      resultLabel: "accuracy rate",
      image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
      link: "https://db.com"
    }
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    description: "Predict trends & optimize decisions",
    icon: <AnalyticsIcon />,
    color: "red",
    realExample: {
      company: "Walmart",
      shortDescription: "AI predicts what customers want before they know it",
      mainBenefit: "Perfect inventory planning",
      resultNumber: "$1.2B",
      resultLabel: "saved annually",
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
      link: "https://corporate.walmart.com"
    }
  },
  {
    id: "integration",
    title: "Smart Integration",
    description: "Connect all your business systems",
    icon: <IntegrationIcon />,
    color: "indigo",
    realExample: {
      company: "Salesforce",
      shortDescription: "Einstein AI connects all customer data in one smart platform",
      mainBenefit: "Complete customer view",
      resultNumber: "37%",
      resultLabel: "productivity increase",
      image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg",
      link: "https://salesforce.com/einstein"
    }
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    description: "AI-driven efficiency improvements",
    icon: <OptimizationIcon />,
    color: "green",
    realExample: {
      company: "Google",
      shortDescription: "AI reduced data center cooling costs automatically",
      mainBenefit: "Smart energy savings",
      resultNumber: "40%",
      resultLabel: "energy cost reduction",
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
      link: "https://deepmind.com/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-40"
    }
  }
]

const colorClasses = {
  green: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-600",
  purple: "from-purple-500/20 to-violet-500/20 border-purple-500/30 text-purple-600",
  orange: "from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-600",
  red: "from-red-500/20 to-rose-500/20 border-red-500/30 text-red-600",
  indigo: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30 text-indigo-600"
}

const colorAccents = {
  green: "text-green-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
  red: "text-red-500",
  indigo: "text-indigo-500"
}

export default function InteractiveAIShowcase({ isDark }: { isDark: boolean }) {
  const [selectedExample, setSelectedExample] = useState<string | null>(null)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const openExample = (id: string) => {
    setSelectedExample(id)
  }

  const closeExample = () => {
    setSelectedExample(null)
  }

  const selectedAI = aiExamples.find(ex => ex.id === selectedExample)

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
            "relative mb-16 p-8 rounded-2xl border",
            isDark ? "border-gray-800" : "bg-white border-gray-200"
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
                  isDark ? "border-gray-700" : "bg-white border-gray-300"
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

        {/* Interactive AI Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className={cn(
            "text-3xl font-bold text-center mb-8",
            isDark ? "text-white" : "text-gray-900"
          )}>
            AI Capabilities - Click to See Real Examples
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {aiExamples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onHoverStart={() => setHoveredIcon(example.id)}
                onHoverEnd={() => setHoveredIcon(null)}
              >
                <motion.button
                  onClick={() => openExample(example.id)}
                  className={cn(
                    "relative w-full aspect-square rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 group overflow-hidden",
                    `bg-gradient-to-br ${colorClasses[example.color as keyof typeof colorClasses]}`,
                    "hover:scale-110 hover:shadow-2xl"
                  )}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: isDark 
                      ? "0 20px 40px rgba(255, 255, 255, 0.1)" 
                      : "0 20px 40px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                    <motion.div
                      className="mb-3"
                      animate={{
                        rotate: hoveredIcon === example.id ? [0, -10, 10, 0] : 0,
                        scale: hoveredIcon === example.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {example.icon}
                    </motion.div>
                    <span className="text-sm font-semibold text-center leading-tight">
                      {example.title}
                    </span>
                  </div>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
                
                {/* Floating tooltip */}
                <AnimatePresence>
                  {hoveredIcon === example.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -10, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className={cn(
                        "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg border text-xs font-medium whitespace-nowrap z-20",
                        isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"
                      )}
                    >
                      Click for real example
                      <div className={cn(
                        "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent",
                        isDark ? "border-t-gray-800" : "border-t-white"
                      )} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Simplified Modal for AI Examples */}
      <AnimatePresence>
        {selectedExample && selectedAI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeExample}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className={cn(
                "max-w-2xl w-full rounded-3xl border-2 overflow-hidden",
                isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Visual Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedAI.realExample.image}
                  alt={selectedAI.realExample.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Close button */}
                <button
                  onClick={closeExample}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <IconX className="h-5 w-5" />
                </button>

                {/* Company logo/icon overlay */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className={cn(
                    "p-3 rounded-xl backdrop-blur-sm",
                    `bg-gradient-to-br ${colorClasses[selectedAI.color as keyof typeof colorClasses]}`
                  )}>
                    {selectedAI.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">
                      {selectedAI.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      at {selectedAI.realExample.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Main description */}
                <div className="text-center">
                  <p className={cn(
                    "text-lg leading-relaxed",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>
                    {selectedAI.realExample.shortDescription}
                  </p>
                </div>

                {/* Key benefit highlight */}
                <div className={cn(
                  "text-center p-6 rounded-2xl",
                  isDark ? "bg-gray-800/50" : "bg-gray-50"
                )}>
                  <div className="flex items-center justify-center mb-3">
                    <IconSparkles className={cn("h-6 w-6 mr-2", colorAccents[selectedAI.color as keyof typeof colorAccents])} />
                    <span className={cn(
                      "text-sm font-medium uppercase tracking-wide",
                      colorAccents[selectedAI.color as keyof typeof colorAccents]
                    )}>
                      Main Benefit
                    </span>
                  </div>
                  <h4 className={cn(
                    "text-2xl font-bold mb-4",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {selectedAI.realExample.mainBenefit}
                  </h4>
                  
                  {/* Big result number */}
                  <div className="flex flex-col items-center">
                    <div className={cn(
                      "text-5xl font-bold mb-2",
                      colorAccents[selectedAI.color as keyof typeof colorAccents]
                    )}>
                      {selectedAI.realExample.resultNumber}
                    </div>
                    <div className={cn(
                      "text-sm",
                      isDark ? "text-gray-400" : "text-gray-600"
                    )}>
                      {selectedAI.realExample.resultLabel}
                    </div>
                  </div>
                </div>

                {/* Simple success indicator */}
                <div className="flex items-center justify-center space-x-2 text-green-500">
                  <IconCheck className="h-5 w-5" />
                  <span className="font-medium">Real implementation, proven results</span>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    className="flex-1 h-12 text-base font-medium"
                    onClick={() => window.open(selectedAI.realExample.link, '_blank')}
                  >
                    <IconExternalLink className="h-5 w-5 mr-2" />
                    View Live Example
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 h-12 text-base font-medium"
                  >
                    Get This AI Solution
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
