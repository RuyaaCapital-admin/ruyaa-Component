"use client"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AIService {
  id: string
  title: string
  subtitle: string
  simpleExplanation: string
  beforeScenario: {
    title: string
    visual: React.ReactNode
    problems: string[]
  }
  afterScenario: {
    title: string
    visual: React.ReactNode
    benefits: string[]
  }
  liveDemo: React.ReactNode
  industryExample: string
  result: string
}

const ProcessingAnimation = ({ isDark }: { isDark: boolean }) => (
  <div className="relative w-full h-32">
    {/* Documents flowing */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className={cn(
          "absolute w-8 h-10 rounded border-2",
          isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
        )}
        initial={{ x: -20, y: 20 + i * 15, opacity: 0 }}
        animate={{ 
          x: [0, 60, 120, 180],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }}
      >
        <div className={cn("w-full h-2 mt-2 mx-1 rounded", isDark ? "bg-gray-600" : "bg-gray-200")} />
        <div className={cn("w-3/4 h-1.5 mt-1 mx-1 rounded", isDark ? "bg-gray-700" : "bg-gray-300")} />
        <div className={cn("w-1/2 h-1.5 mt-1 mx-1 rounded", isDark ? "bg-gray-700" : "bg-gray-300")} />
      </motion.div>
    ))}
    
    {/* AI Processing Center */}
    <div className={cn(
      "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 flex items-center justify-center",
      isDark ? "bg-gray-900 border-gray-500" : "bg-gray-100 border-gray-400"
    )}>
      <motion.div
        className={cn("w-8 h-8 rounded-full", isDark ? "bg-white" : "bg-black")}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
    
    {/* Results */}
    <motion.div
      className={cn(
        "absolute right-4 top-8 w-12 h-12 rounded border-2 flex items-center justify-center",
        isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
      )}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
    >
      <span className="text-lg">✓</span>
    </motion.div>
  </div>
)

const DataFlowAnimation = ({ isDark }: { isDark: boolean }) => (
  <div className="relative w-full h-32">
    {/* Data sources */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className={cn(
          "absolute w-6 h-6 rounded-full",
          isDark ? "bg-white" : "bg-black"
        )}
        style={{ left: `${i * 25}%`, top: '10%' }}
        animate={{
          y: [0, 40, 80],
          scale: [1, 0.8, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeOut"
        }}
      />
    ))}
    
    {/* Central AI brain */}
    <div className={cn(
      "absolute left-1/2 bottom-4 transform -translate-x-1/2 w-20 h-12 rounded-lg border-2 flex items-center justify-center",
      isDark ? "bg-gray-900 border-gray-500" : "bg-gray-100 border-gray-400"
    )}>
      <motion.div
        className="grid grid-cols-3 gap-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {[...Array(9)].map((_, i) => (
          <div key={i} className={cn("w-1 h-1 rounded-full", isDark ? "bg-white" : "bg-black")} />
        ))}
      </motion.div>
    </div>
    
    {/* Insights */}
    <motion.div
      className={cn(
        "absolute right-4 bottom-8 px-3 py-1 rounded text-xs",
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      )}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
    >
      Insights Ready
    </motion.div>
  </div>
)

const SystemIntegrationAnimation = ({ isDark }: { isDark: boolean }) => (
  <div className="relative w-full h-32">
    {/* Disconnected systems */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className={cn(
          "absolute w-12 h-8 rounded border-2",
          isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
        )}
        style={{ 
          left: `${10 + i * 30}%`, 
          top: i % 2 === 0 ? '20%' : '60%' 
        }}
        animate={{
          borderColor: isDark ? ['#4b5563', '#ffffff', '#4b5563'] : ['#d1d5db', '#000000', '#d1d5db']
        }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
      />
    ))}
    
    {/* Connection lines */}
    {[...Array(2)].map((_, i) => (
      <motion.div
        key={i}
        className={cn("absolute h-0.5", isDark ? "bg-white" : "bg-black")}
        style={{
          left: '22%',
          top: i === 0 ? '28%' : '68%',
          right: '22%'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1 + i * 0.5, duration: 1, repeat: Infinity, repeatDelay: 2 }}
      />
    ))}
    
    {/* Central hub */}
    <motion.div
      className={cn(
        "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2",
        isDark ? "bg-white border-gray-500" : "bg-black border-gray-400"
      )}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </div>
)

