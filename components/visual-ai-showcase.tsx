"use client"
import React from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

// Interactive Demo Components
const AutomationDemo = ({ isDark }: { isDark: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-40 rounded-lg overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700">
      {/* Manual Process */}
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="manual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <div className={cn("text-4xl mb-2", isDark ? "text-gray-400" : "text-gray-600")}>
                😴
              </div>
              <p className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-700")}>
                Manually processing...
              </p>
              <div className={cn("text-xs mt-1", isDark ? "text-gray-500" : "text-gray-500")}>
                Takes 8 hours
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ai"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* AI Processing Animation */}
            <div className="flex items-center justify-between h-full px-8">
              {/* Input */}
              <motion.div
                className={cn("w-12 h-8 rounded border-2", isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300")}
                animate={{ x: [0, 100, 200] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className={cn("w-full h-1 mt-1 rounded", isDark ? "bg-gray-600" : "bg-gray-200")} />
                <div className={cn("w-2/3 h-1 mt-1 rounded", isDark ? "bg-gray-600" : "bg-gray-200")} />
              </motion.div>
              
              {/* AI Brain */}
              <motion.div
                className={cn("w-16 h-16 rounded-full border-2 flex items-center justify-center", isDark ? "bg-white border-gray-600" : "bg-black border-gray-300")}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className={cn("text-lg", isDark ? "text-black" : "text-white")}>⚡</span>
              </motion.div>
              
              {/* Output */}
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="text-2xl">✅</div>
                <div className={cn("text-xs", isDark ? "text-gray-300" : "text-gray-700")}>Done in 5 minutes</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PredictionDemo = ({ isDark }: { isDark: boolean }) => {
  const [prediction, setPrediction] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPrediction(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const predictions = ["📈 Sales will increase 27%", "⚠️ Equipment needs maintenance", "💰 Best time to buy inventory", "🎯 Target these customers"]

  return (
    <div className="relative w-full h-40 rounded-lg overflow-hidden">
      {/* Data points flowing in */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={cn("absolute w-3 h-3 rounded-full", isDark ? "bg-white" : "bg-black")}
            animate={{
              x: [Math.random() * 200 - 100, 0],
              y: [Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Central AI */}
        <motion.div
          className={cn("w-20 h-20 rounded-full border-4 flex items-center justify-center z-10", isDark ? "bg-gray-900 border-white" : "bg-white border-black")}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-2xl">🔮</span>
        </motion.div>
      </div>
      
      {/* Prediction Output */}
      <motion.div
        key={prediction}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className={cn("px-4 py-2 rounded-lg text-sm", isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black")}>
          {predictions[prediction]}
        </div>
      </motion.div>
    </div>
  )
}

const IntegrationDemo = ({ isDark }: { isDark: boolean }) => {
  const [connected, setConnected] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setConnected(prev => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-40">
      {/* Systems */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={cn("absolute w-12 h-8 rounded border-2", isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300")}
          style={{
            left: `${20 + i * 20}%`,
            top: i % 2 === 0 ? '20%' : '70%'
          }}
          animate={{
            borderColor: connected 
              ? (isDark ? '#ffffff' : '#000000')
              : (isDark ? '#4b5563' : '#d1d5db')
          }}
        >
          <div className={cn("w-full h-1 mt-1 rounded", isDark ? "bg-gray-600" : "bg-gray-200")} />
          <div className={cn("w-2/3 h-1 mt-1 rounded", isDark ? "bg-gray-600" : "bg-gray-200")} />
        </motion.div>
      ))}
      
      {/* Connection Lines */}
      {connected && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={cn("absolute h-0.5", isDark ? "bg-white" : "bg-black")}
              style={{
                left: `${32 + i * 20}%`,
                right: `${48 - i * 20}%`,
                top: i % 2 === 0 ? '28%' : '78%'
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.2 }}
            />
          ))}
        </>
      )}
      
      {/* Status */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <div className={cn("text-lg mb-1", connected ? "animate-pulse" : "")}>
          {connected ? "🔗" : "❌"}
        </div>
        <div className={cn("text-xs", isDark ? "text-gray-300" : "text-gray-700")}>
          {connected ? "All Connected" : "Disconnected"}
        </div>
      </div>
    </div>
  )
}

const OptimizationDemo = ({ isDark }: { isDark: boolean }) => {
  const [optimized, setOptimized] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOptimized(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-40">
      {/* Resource Bars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={cn("absolute bottom-8 w-8 rounded-t", isDark ? "bg-gray-600" : "bg-gray-400")}
          style={{ left: `${20 + i * 15}%` }}
          animate={{
            height: optimized ? "60px" : `${20 + Math.random() * 40}px`,
            backgroundColor: optimized 
              ? (isDark ? '#ffffff' : '#000000')
              : (isDark ? '#4b5563' : '#9ca3af')
          }}
          transition={{ duration: 1 }}
        />
      ))}
      
      {/* Efficiency Indicator */}
      <motion.div
        className={cn("absolute top-4 right-4 px-3 py-1 rounded text-sm font-bold", isDark ? "bg-white text-black" : "bg-black text-white")}
        animate={{ 
          scale: optimized ? [1, 1.1, 1] : 1,
          opacity: optimized ? 1 : 0.5
        }}
      >
        {optimized ? "+45% Efficient" : "Inefficient"}
      </motion.div>
    </div>
  )
}

const services = [
  {
    id: "automation",
    title: "Task Automation",
    simple: "AI does boring work for you",
    demo: AutomationDemo,
    result: "Save 12 hours/week",
    icon: "🤖"
  },
  {
    id: "prediction",
    title: "Future Insights", 
    simple: "See what happens next",
    demo: PredictionDemo,
    result: "Prevent $2.3M losses",
    icon: "🔮"
  },
  {
    id: "integration",
    title: "Connect Everything",
    simple: "All tools work together", 
    demo: IntegrationDemo,
    result: "89% less data entry",
    icon: "🔗"
  },
  {
    id: "optimization",
    title: "Work Smarter",
    simple: "Find the best way to do things",
    demo: OptimizationDemo,
    result: "45% productivity boost",
    icon: "⚡"
  }
]

export default function VisualAIShowcase({ isDark }: { isDark: boolean }) {
  const [activeService, setActiveService] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length)
    }, 8000)
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold mb-4",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Watch AI Work
          </h2>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            See exactly how AI helps your business
          </p>
        </motion.div>

        {/* Main Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "rounded-2xl p-8 mb-8 shadow-2xl",
            isDark ? "bg-gray-900" : "bg-white"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Demo */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{services[activeService].icon}</span>
                <div>
                  <h3 className={cn(
                    "text-2xl font-bold",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {services[activeService].title}
                  </h3>
                  <p className={cn(
                    "text-lg",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>
                    {services[activeService].simple}
                  </p>
                </div>
              </div>
              
              <div className={cn(
                "rounded-lg p-6 mb-4",
                isDark ? "bg-gray-800" : "bg-gray-100"
              )}>
                {React.createElement(services[activeService].demo, { isDark })}
              </div>
              
              <div className="text-center">
                <div className={cn(
                  "inline-block px-6 py-3 rounded-lg font-bold text-lg",
                  isDark ? "bg-white text-black" : "bg-black text-white"
                )}>
                  Result: {services[activeService].result}
                </div>
              </div>
            </div>

            {/* Right: Service Selector */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    "w-full p-6 rounded-lg text-left transition-all duration-300",
                    activeService === index
                      ? isDark 
                        ? "bg-white text-black shadow-xl" 
                        : "bg-black text-white shadow-xl"
                      : isDark 
                        ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{service.title}</h4>
                      <p className="text-sm opacity-80">{service.simple}</p>
                      <p className="text-sm font-semibold mt-2">{service.result}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className={cn(
            "px-8 py-4 rounded-lg font-bold text-xl transition-all duration-200 hover:scale-105 shadow-lg",
            isDark 
              ? "bg-white text-black hover:bg-gray-100" 
              : "bg-black text-white hover:bg-gray-900"
          )}>
            Get AI For Your Business
          </button>
        </motion.div>
      </div>
    </section>
  )
}
