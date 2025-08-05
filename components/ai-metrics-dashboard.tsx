"use client"
import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  IconTrendingUp,
  IconClock,
  IconCurrencyDollar,
  IconShield,
  IconUsers,
  IconTarget,
  IconChartBar,
  IconRobot,
  IconBrain,
  IconGauge
} from "@tabler/icons-react"

interface MetricData {
  id: string
  title: string
  icon: React.ReactNode
  value: string
  change: string
  changeType: "positive" | "negative"
  progress: number
  description: string
  color: string
}

const realTimeMetrics: MetricData[] = [
  {
    id: "accuracy",
    title: "AI Accuracy Rate",
    icon: <IconTarget className="h-5 w-5" />,
    value: "99.7%",
    change: "+23.4%",
    changeType: "positive",
    progress: 97,
    description: "Average accuracy across all AI models",
    color: "text-green-500"
  },
  {
    id: "processing",
    title: "Processing Speed",
    icon: <IconClock className="h-5 w-5" />,
    value: "2.3s",
    change: "-89.2%",
    changeType: "positive",
    progress: 95,
    description: "Average response time for AI services",
    color: "text-blue-500"
  },
  {
    id: "savings",
    title: "Cost Savings",
    icon: <IconCurrencyDollar className="h-5 w-5" />,
    value: "$4.2B",
    change: "+156%",
    changeType: "positive",
    progress: 87,
    description: "Total annual savings across all clients",
    color: "text-purple-500"
  },
  {
    id: "threats",
    title: "Threats Blocked",
    icon: <IconShield className="h-5 w-5" />,
    value: "99.9%",
    change: "+21.5%",
    changeType: "positive",
    progress: 99,
    description: "Security threats detected and neutralized",
    color: "text-red-500"
  },
  {
    id: "users",
    title: "Active Users",
    icon: <IconUsers className="h-5 w-5" />,
    value: "50M+",
    change: "+45%",
    changeType: "positive",
    progress: 92,
    description: "Users served by our AI solutions",
    color: "text-orange-500"
  },
  {
    id: "uptime",
    title: "System Uptime",
    icon: <IconGauge className="h-5 w-5" />,
    value: "99.99%",
    change: "+0.12%",
    changeType: "positive",
    progress: 100,
    description: "Service availability across all platforms",
    color: "text-cyan-500"
  }
]

const industryBenchmarks = [
  {
    industry: "Financial Services",
    metrics: {
      "Fraud Detection": { current: "99.8%", benchmark: "85%", improvement: "+14.8%" },
      "Risk Assessment": { current: "94%", benchmark: "67%", improvement: "+27%" },
      "Customer Service": { current: "87%", benchmark: "73%", improvement: "+14%" },
      "Compliance": { current: "99.9%", benchmark: "78%", improvement: "+21.9%" }
    },
    icon: <IconChartBar className="h-6 w-6" />,
    color: "bg-blue-500/20 text-blue-600 border-blue-500/30"
  },
  {
    industry: "Healthcare",
    metrics: {
      "Diagnostic Accuracy": { current: "96%", benchmark: "78%", improvement: "+18%" },
      "Processing Time": { current: "2.3 min", benchmark: "45 min", improvement: "-95%" },
      "Patient Satisfaction": { current: "94%", benchmark: "81%", improvement: "+13%" },
      "Cost Reduction": { current: "38%", benchmark: "12%", improvement: "+26%" }
    },
    icon: <IconUsers className="h-6 w-6" />,
    color: "bg-green-500/20 text-green-600 border-green-500/30"
  },
  {
    industry: "Manufacturing",
    metrics: {
      "Predictive Maintenance": { current: "94%", benchmark: "52%", improvement: "+42%" },
      "Quality Control": { current: "99.2%", benchmark: "87%", improvement: "+12.2%" },
      "Downtime Reduction": { current: "48%", benchmark: "23%", improvement: "+25%" },
      "Safety Incidents": { current: "-71%", benchmark: "-15%", improvement: "+56%" }
    },
    icon: <IconRobot className="h-6 w-6" />,
    color: "bg-purple-500/20 text-purple-600 border-purple-500/30"
  }
]