const OptimizationAnimation = ({ isDark }: { isDark: boolean }) => (
  <div className="relative w-full h-32">
    {/* Resource blocks */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className={cn(
          "absolute bottom-4 w-6 rounded-t",
          isDark ? "bg-gray-600" : "bg-gray-400"
        )}
        style={{ 
          left: `${20 + i * 15}%`,
          height: `${30 + Math.random() * 40}px`
        }}
        animate={{
          height: [`${30 + Math.random() * 40}px`, `${60 + Math.random() * 20}px`],
          backgroundColor: isDark ? ['#4b5563', '#ffffff', '#4b5563'] : ['#9ca3af', '#000000', '#9ca3af']
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          delay: i * 0.2,
          repeatDelay: 1
        }}
      />
    ))}
    
    {/* Efficiency indicator */}
    <motion.div
      className={cn(
        "absolute top-4 right-4 px-2 py-1 rounded text-xs font-bold",
        isDark ? "bg-white text-black" : "bg-black text-white"
      )}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity, delay: 1 }}
    >
      +45% Efficiency
    </motion.div>
  </div>
)

const services: AIService[] = [
  {
    id: "automation",
    title: "Process Automation",
    subtitle: "Let AI Handle Repetitive Tasks",
    simpleExplanation: "Think of it like having a super-fast assistant that never gets tired and can handle boring, repetitive work 24/7.",
    beforeScenario: {
      title: "Manual Work",
      visual: <ProcessingAnimation isDark={false} />,
      problems: ["Staff spending hours on data entry", "Human errors in processing", "Work piling up during busy periods"]
    },
    afterScenario: {
      title: "AI Automation",
      visual: <ProcessingAnimation isDark={true} />,
      benefits: ["AI processes 1000x faster", "Zero human errors", "Works 24/7 without breaks"]
    },
    liveDemo: <ProcessingAnimation isDark={true} />,
    industryExample: "Real Estate: AI reads property documents, extracts key info, and updates listings automatically",
    result: "Saves 12 hours/week per agent"
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    subtitle: "See What's Coming Before It Happens",
    simpleExplanation: "Like having a crystal ball for your business - AI analyzes patterns to predict future trends and problems.",
    beforeScenario: {
      title: "Guessing",
      visual: <DataFlowAnimation isDark={false} />,
      problems: ["Making decisions based on gut feeling", "Surprised by sudden changes", "Missing opportunities"]
    },
    afterScenario: {
      title: "AI Predictions",
      visual: <DataFlowAnimation isDark={true} />,
      benefits: ["Predict trends 2 weeks early", "Never miss opportunities", "Data-backed decisions"]
    },
    liveDemo: <DataFlowAnimation isDark={true} />,
    industryExample: "Manufacturing: AI predicts when machines will break down before they actually do",
    result: "Prevented $2.3M in equipment losses"
  },
  {
    id: "integration",
    title: "System Integration",
    subtitle: "Connect Everything Into One Smart System",
    simpleExplanation: "Imagine all your different software tools talking to each other automatically, sharing information instantly.",
    beforeScenario: {
      title: "Disconnected",
      visual: <SystemIntegrationAnimation isDark={false} />,
      problems: ["Data scattered across different systems", "Manual copying between platforms", "Information delays"]
    },
    afterScenario: {
      title: "Connected",
      visual: <SystemIntegrationAnimation isDark={true} />,
      benefits: ["All systems work as one", "Instant data sharing", "No more manual copying"]
    },
    liveDemo: <SystemIntegrationAnimation isDark={true} />,
    industryExample: "Healthcare: Patient info flows automatically between appointment system, billing, and medical records",
    result: "Reduced data entry by 89%"
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    subtitle: "Make Everything Work Better and Faster",
    simpleExplanation: "AI finds the best way to do things - like having an efficiency expert that optimizes every process.",
    beforeScenario: {
      title: "Inefficient",
      visual: <OptimizationAnimation isDark={false} />,
      problems: ["Resources wasted on wrong priorities", "Slow processes", "High operational costs"]
    },
    afterScenario: {
      title: "Optimized",
      visual: <OptimizationAnimation isDark={true} />,
      benefits: ["Resources used perfectly", "Processes run smoothly", "Costs minimized"]
    },
    liveDemo: <OptimizationAnimation isDark={true} />,
    industryExample: "Construction: AI optimizes worker schedules and material delivery timing",
    result: "45% productivity boost"
  }
]

