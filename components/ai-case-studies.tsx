"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  IconTrendingUp,
  IconClock,
  IconCurrencyDollar,
  IconUsers,
  IconShield,
  IconBrain,
  IconChartBar,
  IconExternalLink,
  IconArrowRight,
  IconStar
} from "@tabler/icons-react"

interface CaseStudy {
  id: string
  company: string
  industry: string
  logo: string
  challenge: string
  solution: string
  implementation: {
    duration: string
    team: string
    technology: string[]
  }
  results: {
    metric: string
    before: string
    after: string
    improvement: string
    icon: React.ReactNode
  }[]
  roi: {
    investment: string
    returns: string
    payback: string
  }
  testimonial: {
    quote: string
    author: string
    role: string
    rating: number
  }
  image: string
  featured: boolean
}

const caseStudies: CaseStudy[] = [
  {
    id: "walmart-demand-forecasting",
    company: "Walmart",
    industry: "Retail",
    logo: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
    challenge: "Walmart struggled with accurate demand forecasting across 10,000+ stores, leading to $3B in annual inventory costs and frequent stockouts affecting customer satisfaction.",
    solution: "Implemented an AI-powered demand forecasting system using machine learning models that analyze historical sales, weather patterns, local events, and economic indicators to predict demand with unprecedented accuracy.",
    implementation: {
      duration: "18 months",
      team: "50+ data scientists and engineers",
      technology: ["TensorFlow", "Apache Spark", "Google Cloud AI", "BigQuery"]
    },
    results: [
      {
        metric: "Inventory Costs",
        before: "$3.2B annually",
        after: "$1.9B annually",
        improvement: "40% reduction",
        icon: <IconCurrencyDollar className="h-5 w-5" />
      },
      {
        metric: "Stockout Rate",
        before: "8.5%",
        after: "2.1%",
        improvement: "75% reduction", 
        icon: <IconTrendingUp className="h-5 w-5" />
      },
      {
        metric: "Forecast Accuracy",
        before: "67%",
        after: "94%",
        improvement: "27% increase",
        icon: <IconChartBar className="h-5 w-5" />
      },
      {
        metric: "Food Waste",
        before: "1.8M lbs/day",
        after: "1.2M lbs/day",
        improvement: "33% reduction",
        icon: <IconShield className="h-5 w-5" />
      }
    ],
    roi: {
      investment: "$125M",
      returns: "$1.3B annually",
      payback: "3.6 months"
    },
    testimonial: {
      quote: "This AI system has revolutionized how we manage inventory. The accuracy improvements have directly translated to better customer satisfaction and significant cost savings.",
      author: "Sarah Johnson",
      role: "VP of Supply Chain Technology",
      rating: 5
    },
    image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg",
    featured: true
  },
  {
    id: "netflix-recommendations",
    company: "Netflix",
    industry: "Entertainment",
    logo: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg",
    challenge: "Netflix needed to improve content discovery and viewer engagement as users increasingly abandoned the platform due to difficulty finding relevant content in their vast library.",
    solution: "Developed a sophisticated AI recommendation engine using collaborative filtering, deep learning, and natural language processing to analyze viewing patterns, content metadata, and user preferences.",
    implementation: {
      duration: "24 months",
      team: "80+ engineers and data scientists",
      technology: ["Python", "TensorFlow", "Apache Kafka", "AWS"]
    },
    results: [
      {
        metric: "User Engagement",
        before: "1.2 hrs/day",
        after: "2.1 hrs/day",
        improvement: "75% increase",
        icon: <IconClock className="h-5 w-5" />
      },
      {
        metric: "Customer Retention",
        before: "68%",
        after: "93%",
        improvement: "25% increase",
        icon: <IconUsers className="h-5 w-5" />
      },
      {
        metric: "Content Discovery",
        before: "23% via recommendations",
        after: "80% via recommendations",
        improvement: "57% increase",
        icon: <IconBrain className="h-5 w-5" />
      },
      {
        metric: "Revenue Impact",
        before: "$11.7B",
        after: "$29.7B",
        improvement: "154% growth",
        icon: <IconTrendingUp className="h-5 w-5" />
      }
    ],
    roi: {
      investment: "$200M",
      returns: "$18B annually",
      payback: "1.2 months"
    },
    testimonial: {
      quote: "Our AI recommendation system is the backbone of our user experience. It's not just about technology; it's about understanding human preferences at scale.",
      author: "Mike Chen",
      role: "Director of Machine Learning",
      rating: 5
    },
    image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg",
    featured: true
  },
  {
    id: "jp-morgan-fraud",
    company: "JPMorgan Chase",
    industry: "Financial Services",
    logo: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
    challenge: "The bank faced increasing sophisticated fraud attempts, with traditional rule-based systems generating too many false positives and missing complex fraud patterns.",
    solution: "Implemented an AI-powered fraud detection system using ensemble machine learning models, real-time transaction analysis, and behavioral biometrics to identify suspicious activities.",
    implementation: {
      duration: "12 months",
      team: "40+ security experts and ML engineers",
      technology: ["Python", "Apache Kafka", "TensorFlow", "Docker"]
    },
    results: [
      {
        metric: "Fraud Detection Rate",
        before: "78%",
        after: "99.7%",
        improvement: "21.7% increase",
        icon: <IconShield className="h-5 w-5" />
      },
      {
        metric: "False Positive Rate",
        before: "12%",
        after: "1.8%",
        improvement: "85% reduction",
        icon: <IconTrendingUp className="h-5 w-5" />
      },
      {
        metric: "Processing Time",
        before: "45 seconds",
        after: "0.2 seconds",
        improvement: "99.5% faster",
        icon: <IconClock className="h-5 w-5" />
      },
      {
        metric: "Annual Savings",
        before: "$1.8B losses",
        after: "$50M losses",
        improvement: "$1.75B saved",
        icon: <IconCurrencyDollar className="h-5 w-5" />
      }
    ],
    roi: {
      investment: "$85M",
      returns: "$1.75B annually",
      payback: "0.6 months"
    },
    testimonial: {
      quote: "This AI system has fundamentally changed how we approach fraud prevention. The real-time detection capabilities have saved us billions while improving customer experience.",
      author: "David Rodriguez",
      role: "Chief Security Officer",
      rating: 5
    },
    image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
    featured: false
  }
]

