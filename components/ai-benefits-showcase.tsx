"use client"
import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  IconTrendingUp, 
  IconShield, 
  IconClock, 
  IconTarget, 
  IconBrain,
  IconChartBar,
  IconRobot,
  IconAnalyze
} from "@tabler/icons-react"

interface AIBenefit {
  icon: React.ReactNode
  title: string
  description: string
  metrics: {
    value: string
    label: string
    trend: "up" | "down" | "stable"
  }[]
  realExample: {
    company: string
    result: string
    image: string
  }
  category: "productivity" | "accuracy" | "cost" | "speed"
}

const aiBenefits: AIBenefit[] = [
  {
    icon: <IconTrendingUp className="h-8 w-8" />,
    title: "Revenue Growth Acceleration",
    description: "AI-driven insights boost revenue by identifying high-value opportunities and optimizing pricing strategies in real-time.",
    metrics: [
      { value: "35%", label: "Revenue Increase", trend: "up" },
      { value: "2.4x", label: "ROI Improvement", trend: "up" },
      { value: "89%", label: "Prediction Accuracy", trend: "up" }
    ],
    realExample: {
      company: "Netflix",
      result: "Increased customer retention by 93% through personalized recommendations",
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg"
    },
    category: "productivity"
  },
  {
    icon: <IconShield className="h-8 w-8" />,
    title: "Risk Mitigation Excellence",
    description: "Advanced AI algorithms detect and prevent potential risks before they impact your business operations.",
    metrics: [
      { value: "97%", label: "Threat Detection", trend: "up" },
      { value: "72%", label: "Risk Reduction", trend: "up" },
      { value: "99.9%", label: "Uptime Achieved", trend: "up" }
    ],
    realExample: {
      company: "JP Morgan Chase",
      result: "Prevented $1.2B in potential fraud losses using AI detection systems",
      image: "https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg"
    },
    category: "accuracy"
  },
  {
    icon: <IconClock className="h-8 w-8" />,
    title: "Operational Efficiency",
    description: "Streamline workflows and automate repetitive tasks, freeing your team to focus on strategic initiatives.",
    metrics: [
      { value: "78%", label: "Time Saved", trend: "up" },
      { value: "65%", label: "Cost Reduction", trend: "up" },
      { value: "4.2x", label: "Faster Processing", trend: "up" }
    ],
    realExample: {
      company: "Amazon",
      result: "Reduced warehouse processing time by 70% with AI-powered robotics",
      image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png"
    },
    category: "speed"
  },
  {
    icon: <IconTarget className="h-8 w-8" />,
    title: "Customer Experience Enhancement",
    description: "Deliver personalized experiences that increase satisfaction and drive customer loyalty through intelligent insights.",
    metrics: [
      { value: "92%", label: "Customer Satisfaction", trend: "up" },
      { value: "45%", label: "Engagement Boost", trend: "up" },
      { value: "87%", label: "Retention Rate", trend: "up" }
    ],
    realExample: {
      company: "Spotify",
      result: "Increased user engagement by 54% with AI-curated playlists",
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg"
    },
    category: "productivity"
  }
]

const categoryColors = {
  productivity: "bg-green-500/20 text-green-700 dark:text-green-400",
  accuracy: "bg-blue-500/20 text-blue-700 dark:text-blue-400", 
  cost: "bg-purple-500/20 text-purple-700 dark:text-purple-400",
  speed: "bg-orange-500/20 text-orange-700 dark:text-orange-400"
}

export default function AIBenefitsShowcase({ isDark }: { isDark: boolean }) {
  return (
    <section className={cn(
      "py-24 px-4 relative overflow-hidden",
      isDark ? "bg-black" : "bg-white"
    )}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

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
            Real AI Benefits
          </Badge>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Transforming Businesses with
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}Measurable Results
            </span>
          </h2>
          <p className={cn(
            "text-xl max-w-3xl mx-auto leading-relaxed",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            See how leading companies achieve remarkable outcomes with AI-powered solutions. 
            These aren't just projections—they're proven results from real implementations.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aiBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={cn(
                "group relative overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02]",
                isDark ? "bg-gray-900/50 border-gray-800 hover:border-blue-500/50" : "bg-white/80 border-gray-200 hover:border-blue-500/50",
                "backdrop-blur-sm"
              )}>
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      "p-3 rounded-lg transition-colors",
                      isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-500/10 text-blue-600"
                    )}>
                      {benefit.icon}
                    </div>
                    <Badge className={categoryColors[benefit.category]}>
                      {benefit.category}
                    </Badge>
                  </div>
                  <CardTitle className={cn(
                    "text-2xl font-bold mb-3",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {benefit.title}
                  </CardTitle>
                  <p className={cn(
                    "text-base leading-relaxed",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>
                    {benefit.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className={cn(
                          "text-2xl font-bold mb-1",
                          metric.trend === "up" ? "text-green-500" : "text-red-500"
                        )}>
                          {metric.value}
                        </div>
                        <div className={cn(
                          "text-sm",
                          isDark ? "text-gray-400" : "text-gray-500"
                        )}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Real Example */}
                  <div className={cn(
                    "p-4 rounded-lg border",
                    isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
                  )}>
                    <div className="flex items-start space-x-4">
                      <img
                        src={benefit.realExample.image}
                        alt={benefit.realExample.company}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className={cn(
                          "font-semibold mb-1",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          {benefit.realExample.company} Success Story
                        </div>
                        <p className={cn(
                          "text-sm",
                          isDark ? "text-gray-300" : "text-gray-600"
                        )}>
                          {benefit.realExample.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className={cn(
            "inline-flex items-center space-x-2 px-6 py-3 rounded-lg border",
            isDark ? "bg-gray-900/50 border-gray-800 text-gray-300" : "bg-white/80 border-gray-200 text-gray-600"
          )}>
            <IconAnalyze className="h-5 w-5" />
            <span className="font-medium">Ready to transform your business?</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
