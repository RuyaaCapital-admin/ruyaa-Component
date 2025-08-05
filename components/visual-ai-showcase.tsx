"use client"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CaseStudy {
  id: string
  headline: string
  subheadline: string
  industry: string
  aiDescription: string
  beforeMetrics: {
    title: string
    value: string
    description: string
  }[]
  afterMetrics: {
    title: string
    value: string
    description: string
  }[]
  processFlow: {
    before: string[]
    after: string[]
  }
  result: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "construction",
    headline: "AI-Driven Performance Optimization in Construction",
    subheadline: "Transforming project delivery with real-time schedule and logistics AI",
    industry: "Construction",
    aiDescription: "AI optimized worker schedules and material delivery timing",
    beforeMetrics: [
      { title: "Average Completion", value: "8 weeks", description: "Per project build time" },
      { title: "Project Delays", value: "23%", description: "Of projects over deadline" },
      { title: "Idle Time", value: "18%", description: "Worker downtime daily" }
    ],
    afterMetrics: [
      { title: "Average Completion", value: "4.5 weeks", description: "Per project build time" },
      { title: "Project Delays", value: "5%", description: "Of projects over deadline" },
      { title: "Productivity Boost", value: "+45%", description: "Site efficiency increase" }
    ],
    processFlow: {
      before: ["Manual scheduling", "Delays", "Idle time"],
      after: ["AI scheduling", "Just-in-time delivery", "Higher output"]
    },
    result: "45% boost in site productivity. Average completion time reduced by 43%"
  },
  {
    id: "healthcare",
    headline: "AI-Powered Medical Records Integration",
    subheadline: "Eliminating data silos with intelligent healthcare workflow automation",
    industry: "Healthcare",
    aiDescription: "AI unified patient records across 7 different medical systems",
    beforeMetrics: [
      { title: "Data Entry Time", value: "3.2 hours", description: "Per patient daily" },
      { title: "Record Errors", value: "12%", description: "Manual entry mistakes" },
      { title: "Patient Wait Time", value: "45 minutes", description: "Average appointment delay" }
    ],
    afterMetrics: [
      { title: "Data Entry Time", value: "0.3 hours", description: "Per patient daily" },
      { title: "Record Errors", value: "0.1%", description: "AI validation accuracy" },
      { title: "Patient Wait Time", value: "8 minutes", description: "Average appointment delay" }
    ],
    processFlow: {
      before: ["Manual data entry", "System switching", "Verification delays"],
      after: ["Automated sync", "Real-time updates", "Instant access"]
    },
    result: "89% reduction in data entry time. Zero data inconsistencies across systems"
  },
  {
    id: "manufacturing",
    headline: "Predictive Maintenance AI for Industrial Equipment",
    subheadline: "Preventing costly breakdowns with machine learning failure prediction",
    industry: "Manufacturing",
    aiDescription: "AI monitors equipment sensors and predicts failures 2-3 weeks in advance",
    beforeMetrics: [
      { title: "Unplanned Downtime", value: "127 hours", description: "Monthly equipment failures" },
      { title: "Maintenance Cost", value: "$2.8M", description: "Annual emergency repairs" },
      { title: "Production Loss", value: "23%", description: "Revenue impact from stops" }
    ],
    afterMetrics: [
      { title: "Unplanned Downtime", value: "18 hours", description: "Monthly equipment failures" },
      { title: "Maintenance Cost", value: "$0.9M", description: "Annual planned maintenance" },
      { title: "Production Increase", value: "+31%", description: "Consistent output boost" }
    ],
    processFlow: {
      before: ["Reactive repairs", "Surprise failures", "Production stops"],
      after: ["Predictive alerts", "Planned maintenance", "Continuous operation"]
    },
    result: "Prevented $2.3M in equipment losses. 86% reduction in unexpected downtime"
  },
  {
    id: "retail",
    headline: "Inventory Optimization with Demand Forecasting AI",
    subheadline: "Maximizing profit margins through intelligent stock management",
    industry: "Retail",
    aiDescription: "AI analyzes customer patterns and market trends to optimize inventory levels",
    beforeMetrics: [
      { title: "Inventory Turnover", value: "4.2x", description: "Annual stock rotation" },
      { title: "Stockouts", value: "18%", description: "Products out of stock" },
      { title: "Excess Inventory", value: "$890K", description: "Unsold merchandise cost" }
    ],
    afterMetrics: [
      { title: "Inventory Turnover", value: "7.8x", description: "Annual stock rotation" },
      { title: "Stockouts", value: "3%", description: "Products out of stock" },
      { title: "Profit Margin", value: "+19%", description: "Improved through optimization" }
    ],
    processFlow: {
      before: ["Gut feeling orders", "Overstocking", "Revenue loss"],
      after: ["Data-driven purchasing", "Optimal stock levels", "Maximized sales"]
    },
    result: "19% increase in profit margins. Inventory turnover improved by 86%"
  }
]

