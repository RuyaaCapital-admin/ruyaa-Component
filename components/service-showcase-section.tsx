"use client"
import { motion, useInView } from "motion/react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface ServiceCard {
  id: string
  icon: React.ReactNode
  serviceName: string
  description: string
  industryExample: string
  result: string
  caseStudy: {
    title: string
    challenge: string
    solution: string
    results: string[]
    clientQuote: string
    clientName: string
    clientCompany: string
  }
}

const services: ServiceCard[] = [
  {
    id: "automation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    serviceName: "Process Automation",
    description: "Eliminate repetitive tasks and streamline operations",
    industryExample: "For Real Estate: Automated all property listings—Saved 12 hours/week for agents",
    result: "Reduced manual work by 41% for Law Firms",
    caseStudy: {
      title: "Legal Document Processing Automation",
      challenge: "Law firm spent 15+ hours weekly on document classification and client intake",
      solution: "Implemented AI-powered document processing and automated client workflow",
      results: ["41% reduction in manual processing", "15 hours saved per week", "99.2% accuracy rate"],
      clientQuote: "This automation saved us from hiring additional staff and improved our response time to clients dramatically.",
      clientName: "Sarah Chen",
      clientCompany: "Chen & Associates Law"
    }
  },
  {
    id: "analytics",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M7 12l3-3 3 3 5-5"/>
        <circle cx="7" cy="12" r="1"/>
        <circle cx="10" cy="9" r="1"/>
        <circle cx="13" cy="12" r="1"/>
        <circle cx="18" cy="7" r="1"/>
      </svg>
    ),
    serviceName: "Predictive Analytics",
    description: "Turn data into actionable business intelligence",
    industryExample: "For Manufacturing: Predicted equipment failures 2 weeks early—Prevented $2.3M losses",
    result: "Increased sales by 27% in Logistics",
    caseStudy: {
      title: "Supply Chain Optimization Analytics",
      challenge: "Logistics company struggled with inventory forecasting and route optimization",
      solution: "Deployed machine learning models for demand prediction and route optimization",
      results: ["27% increase in sales", "$890K annual cost savings", "18% faster deliveries"],
      clientQuote: "The predictive analytics transformed how we plan our operations. We're now ahead of demand instead of reacting to it.",
      clientName: "Marcus Rodriguez",
      clientCompany: "Global Freight Solutions"
    }
  },
  {
    id: "integration",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"/>
        <path d="M8 8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
        <rect x="8" y="8" width="8" height="8" rx="2"/>
        <path d="M12 12h.01"/>
      </svg>
    ),
    serviceName: "System Integration",
    description: "Connect all your tools into one seamless workflow",
    industryExample: "For Healthcare: Unified 7 separate systems—Reduced data entry by 89%",
    result: "Cut operational costs by 34% for Finance",
    caseStudy: {
      title: "Healthcare System Unification",
      challenge: "Medical practice used 7 disconnected systems causing duplicate data entry",
      solution: "Created unified platform connecting all systems with real-time data sync",
      results: ["89% reduction in data entry", "34% cost savings", "Zero data inconsistencies"],
      clientQuote: "Our staff can now focus on patients instead of paperwork. It's been a game-changer for our practice.",
      clientName: "Dr. Amanda Foster",
      clientCompany: "Foster Medical Group"
    }
  },
  {
    id: "optimization",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14,2 14,8 20,8"/>
        <path d="M12 18v-6"/>
        <path d="M9 15h6"/>
      </svg>
    ),
    serviceName: "Performance Optimization",
    description: "Maximize efficiency and minimize waste across operations",
    industryExample: "For Retail: Optimized inventory turnover—Increased profit margins by 19%",
    result: "Boosted productivity by 45% for Construction",
    caseStudy: {
      title: "Construction Project Optimization",
      challenge: "Construction company faced delays and cost overruns on 60% of projects",
      solution: "Implemented resource allocation AI and project timeline optimization",
      results: ["45% productivity boost", "23% faster project completion", "$1.2M savings annually"],
      clientQuote: "We went from constantly firefighting to proactively managing projects. Our margins have never been better.",
      clientName: "Jake Thompson",
      clientCompany: "Thompson Construction Co."
    }
  }
]

