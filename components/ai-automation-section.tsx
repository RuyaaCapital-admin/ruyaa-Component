"use client"
import { motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

interface AutomationService {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  metrics: {
    efficiency: string
    savings: string
    accuracy: string
  }
  gradient: string
}

const automationServices: AutomationService[] = [
  {
    id: "chatgpt",
    name: "ChatGPT Enterprise",
    category: "Conversational AI",
    description: "Advanced language model for customer service, content creation, and business automation",
    features: ["Natural Language Processing", "Multi-language Support", "API Integration", "Custom Training"],
    metrics: {
      efficiency: "85% faster response time",
      savings: "$2.3M annual cost reduction",
      accuracy: "94% customer satisfaction",
    },
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: "zapier",
    name: "Zapier Automation",
    category: "Workflow Automation",
    description: "Connect and automate workflows between 5000+ apps without coding",
    features: ["Multi-app Integration", "Trigger-based Actions", "Data Synchronization", "Custom Workflows"],
    metrics: {
      efficiency: "70% time saved on tasks",
      savings: "$1.8M operational savings",
      accuracy: "99.9% uptime reliability",
    },
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: "uipath",
    name: "UiPath RPA",
    category: "Robotic Process Automation",
    description: "Enterprise-grade RPA platform for automating repetitive business processes",
    features: ["Process Mining", "AI-powered Automation", "Scalable Deployment", "Analytics Dashboard"],
    metrics: {
      efficiency: "90% process automation",
      savings: "$4.2M cost optimization",
      accuracy: "99.5% error reduction",
    },
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    id: "salesforce",
    name: "Salesforce Einstein",
    category: "CRM Automation",
    description: "AI-powered CRM automation for sales, marketing, and customer service",
    features: ["Predictive Analytics", "Lead Scoring", "Automated Workflows", "Smart Recommendations"],
    metrics: {
      efficiency: "65% increase in sales productivity",
      savings: "$3.1M revenue growth",
      accuracy: "87% lead conversion improvement",
    },
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: "hubspot",
    name: "HubSpot Marketing Hub",
    category: "Marketing Automation",
    description: "Comprehensive marketing automation platform with AI-driven insights",
    features: ["Email Automation", "Lead Nurturing", "Social Media Management", "Analytics & Reporting"],
    metrics: {
      efficiency: "75% marketing efficiency gain",
      savings: "$2.7M marketing ROI",
      accuracy: "92% email deliverability",
    },
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: "microsoft",
    name: "Microsoft Power Automate",
    category: "Business Process Automation",
    description: "Low-code automation platform integrated with Microsoft ecosystem",
    features: ["Flow Templates", "AI Builder", "Desktop Automation", "Cloud Integration"],
    metrics: {
      efficiency: "80% process efficiency",
      savings: "$1.9M operational costs",
      accuracy: "96% automation success rate",
    },
    gradient: "from-teal-400 to-green-500",
  },
]

export default function AIAutomationSection({ isDark }: { isDark: boolean }) {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <BackgroundBeamsWithCollision isDark={isDark} className="py-24 px-4">
      <section ref={ref} className="relative z-10 w-full">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className={cn("text-4xl md:text-6xl font-bold mb-6", isDark ? "text-white" : "text-gray-900")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            AI-Driven Automation
          </motion.h2>
          <motion.p
            className={cn("text-xl md:text-2xl max-w-3xl mx-auto", isDark ? "text-gray-300" : "text-gray-600")}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how leading enterprises leverage cutting-edge AI automation to transform their operations
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className={cn(
                "relative group cursor-pointer",
                "rounded-2xl p-8 backdrop-blur-sm",
                "border transition-all duration-500",
                "hover:scale-105 hover:shadow-2xl",
                isDark
                  ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                  : "bg-white/70 border-gray-200 hover:border-gray-300",
              )}
              onMouseEnter={() => setSelectedService(service.id)}
              onMouseLeave={() => setSelectedService(null)}
            >
              {/* Gradient Background Effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                  `bg-gradient-to-br ${service.gradient}`,
                )}
              />

              {/* Service Header */}
              <div className="relative z-10">
                <motion.div
                  className={cn(
                    "inline-block px-3 py-1 rounded-full text-sm font-medium mb-4",
                    `bg-gradient-to-r ${service.gradient} text-white`,
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  {service.category}
                </motion.div>

                <h3 className={cn("text-2xl font-bold mb-3", isDark ? "text-white" : "text-gray-900")}>
                  {service.name}
                </h3>

                <p className={cn("text-base mb-6 leading-relaxed", isDark ? "text-gray-300" : "text-gray-600")}>
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4
                    className={cn(
                      "text-sm font-semibold mb-3 uppercase tracking-wide",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className={cn(
                          "text-sm px-2 py-1 rounded",
                          isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700",
                        )}
                        initial={{ opacity: 0, x: -10 }}
                        animate={selectedService === service.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0.7 }}
                  animate={selectedService === service.id ? { opacity: 1 } : { opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4
                    className={cn(
                      "text-sm font-semibold uppercase tracking-wide",
                      isDark ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    Performance Metrics
                  </h4>
                  {Object.entries(service.metrics).map(([key, value], idx) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className={cn("text-sm capitalize", isDark ? "text-gray-400" : "text-gray-600")}>
                        {key}:
                      </span>
                      <motion.span
                        className={cn(
                          "text-sm font-semibold",
                          `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`,
                        )}
                        initial={{ scale: 0.9 }}
                        animate={selectedService === service.id ? { scale: 1 } : { scale: 0.9 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                      >
                        {value}
                      </motion.span>
                    </div>
                  ))}
                </motion.div>

                {/* Hover Indicator */}
                <motion.div
                  className={cn("absolute top-4 right-4 w-3 h-3 rounded-full", `bg-gradient-to-r ${service.gradient}`)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={selectedService === service.id ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.button
            className={cn(
              "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300",
              "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
              "hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-xl",
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our AI Solutions
          </motion.button>
        </motion.div>
      </div>
      </section>
    </BackgroundBeamsWithCollision>
  )
}