export default function VisualAIShowcase({ isDark }: { isDark: boolean }) {
  const [activeCase, setActiveCase] = useState<string>(caseStudies[0].id)
  const [showComparison, setShowComparison] = useState<boolean>(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const activeCaseData = caseStudies.find(c => c.id === activeCase) || caseStudies[0]

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
          className="text-center mb-16 md:mb-20"
        >
          <h2 className={cn(
            "text-3xl md:text-5xl lg:text-6xl font-bold mb-6",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Real AI Results
          </h2>
          <p className={cn(
            "text-lg md:text-xl max-w-3xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Measurable outcomes from actual client implementations
          </p>
        </motion.div>

        {/* Case Study Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {caseStudies.map((caseStudy) => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveCase(caseStudy.id)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                activeCase === caseStudy.id
                  ? isDark 
                    ? "bg-white text-black shadow-lg" 
                    : "bg-black text-white shadow-lg"
                  : isDark 
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm"
              )}
            >
              {caseStudy.industry}
            </button>
          ))}
        </motion.div>

        {/* Main Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "rounded-lg border shadow-xl overflow-hidden",
              isDark 
                ? "bg-gray-900 border-gray-700" 
                : "bg-white border-gray-200"
            )}
          >
            {/* Header */}
            <div className={cn(
              "p-8 border-b",
              isDark ? "border-gray-700" : "border-gray-200"
            )}>
              <h3 className={cn(
                "text-2xl md:text-3xl font-bold mb-2",
                isDark ? "text-white" : "text-gray-900"
              )}>
                {activeCaseData.headline}
              </h3>
              <p className={cn(
                "text-lg mb-4",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                {activeCaseData.subheadline}
              </p>
              <div className={cn(
                "inline-block px-4 py-2 rounded-lg text-sm font-medium",
                isDark 
                  ? "bg-gray-800 text-gray-300 border border-gray-600" 
                  : "bg-gray-100 text-gray-700 border border-gray-300"
              )}>
                Industry: {activeCaseData.industry}. {activeCaseData.aiDescription}
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Before */}
                <div className={cn(
                  "p-6 rounded-lg border",
                  isDark 
                    ? "bg-gray-800 border-gray-600" 
                    : "bg-gray-50 border-gray-300"
                )}>
                  <h4 className={cn(
                    "text-xl font-bold mb-4 text-center",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}>
                    Before (Manual)
                  </h4>
                  <div className="space-y-4">
                    {activeCaseData.beforeMetrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className={cn(
                          "text-2xl font-bold mb-1",
                          isDark ? "text-gray-200" : "text-gray-800"
                        )}>
                          {metric.value}
                        </div>
                        <div className={cn(
                          "text-sm font-medium mb-1",
                          isDark ? "text-gray-300" : "text-gray-600"
                        )}>
                          {metric.title}
                        </div>
                        <div className={cn(
                          "text-xs",
                          isDark ? "text-gray-400" : "text-gray-500"
                        )}>
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className={cn(
                  "p-6 rounded-lg border",
                  isDark 
                    ? "bg-gray-700 border-gray-600" 
                    : "bg-white border-gray-300 shadow-lg"
                )}>
                  <h4 className={cn(
                    "text-xl font-bold mb-4 text-center",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    After (With AI)
                  </h4>
                  <div className="space-y-4">
                    {activeCaseData.afterMetrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className={cn(
                          "text-2xl font-bold mb-1",
                          isDark ? "text-white" : "text-black"
                        )}>
                          {metric.value}
                        </div>
                        <div className={cn(
                          "text-sm font-medium mb-1",
                          isDark ? "text-gray-200" : "text-gray-700"
                        )}>
                          {metric.title}
                        </div>
                        <div className={cn(
                          "text-xs",
                          isDark ? "text-gray-300" : "text-gray-500"
                        )}>
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Process Flow */}
              <div className={cn(
                "p-6 rounded-lg border mb-6",
                isDark 
                  ? "bg-gray-800 border-gray-600" 
                  : "bg-gray-50 border-gray-200"
              )}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className={cn(
                      "font-semibold mb-3",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}>
                      Manual Process:
                    </h5>
                    <div className="flex items-center space-x-2">
                      {activeCaseData.processFlow.before.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <span className={cn(
                            "text-sm px-3 py-1 rounded",
                            isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"
                          )}>
                            {step}
                          </span>
                          {index < activeCaseData.processFlow.before.length - 1 && (
                            <span className={cn("mx-2", isDark ? "text-gray-500" : "text-gray-400")}>
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className={cn(
                      "font-semibold mb-3",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      AI Process:
                    </h5>
                    <div className="flex items-center space-x-2">
                      {activeCaseData.processFlow.after.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <span className={cn(
                            "text-sm px-3 py-1 rounded",
                            isDark ? "bg-gray-600 text-white" : "bg-gray-800 text-white"
                          )}>
                            {step}
                          </span>
                          {index < activeCaseData.processFlow.after.length - 1 && (
                            <span className={cn("mx-2", isDark ? "text-gray-400" : "text-gray-600")}>
                              →
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Summary */}
              <div className={cn(
                "p-6 rounded-lg border-l-4 mb-6",
                isDark 
                  ? "bg-gray-800 border-gray-500" 
                  : "bg-gray-50 border-gray-600"
              )}>
                <p className={cn(
                  "text-lg font-semibold",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {activeCaseData.result}
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className={cn(
                  "px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg",
                  isDark 
                    ? "bg-white text-black hover:bg-gray-100" 
                    : "bg-black text-white hover:bg-gray-900"
                )}>
                  See Full Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