export default function VisualAIShowcase({ isDark }: { isDark: boolean }) {
  const [activeService, setActiveService] = useState<string>(services[0].id)
  const [showBeforeAfter, setShowBeforeAfter] = useState<boolean>(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const activeServiceData = services.find(s => s.id === activeService) || services[0]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => {
        const currentIndex = services.findIndex(s => s.id === prev)
        const nextIndex = (currentIndex + 1) % services.length
        return services[nextIndex].id
      })
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={ref}
      className={cn(
        "py-20 md:py-32 px-4 relative overflow-hidden",
        isDark ? "bg-black" : "bg-white"
      )}
    >
      {/* Futuristic grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className={cn(
            "text-3xl md:text-5xl lg:text-6xl font-bold mb-6",
            isDark ? "text-white" : "text-gray-900"
          )}>
            See AI In Action
          </h2>
          <p className={cn(
            "text-lg md:text-xl max-w-3xl mx-auto mb-8",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Watch how AI transforms everyday business tasks into automated, intelligent processes.
          </p>
          
          {/* Before/After Toggle */}
          <motion.button
            onClick={() => setShowBeforeAfter(!showBeforeAfter)}
            className={cn(
              "px-6 py-3 rounded-lg font-medium transition-all duration-200",
              isDark 
                ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600" 
                : "bg-gray-100 text-black hover:bg-gray-200 border border-gray-300"
            )}
          >
            {showBeforeAfter ? "Hide" : "Show"} Before vs After
          </motion.button>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                activeService === service.id
                  ? isDark 
                    ? "bg-white text-black" 
                    : "bg-black text-white"
                  : isDark 
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {service.title}
            </button>
          ))}
        </motion.div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            {/* Left: Explanation */}
            <div>
              <h3 className={cn(
                "text-2xl md:text-3xl font-bold mb-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                {activeServiceData.title}
              </h3>
              <p className={cn(
                "text-lg mb-6",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                {activeServiceData.subtitle}
              </p>
              <p className={cn(
                "text-base mb-8 p-4 rounded-lg",
                isDark ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-700"
              )}>
                {activeServiceData.simpleExplanation}
              </p>
              
              <div className={cn(
                "p-4 rounded-lg border-l-4",
                isDark ? "bg-gray-900 border-gray-600" : "bg-gray-50 border-gray-400"
              )}>
                <p className={cn("text-sm mb-2", isDark ? "text-gray-300" : "text-gray-600")}>
                  {activeServiceData.industryExample}
                </p>
                <p className={cn("font-semibold", isDark ? "text-white" : "text-black")}>
                  Result: {activeServiceData.result}
                </p>
              </div>
            </div>

            {/* Right: Visual Demo */}
            <div className={cn(
              "relative p-8 rounded-lg border-2",
              isDark ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"
            )}>
              <h4 className={cn(
                "text-lg font-semibold mb-4 text-center",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Live Demo
              </h4>
              {activeServiceData.liveDemo}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Before/After Comparison */}
        <AnimatePresence>
          {showBeforeAfter && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              {/* Before */}
              <div className={cn(
                "p-8 rounded-lg border-2",
                isDark ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"
              )}>
                <h4 className={cn(
                  "text-xl font-bold mb-4 text-center",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}>
                  {activeServiceData.beforeScenario.title}
                </h4>
                <div className="mb-6">
                  <ProcessingAnimation isDark={false} />
                </div>
                <ul className="space-y-2">
                  {activeServiceData.beforeScenario.problems.map((problem, index) => (
                    <li key={index} className={cn(
                      "flex items-center text-sm",
                      isDark ? "text-gray-400" : "text-gray-600"
                    )}>
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className={cn(
                "p-8 rounded-lg border-2",
                isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
              )}>
                <h4 className={cn(
                  "text-xl font-bold mb-4 text-center",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {activeServiceData.afterScenario.title}
                </h4>
                <div className="mb-6">
                  {activeServiceData.liveDemo}
                </div>
                <ul className="space-y-2">
                  {activeServiceData.afterScenario.benefits.map((benefit, index) => (
                    <li key={index} className={cn(
                      "flex items-center text-sm",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}>
                      <span className={cn(
                        "w-2 h-2 rounded-full mr-3",
                        isDark ? "bg-white" : "bg-black"
                      )} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className={cn(
            "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105",
            isDark 
              ? "bg-white text-black hover:bg-gray-100" 
              : "bg-black text-white hover:bg-gray-900"
          )}>
            Start Your AI Transformation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
