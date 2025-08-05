"use client"
import React, { useState } from "react"
import { motion, AnimatePresence, useInView } from "motion/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SocialMediaMarquee from "./social-media-marquee"
import { 
  IconX, 
  IconExternalLink, 
  IconTrendingUp,
  IconCurrencyDollar,
  IconClock,
  IconUsers
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
    scenario: string
    results: string[]
    metrics: {
      label: string
      value: string
      icon: React.ReactNode
    }[]
    image: string
    link: string
  }
}

const aiExamples: AIExample[] = [
  {
    id: "chat-support",
    title: "AI Chat Support",
    description: "Intelligent conversational AI that handles customer inquiries 24/7",
    icon: <MessageIcon />,
    color: "green",
    realExample: {
      company: "Bank of America",
      scenario: "Erica Virtual Assistant handles 35M+ customer interactions daily, providing instant financial support and personalized insights.",
      results: [
        "Instant responses to customer queries",
        "87% resolution rate without human intervention",
        "Available 24/7 across all platforms",
        "Reduced call center volume by 25%"
      ],
      metrics: [
        { label: "Response Time", value: "Instant", icon: <IconClock className="h-4 w-4" /> },
        { label: "Users Served", value: "35M+", icon: <IconUsers className="h-4 w-4" /> },
        { label: "Cost Savings", value: "$500M/year", icon: <IconCurrencyDollar className="h-4 w-4" /> },
        { label: "Accuracy Rate", value: "94%", icon: <IconTrendingUp className="h-4 w-4" /> }
      ],
      image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg",
      link: "https://bankofamerica.com/erica"
    }
  },
  {
    id: "social-media",
    title: "Social Media AI",
    description: "Smart content creation and social media management across platforms",
    icon: <ShareIcon />,
    color: "purple",
    realExample: {
      company: "Netflix",
      scenario: "AI-powered content personalization and social media engagement driving 93% customer retention through intelligent recommendations.",
      results: [
        "Personalized content for each user",
        "Automated social media posting",
        "Real-time engagement analysis",
        "Cross-platform content optimization"
      ],
      metrics: [
        { label: "Engagement Rate", value: "+54%", icon: <IconTrendingUp className="h-4 w-4" /> },
        { label: "Content Views", value: "2.1B daily", icon: <IconUsers className="h-4 w-4" /> },
        { label: "Retention", value: "93%", icon: <IconClock className="h-4 w-4" /> },
        { label: "Revenue Impact", value: "$18B", icon: <IconCurrencyDollar className="h-4 w-4" /> }
      ],
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
      link: "https://netflix.com"
    }
  },
  {
    id: "automation",
    title: "Process Automation",
    description: "Intelligent workflow automation that handles complex business processes",
    icon: <AutomationIcon />,
    color: "orange",
    realExample: {
      company: "Deutsche Bank",
      scenario: "Loan processing automation reduced approval time from 2 weeks to 2 hours with 99.7% accuracy using AI-driven document processing.",
      results: [
        "Automated document processing",
        "Intelligent decision making",
        "Exception handling",
        "Quality assurance checks"
      ],
      metrics: [
        { label: "Processing Speed", value: "168x faster", icon: <IconClock className="h-4 w-4" /> },
        { label: "Accuracy Rate", value: "99.7%", icon: <IconTrendingUp className="h-4 w-4" /> },
        { label: "Cost Savings", value: "45%", icon: <IconCurrencyDollar className="h-4 w-4" /> },
        { label: "Customer Satisfaction", value: "+60%", icon: <IconUsers className="h-4 w-4" /> }
      ],
      image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
      link: "https://db.com"
    }
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    description: "Advanced analytics that predict trends and optimize business decisions",
    icon: <AnalyticsIcon />,
    color: "red",
    realExample: {
      company: "Walmart",
      scenario: "AI demand forecasting across 10,000+ stores reduced inventory costs by $1.2B annually with 94% prediction accuracy.",
      results: [
        "Real-time demand forecasting",
        "Inventory optimization",
        "Price optimization",
        "Supply chain management"
      ],
      metrics: [
        { label: "Forecast Accuracy", value: "94%", icon: <IconTrendingUp className="h-4 w-4" /> },
        { label: "Cost Reduction", value: "$1.2B/year", icon: <IconCurrencyDollar className="h-4 w-4" /> },
        { label: "Processing Speed", value: "18x faster", icon: <IconClock className="h-4 w-4" /> },
        { label: "Stores Covered", value: "10,000+", icon: <IconUsers className="h-4 w-4" /> }
      ],
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
      link: "https://corporate.walmart.com"
    }
  },
  {
    id: "integration",
    title: "Smart Integration",
    description: "Seamless AI-powered integration across all business systems",
    icon: <IntegrationIcon />,
    color: "indigo",
    realExample: {
      company: "Salesforce",
      scenario: "Einstein AI integration across CRM, marketing, and service platforms enabling 360° customer insights and automated workflows.",
      results: [
        "Unified data across platforms",
        "Automated data synchronization",
        "Real-time insights",
        "Seamless workflow automation"
      ],
      metrics: [
        { label: "Data Accuracy", value: "99.9%", icon: <IconTrendingUp className="h-4 w-4" /> },
        { label: "Integration Speed", value: "10x faster", icon: <IconClock className="h-4 w-4" /> },
        { label: "Productivity Gain", value: "+37%", icon: <IconUsers className="h-4 w-4" /> },
        { label: "Revenue Growth", value: "+25%", icon: <IconCurrencyDollar className="h-4 w-4" /> }
      ],
      image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg",
      link: "https://salesforce.com/einstein"
    }
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    description: "AI-driven optimization for maximum efficiency and performance",
    icon: <OptimizationIcon />,
    color: "green",
    realExample: {
      company: "Google",
      scenario: "AI optimization reduced data center cooling costs by 40% and overall energy usage by 15% through intelligent system management.",
      results: [
        "Energy consumption optimization",
        "Resource allocation",
        "Performance monitoring",
        "Predictive maintenance"
      ],
      metrics: [
        { label: "Energy Savings", value: "40%", icon: <IconTrendingUp className="h-4 w-4" /> },
        { label: "Cost Reduction", value: "15%", icon: <IconCurrencyDollar className="h-4 w-4" /> },
        { label: "Efficiency Gain", value: "+30%", icon: <IconClock className="h-4 w-4" /> },
        { label: "Data Centers", value: "100+", icon: <IconUsers className="h-4 w-4" /> }
      ],
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

      {/* Modal for AI Examples */}
      <AnimatePresence>
        {selectedExample && selectedAI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeExample}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={cn(
                "max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border-2",
                isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header */}
                <div className="sticky top-0 z-10 p-6 border-b bg-inherit rounded-t-2xl">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "p-3 rounded-xl",
                        `bg-gradient-to-br ${colorClasses[selectedAI.color as keyof typeof colorClasses]}`
                      )}>
                        {selectedAI.icon}
                      </div>
                      <div>
                        <h3 className={cn(
                          "text-2xl font-bold",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          {selectedAI.title}
                        </h3>
                        <p className={cn(
                          "text-sm mt-1",
                          isDark ? "text-gray-400" : "text-gray-600"
                        )}>
                          {selectedAI.description}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={closeExample}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <IconX className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Company Example */}
                  <Card className={cn(
                    "overflow-hidden",
                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                  )}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className={cn(
                          "text-xl",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          Real Implementation: {selectedAI.realExample.company}
                        </CardTitle>
                        <a
                          href={selectedAI.realExample.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "p-2 rounded-lg transition-colors",
                            isDark ? "hover:bg-gray-700" : "hover:bg-gray-200"
                          )}
                        >
                          <IconExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={selectedAI.realExample.image}
                          alt={selectedAI.realExample.company}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className={cn(
                            "text-sm leading-relaxed",
                            isDark ? "text-gray-300" : "text-gray-600"
                          )}>
                            {selectedAI.realExample.scenario}
                          </p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedAI.realExample.metrics.map((metric, idx) => (
                          <div key={idx} className={cn(
                            "p-3 rounded-lg text-center",
                            isDark ? "bg-gray-900/50" : "bg-white"
                          )}>
                            <div className="flex items-center justify-center mb-2">
                              {metric.icon}
                            </div>
                            <div className={cn(
                              "text-lg font-bold mb-1",
                              isDark ? "text-white" : "text-gray-900"
                            )}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className={cn(
                          "font-semibold mb-3",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          Key Results & Benefits
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {selectedAI.realExample.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <IconTrendingUp className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="text-center">
                    <Button className="px-8 py-3">
                      Implement This AI Solution
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