const testimonials = [
  { company: "Microsoft", logo: "MS", quote: "Exceptional results" },
  { company: "Goldman Sachs", logo: "GS", quote: "Transformed our operations" },
  { company: "Johnson & Johnson", logo: "J&J", quote: "Outstanding ROI" },
  { company: "Deloitte", logo: "DT", quote: "Game-changing solution" }
]

export default function ServiceShowcaseSection({ isDark }: { isDark: boolean }) {
  const [selectedCard, setSelectedCard] = useState<ServiceCard | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className={cn(
        "py-20 md:py-32 px-4 relative",
        isDark ? "bg-black" : "bg-white"
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
            Automate Your Business. Prove the Results.
          </h2>
          <p className={cn(
            "text-lg md:text-xl max-w-3xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Real solutions. Real industries. Real results you can measure.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.2, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              onClick={() => setSelectedCard(service)}
              className={cn(
                "relative p-6 md:p-8 rounded-lg cursor-pointer transition-all duration-200 group",
                "hover:scale-[1.02] hover:shadow-xl",
                isDark 
                  ? "bg-gray-900 border border-gray-800 hover:border-gray-700 hover:shadow-gray-900/20" 
                  : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg"
              )}
            >
              {/* Icon */}
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                isDark ? "bg-white text-black" : "bg-black text-white"
              )}>
                {service.icon}
              </div>

              {/* Service Name */}
              <h3 className={cn(
                "text-xl font-bold mb-3",
                isDark ? "text-white" : "text-gray-900"
              )}>
                {service.serviceName}
              </h3>

              {/* Description */}
              <p className={cn(
                "text-sm mb-4",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                {service.description}
              </p>

              {/* Industry Example */}
              <div className={cn(
                "text-xs mb-3 p-3 rounded border-l-2",
                isDark 
                  ? "bg-gray-800 border-gray-700 text-gray-300" 
                  : "bg-gray-50 border-gray-300 text-gray-600"
              )}>
                {service.industryExample}
              </div>

              {/* Result */}
              <div className={cn(
                "text-sm font-semibold",
                isDark ? "text-white" : "text-black"
              )}>
                {service.result}
              </div>

              {/* Click indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
                isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              )}>
                {testimonial.logo}
              </div>
              <span className={cn(
                "text-sm",
                isDark ? "text-gray-400" : "text-gray-500"
              )}>
                "{testimonial.quote}"
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
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
            See Real Results
          </button>
        </motion.div>
      </div>

      {/* Case Study Popup */}
      {selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "max-w-2xl w-full rounded-lg p-8 max-h-[80vh] overflow-y-auto",
              isDark ? "bg-gray-900" : "bg-white"
            )}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className={cn(
                "text-2xl font-bold",
                isDark ? "text-white" : "text-gray-900"
              )}>
                {selectedCard.caseStudy.title}
              </h3>
              <button
                onClick={() => setSelectedCard(null)}
                className={cn(
                  "p-2 rounded-lg",
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                )}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className={cn("font-semibold mb-2", isDark ? "text-white" : "text-gray-900")}>
                  Challenge
                </h4>
                <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>
                  {selectedCard.caseStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className={cn("font-semibold mb-2", isDark ? "text-white" : "text-gray-900")}>
                  Solution
                </h4>
                <p className={cn(isDark ? "text-gray-300" : "text-gray-600")}>
                  {selectedCard.caseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className={cn("font-semibold mb-2", isDark ? "text-white" : "text-gray-900")}>
                  Results
                </h4>
                <ul className="space-y-1">
                  {selectedCard.caseStudy.results.map((result, index) => (
                    <li key={index} className={cn("flex items-center", isDark ? "text-gray-300" : "text-gray-600")}>
                      <span className="w-2 h-2 bg-current rounded-full mr-3" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn(
                "p-4 rounded-lg border-l-4",
                isDark ? "bg-gray-800 border-gray-600" : "bg-gray-50 border-gray-400"
              )}>
                <p className={cn("italic mb-2", isDark ? "text-gray-300" : "text-gray-600")}>
                  "{selectedCard.caseStudy.clientQuote}"
                </p>
                <p className={cn("text-sm font-semibold", isDark ? "text-white" : "text-gray-900")}>
                  {selectedCard.caseStudy.clientName}, {selectedCard.caseStudy.clientCompany}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
