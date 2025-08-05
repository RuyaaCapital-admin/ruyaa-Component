"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  IconBrain,
  IconChartBar,
  IconRobot,
  IconMessageCircle,
  IconShield,
  IconTrendingUp,
  IconPlayerPlay,
  IconPlayerPause,
  IconExternalLink
} from "@tabler/icons-react"

interface AIService {
  id: string
  title: string
  description: string
  category: "Analytics" | "Automation" | "Security" | "Personalization"
  icon: React.ReactNode
  features: string[]
  realWorldExample: {
    company: string
    useCase: string
    results: string[]
    image: string
    link: string
  }
  pricing: {
    starter: string
    enterprise: string
  }
}

const aiServices: AIService[] = [
  {
    id: "predictive-analytics",
    title: "Predictive Analytics Engine",
    description: "Harness the power of machine learning to forecast trends, identify opportunities, and make data-driven decisions with unprecedented accuracy.",
    category: "Analytics",
    icon: <IconChartBar className="h-6 w-6" />,
    features: [
      "Real-time data processing",
      "Multi-source data integration",
      "Custom ML model training",
      "Automated insights generation",
      "Interactive dashboards"
    ],
    realWorldExample: {
      company: "Walmart",
      useCase: "Demand Forecasting & Inventory Optimization",
      results: [
        "Reduced inventory costs by $1.2B annually",
        "Improved product availability by 23%",
        "Decreased food waste by 35%"
      ],
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
      link: "https://corporate.walmart.com/news"
    },
    pricing: {
      starter: "$2,999/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Process Automation",
    description: "Automate complex business processes with AI-driven decision making, reducing manual work while increasing accuracy and efficiency.",
    category: "Automation",
    icon: <IconRobot className="h-6 w-6" />,
    features: [
      "Document processing automation",
      "Workflow orchestration",
      "Exception handling",
      "Quality assurance checks",
      "Performance monitoring"
    ],
    realWorldExample: {
      company: "Deutsche Bank",
      useCase: "Loan Processing Automation",
      results: [
        "Reduced processing time from 2 weeks to 2 hours",
        "Improved accuracy to 99.7%",
        "Cut operational costs by 45%"
      ],
      image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
      link: "https://www.db.com"
    },
    pricing: {
      starter: "$1,999/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: "conversational-ai",
    title: "Advanced Conversational AI",
    description: "Deploy intelligent chatbots and virtual assistants that understand context, learn from interactions, and provide personalized experiences.",
    category: "Personalization",
    icon: <IconMessageCircle className="h-6 w-6" />,
    features: [
      "Natural language understanding",
      "Multi-language support",
      "Sentiment analysis",
      "Integration APIs",
      "Analytics dashboard"
    ],
    realWorldExample: {
      company: "Bank of America",
      useCase: "Erica Virtual Financial Assistant",
      results: [
        "Serves 35+ million customers",
        "Handles 1.5B+ customer interactions",
        "Reduced call center volume by 25%"
      ],
      image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg",
      link: "https://bankofamerica.com"
    },
    pricing: {
      starter: "$599/month",
      enterprise: "Custom pricing"
    }
  },
  {
    id: "ai-security",
    title: "AI-Powered Security Suite",
    description: "Protect your business with advanced threat detection, anomaly identification, and automated response systems powered by machine learning.",
    category: "Security",
    icon: <IconShield className="h-6 w-6" />,
    features: [
      "Real-time threat detection",
      "Behavioral analysis",
      "Automated incident response",
      "Compliance monitoring",
      "Risk assessment"
    ],
    realWorldExample: {
      company: "Microsoft",
      useCase: "Azure Sentinel Security Operations",
      results: [
        "Detects 99.9% of known threats",
        "Reduces false positives by 80%",
        "Cuts incident response time by 75%"
      ],
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
      link: "https://azure.microsoft.com/en-us/products/microsoft-sentinel"
    },
    pricing: {
      starter: "$4,999/month",
      enterprise: "Custom pricing"
    }
  }
]

const categoryColors = {
  Analytics: "bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30",
  Automation: "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30",
  Security: "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30",
  Personalization: "bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/30"
}

export default function RealAIServices({ isDark }: { isDark: boolean }) {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Analytics", "Automation", "Security", "Personalization"]
  
  const filteredServices = selectedCategory === "All" 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  const toggleDemo = (serviceId: string) => {
    setActiveDemo(activeDemo === serviceId ? null : serviceId)
  }

  return (
    <section className={cn(
      "py-24 px-4 relative overflow-hidden",
      isDark ? "bg-black" : "bg-white"
    )}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium">
            <IconBrain className="h-4 w-4 mr-2" />
            Real AI Solutions
          </Badge>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Production-Ready AI Services
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}That Scale
            </span>
          </h2>
          <p className={cn(
            "text-xl max-w-3xl mx-auto leading-relaxed",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Explore our enterprise-grade AI solutions with interactive demos and real success stories 
            from Fortune 500 companies already transforming their operations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "transition-all duration-300",
                selectedCategory === category
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : isDark
                  ? "border-gray-700 text-gray-300 hover:border-blue-500"
                  : "border-gray-300 text-gray-600 hover:border-blue-500"
              )}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <Card className={cn(
                "group relative overflow-hidden border-2 transition-all duration-300 hover:scale-[1.01]",
                isDark ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/50" : "bg-white/80 border-gray-200 hover:border-blue-500/50",
                "backdrop-blur-sm h-full"
              )}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "p-3 rounded-lg",
                      isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-500/10 text-blue-600"
                    )}>
                      {service.icon}
                    </div>
                    <Badge className={cn("border", categoryColors[service.category])}>
                      {service.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className={cn(
                    "text-2xl font-bold mb-3",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {service.title}
                  </CardTitle>
                  
                  <p className={cn(
                    "text-base leading-relaxed mb-4",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>
                    {service.description}
                  </p>

                  {/* Demo Button */}
                  <Button
                    onClick={() => toggleDemo(service.id)}
                    variant="outline"
                    className={cn(
                      "w-full mb-4 transition-all duration-300",
                      activeDemo === service.id
                        ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                        : isDark
                        ? "border-gray-700 text-gray-300 hover:border-blue-500"
                        : "border-gray-300 text-gray-600 hover:border-blue-500"
                    )}
                  >
                    {activeDemo === service.id ? (
                      <>
                        <IconPlayerPause className="h-4 w-4 mr-2" />
                        Stop Demo
                      </>
                    ) : (
                      <>
                        <IconPlay className="h-4 w-4 mr-2" />
                        View Interactive Demo
                      </>
                    )}
                  </Button>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Demo Area */}
                  {activeDemo === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "p-4 rounded-lg border overflow-hidden",
                        isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                      )}
                    >
                      <div className="text-center text-sm text-gray-500 italic">
                        Interactive demo visualization would appear here
                      </div>
                    </motion.div>
                  )}

                  {/* Features */}
                  <div>
                    <h4 className={cn(
                      "font-semibold mb-3",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={cn(
                          "text-sm flex items-center",
                          isDark ? "text-gray-300" : "text-gray-600"
                        )}>
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real World Example */}
                  <div className={cn(
                    "p-4 rounded-lg border",
                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                  )}>
                    <div className="flex items-start space-x-4 mb-3">
                      <img
                        src={service.realWorldExample.image}
                        alt={service.realWorldExample.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h5 className={cn(
                          "font-semibold text-sm",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          {service.realWorldExample.company}
                        </h5>
                        <p className={cn(
                          "text-xs mb-2",
                          isDark ? "text-gray-400" : "text-gray-500"
                        )}>
                          {service.realWorldExample.useCase}
                        </p>
                      </div>
                      <a 
                        href={service.realWorldExample.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(
                          "p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                          "inline-flex items-center justify-center"
                        )}
                      >
                        <IconExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    
                    <div className="space-y-1">
                      {service.realWorldExample.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <IconTrendingUp className="h-3 w-3 text-green-500 mr-2" />
                          <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <div className={cn(
                        "text-sm font-medium",
                        isDark ? "text-gray-300" : "text-gray-600"
                      )}>
                        Starting at
                      </div>
                      <div className={cn(
                        "text-lg font-bold",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        {service.pricing.starter}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