const roiCalculations = [
  {
    companySize: "Small (100-500 employees)",
    solutions: {
      "Predictive Analytics": "280%",
      "Process Automation": "150%",
      "Conversational AI": "320%",
      "Security Suite": "400%"
    }
  },
  {
    companySize: "Medium (500-2000 employees)",
    solutions: {
      "Predictive Analytics": "450%",
      "Process Automation": "380%",
      "Conversational AI": "680%",
      "Security Suite": "720%"
    }
  },
  {
    companySize: "Large (2000+ employees)",
    solutions: {
      "Predictive Analytics": "1200%",
      "Process Automation": "890%",
      "Conversational AI": "2400%",
      "Security Suite": "3200%"
    }
  }
]

export default function AIMetricsDashboard({ isDark }: { isDark: boolean }) {
  return (
    <section className={cn(
      "py-16 px-4 relative",
      isDark ? "bg-gray-900/50" : "bg-gray-50"
    )}>
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-medium">
            <IconBrain className="h-4 w-4 mr-2" />
            Live Performance Data
          </Badge>
          <h3 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Real-Time AI Performance Metrics
          </h3>
          <p className={cn(
            "text-lg max-w-3xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Live data from our production AI systems serving 50M+ users globally
          </p>
        </motion.div>

        {/* Real-Time Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {realTimeMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={cn(
                "text-center transition-all duration-300 hover:scale-105",
                isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
              )}>
                <CardContent className="p-4">
                  <div className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3",
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  )}>
                    {metric.icon}
                  </div>
                  <div className={cn(
                    "text-2xl font-bold mb-1",
                    metric.color
                  )}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {metric.title}
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-xs">
                    <IconTrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-green-500 font-medium">
                      {metric.change}
                    </span>
                  </div>
                  <Progress value={metric.progress} className="h-1 mt-2" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h4 className={cn(
            "text-2xl font-bold mb-6 text-center",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Industry Performance Benchmarks
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {industryBenchmarks.map((industry, index) => (
              <Card key={industry.industry} className={cn(
                "overflow-hidden",
                isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
              )}>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      industry.color
                    )}>
                      {industry.icon}
                    </div>
                    <CardTitle className={cn(
                      "text-lg",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      {industry.industry}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(industry.metrics).map(([metric, data]) => (
                    <div key={metric} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                          {metric}
                        </span>
                        <span className="text-green-500 font-medium">
                          {data.improvement}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Benchmark: {data.benchmark}</span>
                        <span>Our AI: {data.current}</span>
                      </div>
                      <Progress 
                        value={parseFloat(data.current.replace('%', '').replace(' min', '').replace('-', ''))} 
                        className="h-1" 
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className={cn(
            "overflow-hidden",
            isDark ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-800/50" : "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"
          )}>
            <CardHeader>
              <CardTitle className={cn(
                "text-2xl text-center",
                isDark ? "text-white" : "text-gray-900"
              )}>
                ROI Calculator - First Year Returns
              </CardTitle>
              <p className={cn(
                "text-center",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                Based on actual client data from 500+ enterprise implementations
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={cn(
                      "border-b",
                      isDark ? "border-gray-700" : "border-gray-200"
                    )}>
                      <th className={cn(
                        "text-left py-3 px-4 font-semibold",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        Company Size
                      </th>
                      {Object.keys(roiCalculations[0].solutions).map((solution) => (
                        <th key={solution} className={cn(
                          "text-center py-3 px-4 font-semibold text-sm",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          {solution}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {roiCalculations.map((row, index) => (
                      <tr key={index} className={cn(
                        "border-b",
                        isDark ? "border-gray-700" : "border-gray-200"
                      )}>
                        <td className={cn(
                          "py-3 px-4 font-medium",
                          isDark ? "text-gray-300" : "text-gray-700"
                        )}>
                          {row.companySize}
                        </td>
                        {Object.values(row.solutions).map((roi, solutionIndex) => (
                          <td key={solutionIndex} className="text-center py-3 px-4">
                            <Badge className={cn(
                              "text-lg font-bold px-3 py-1",
                              "bg-green-500/20 text-green-600 border-green-500/30"
                            )}>
                              {roi} ROI
                            </Badge>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className={cn(
                  "text-sm",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}>
                  * ROI calculations based on average implementation results. 
                  Individual results may vary based on specific use cases and implementation scope.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
