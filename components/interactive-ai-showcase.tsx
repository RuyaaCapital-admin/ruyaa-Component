"use client"
import React, { useState } from "react"
import { motion, AnimatePresence, useInView } from "motion/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { SpinningLogos } from "@/components/ui/spinning-logos"
import SocialMediaMarquee from "./social-media-marquee"
import { 
  IconX, 
  IconExternalLink, 
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

interface AIExample {
  id: string
  title: string
  description: string
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

const colorAccents = {
  green: "text-green-500",
  purple: "text-purple-500",
  orange: "text-orange-500",
  red: "text-red-500",
  indigo: "text-indigo-500"
}

export default function InteractiveAIShowcase({ isDark }: { isDark: boolean }) {
  const [selectedExample, setSelectedExample] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const openExample = (capability: string) => {
    setSelectedExample(capability)
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

        {/* New Spinning AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className={cn(
            "text-3xl font-bold text-center mb-12",
            isDark ? "text-white" : "text-gray-900"
          )}>
            AI Capabilities - Click to See Real Examples
          </h3>
          
          {/* Spinning Logos Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <SpinningLogos 
              isDark={isDark}
              onIconClick={openExample}
              centerText="AI AGENT"
            />
          </motion.div>

          {/* Interactive Instruction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-8"
          >
            <p className={cn(
              "text-lg font-medium",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              Click any capability to see real company examples
            </p>
          </motion.div>
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

                {/* Company info overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">
                    {selectedAI.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    at {selectedAI.realExample.company}
                  </p>
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