export default function AICaseStudies({ isDark }: { isDark: boolean }) {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "implementation" | "results">("overview")

  const featuredStudies = caseStudies.filter(study => study.featured)
  const regularStudies = caseStudies.filter(study => !study.featured)

  return (
    <section className={cn(
      "py-24 px-4 relative overflow-hidden",
      isDark ? "bg-black" : "bg-white"
    )}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-8 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-8 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-full blur-3xl" />
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
            Real Success Stories
          </Badge>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Fortune 500 Companies
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}Achieving Results
            </span>
          </h2>
          <p className={cn(
            "text-xl max-w-3xl mx-auto leading-relaxed",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Discover how leading organizations have transformed their operations with AI, 
            achieving measurable results that drive growth, efficiency, and innovation.
          </p>
        </motion.div>

        {/* Featured Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="lg:col-span-1"
            >
              <Card className={cn(
                "group relative overflow-hidden border-2 transition-all duration-300 hover:scale-[1.01]",
                isDark ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/50" : "bg-white/80 border-gray-200 hover:border-blue-500/50",
                "backdrop-blur-sm h-full"
              )}>
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                    <IconStar className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                <CardHeader className="relative">
                  {/* Company Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className={cn(
                        "text-2xl font-bold mb-1",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        {study.company}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className={cn(
                      "font-semibold text-sm mb-2",
                      isDark ? "text-blue-400" : "text-blue-600"
                    )}>
                      The Challenge
                    </h4>
                    <p className={cn(
                      "text-sm leading-relaxed",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className={cn(
                      "font-semibold text-sm mb-2",
                      isDark ? "text-green-400" : "text-green-600"
                    )}>
                      AI Solution
                    </h4>
                    <p className={cn(
                      "text-sm leading-relaxed",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                      {study.solution}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Metrics - Top 2 */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className={cn(
                        "p-4 rounded-lg border text-center",
                        isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                      )}>
                        <div className={cn(
                          "flex items-center justify-center mb-2",
                          isDark ? "text-blue-400" : "text-blue-600"
                        )}>
                          {result.icon}
                        </div>
                        <div className={cn(
                          "text-2xl font-bold mb-1",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          {result.improvement}
                        </div>
                        <div className={cn(
                          "text-xs",
                          isDark ? "text-gray-400" : "text-gray-500"
                        )}>
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ROI Section */}
                  <div className={cn(
                    "p-4 rounded-lg border",
                    isDark ? "bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-800/50" : "bg-gradient-to-r from-green-50 to-blue-50 border-green-200"
                  )}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={cn(
                        "font-semibold text-sm",
                        isDark ? "text-green-400" : "text-green-600"
                      )}>
                        ROI Impact
                      </span>
                      <span className={cn(
                        "text-xl font-bold",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        {study.roi.payback} payback
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Investment: {study.roi.investment}</div>
                      <div>Annual Returns: {study.roi.returns}</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className={cn(
                    "p-4 rounded-lg border",
                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                  )}>
                    <div className="flex mb-2">
                      {[...Array(study.testimonial.rating)].map((_, i) => (
                        <IconStar key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className={cn(
                      "text-sm italic mb-3",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                      "{study.testimonial.quote}"
                    </p>
                    <div className="text-xs">
                      <div className={cn(
                        "font-semibold",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        {study.testimonial.author}
                      </div>
                      <div className={cn(
                        "text-gray-500"
                      )}>
                        {study.testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    className="w-full"
                    onClick={() => setSelectedStudy(study.id)}
                  >
                    View Detailed Case Study
                    <IconArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Case Studies Grid */}
        {regularStudies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {regularStudies.map((study, index) => (
              <Card key={study.id} className={cn(
                "group relative overflow-hidden border transition-all duration-300 hover:scale-[1.02]",
                isDark ? "bg-gray-900/30 border-gray-800 hover:border-blue-500/50" : "bg-white/60 border-gray-200 hover:border-blue-500/50",
                "backdrop-blur-sm"
              )}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <CardTitle className={cn(
                        "text-lg font-bold",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        {study.company}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Top Metric */}
                    <div className="text-center">
                      <div className={cn(
                        "text-3xl font-bold mb-1",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        {study.results[0].improvement}
                      </div>
                      <div className={cn(
                        "text-sm",
                        isDark ? "text-gray-400" : "text-gray-500"
                      )}>
                        {study.results[0].metric}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => setSelectedStudy(study.id)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal for detailed case study would go here */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className={cn(
                "max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg border",
                isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={cn(
                    "text-2xl font-bold",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    Detailed Case Study
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedStudy(null)}
                  >
                    ×
                  </Button>
                </div>
                <p className={cn(
                  "text-center",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  Full case study details would be displayed here with interactive charts, implementation timeline, and comprehensive metrics.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
