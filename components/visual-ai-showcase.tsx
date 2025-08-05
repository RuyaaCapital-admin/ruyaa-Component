"use client"
import React from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

// High-quality SVG Icons
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ChatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
)

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A4.5 4.5 0 0 0 12 17.5a4.5 4.5 0 0 0 5.96 2.4 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"/>
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

// Official Service Logos (simplified versions)
const GoogleCalendarLogo = ({ className }: { className?: string }) => (
  <div className={cn("rounded-lg p-2 bg-white", className)}>
    <div className="w-6 h-6 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded flex items-center justify-center">
      <span className="text-white text-xs font-bold">31</span>
    </div>
  </div>
)

const GmailLogo = ({ className }: { className?: string }) => (
  <div className={cn("rounded-lg p-2 bg-white", className)}>
    <div
      className="w-6 h-6 rounded flex items-center justify-center"
      style={{
        backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fb28b53df88fa4c49b4b3781167d08bdc%2F2de66ac1650445c7b26310f187231266)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    />
  </div>
)

const SlackLogo = ({ className }: { className?: string }) => (
  <div className={cn("rounded-lg p-2 bg-white", className)}>
    <div
      className="w-6 h-6 rounded flex items-center justify-center"
      style={{
        backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fb28b53df88fa4c49b4b3781167d08bdc%2Fdc9fb520fd9e412da6e41f1d9b0d557d)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <span className="text-white text-xs font-bold">#</span>
    </div>
  </div>
)

const ZoomLogo = ({ className }: { className?: string }) => (
  <div className={cn("rounded-lg p-2 bg-white", className)}>
    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded flex items-center justify-center">
      <span className="text-white text-xs font-bold">Z</span>
    </div>
  </div>
)

// AI Agent Demo Components
const ClinicAssistantDemo = ({ isDark }: { isDark: boolean }) => {
  const [step, setStep] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    "Patient calls for appointment",
    "AI checks calendar availability", 
    "Sends confirmation email",
    "Updates patient records"
  ]

  return (
    <div className="relative w-full h-48 p-4">
      {/* Central AI Brain */}
      <div className={cn(
        "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 flex items-center justify-center z-10",
        isDark ? "bg-white border-gray-300" : "bg-black border-gray-700"
      )}>
        <BrainIcon className={cn("w-8 h-8", isDark ? "text-black" : "text-white")} />
      </div>

      {/* Connected Services */}
      <motion.div
        className="absolute top-4 left-4"
        animate={{ opacity: step === 1 ? 1 : 0.3 }}
      >
        <GoogleCalendarLogo />
        <p className={cn("text-xs mt-1", isDark ? "text-gray-300" : "text-gray-600")}>Calendar</p>
      </motion.div>

      <motion.div
        className="absolute top-4 right-4"
        animate={{ opacity: step === 2 ? 1 : 0.3 }}
      >
        <GmailLogo />
        <p className={cn("text-xs mt-1", isDark ? "text-gray-300" : "text-gray-600")}>Email</p>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4"
        animate={{ opacity: step === 0 ? 1 : 0.3 }}
      >
        <PhoneIcon className={cn("w-8 h-8 p-1 rounded", isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black")} />
        <p className={cn("text-xs mt-1", isDark ? "text-gray-300" : "text-gray-600")}>Phone</p>
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4"
        animate={{ opacity: step === 3 ? 1 : 0.3 }}
      >
        <DatabaseIcon className={cn("w-8 h-8 p-1 rounded", isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black")} />
        <p className={cn("text-xs mt-1", isDark ? "text-gray-300" : "text-gray-600")}>Records</p>
      </motion.div>

      {/* Connection Lines */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={cn("absolute w-0.5 h-12", isDark ? "bg-white" : "bg-black")}
          style={{
            left: index < 2 ? '50%' : '50%',
            top: index % 2 === 0 ? '25%' : '75%',
            transformOrigin: '50% 0%',
            transform: `rotate(${index * 90 - 45}deg)`
          }}
          animate={{ 
            opacity: step === index ? 1 : 0.2,
            scaleY: step === index ? 1 : 0.5
          }}
        />
      ))}

      {/* Current Step Display */}
      <div className={cn(
        "absolute bottom-0 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded text-xs text-center",
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      )}>
        {steps[step]}
      </div>
    </div>
  )
}

const WebsiteSupportDemo = ({ isDark }: { isDark: boolean }) => {
  const [activity, setActivity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivity(prev => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const activities = [
    "Live chat with customer",
    "Email follow-up sent",
    "Team notification"
  ]

  return (
    <div className="relative w-full h-48 p-4 bg-black">
      {/* Central AI */}
      <div className={cn(
        "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 flex items-center justify-center z-10",
        isDark ? "bg-white border-gray-300" : "bg-black border-gray-700"
      )}>
        <ChatIcon className={cn("w-8 h-8", isDark ? "text-black" : "text-white")} />
      </div>

      {/* Services */}
      <motion.div
        className="absolute top-4 left-1/4"
        animate={{ scale: activity === 0 ? 1.1 : 1, opacity: activity === 0 ? 1 : 0.4 }}
      >
        <div className={cn("w-10 h-10 rounded-lg border-2 flex items-center justify-center", isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300")}>
          <ChatIcon className={cn("w-6 h-6", isDark ? "text-white" : "text-black")} />
        </div>
        <p className={cn("text-xs mt-1 text-center", isDark ? "text-gray-300" : "text-gray-600")}>Live Chat</p>
      </motion.div>

      <motion.div
        className="absolute top-4 right-1/4"
        animate={{ scale: activity === 1 ? 1.1 : 1, opacity: activity === 1 ? 1 : 0.4 }}
      >
        <GmailLogo />
        <p className={cn("text-xs mt-1 text-center", isDark ? "text-gray-300" : "text-gray-600")}>Email</p>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ scale: activity === 2 ? 1.1 : 1, opacity: activity === 2 ? 1 : 0.4 }}
      >
        <SlackLogo />
        <p className={cn("text-xs mt-1 text-center", isDark ? "text-gray-300" : "text-gray-600")}>Slack</p>
      </motion.div>

      {/* Activity Display */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded text-xs text-center bg-purple-600 text-white">
        {activities[activity]}
      </div>
    </div>
  )
}

const BusinessAutomationDemo = ({ isDark }: { isDark: boolean }) => {
  const [process, setProcess] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProcess(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-48 p-4">
      {/* Workflow Steps */}
      <div className="flex justify-between items-center h-full">
        {/* Step 1: Receive */}
        <motion.div
          className="text-center"
          animate={{ scale: process === 0 ? 1.1 : 1, opacity: process === 0 ? 1 : 0.4 }}
        >
          <div className={cn("w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-2", isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300")}>
            <EmailIcon className={cn("w-6 h-6", isDark ? "text-white" : "text-black")} />
          </div>
          <p className={cn("text-xs", isDark ? "text-gray-300" : "text-gray-600")}>Receive</p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className={cn("w-8 h-0.5", isDark ? "bg-white" : "bg-black")}
          animate={{ scaleX: process >= 1 ? 1 : 0.3 }}
        />

        {/* Step 2: Process */}
        <motion.div
          className="text-center"
          animate={{ scale: process === 1 ? 1.1 : 1, opacity: process === 1 ? 1 : 0.4 }}
        >
          <div className={cn("w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-2", isDark ? "bg-white border-gray-300" : "bg-black border-gray-700")}>
            <BrainIcon className={cn("w-6 h-6", isDark ? "text-black" : "text-white")} />
          </div>
          <p className={cn("text-xs", isDark ? "text-gray-300" : "text-gray-600")}>AI Process</p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className={cn("w-8 h-0.5", isDark ? "bg-white" : "bg-black")}
          animate={{ scaleX: process >= 2 ? 1 : 0.3 }}
        />

        {/* Step 3: Schedule */}
        <motion.div
          className="text-center"
          animate={{ scale: process === 2 ? 1.1 : 1, opacity: process === 2 ? 1 : 0.4 }}
        >
          <GoogleCalendarLogo />
          <p className={cn("text-xs mt-1", isDark ? "text-gray-300" : "text-gray-600")}>Schedule</p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className={cn("w-8 h-0.5", isDark ? "bg-white" : "bg-black")}
          animate={{ scaleX: process >= 3 ? 1 : 0.3 }}
        />

        {/* Step 4: Notify */}
        <motion.div
          className="text-center"
          animate={{ scale: process === 3 ? 1.1 : 1, opacity: process === 3 ? 1 : 0.4 }}
        >
          <div className={cn("w-12 h-12 rounded-lg border-2 flex items-center justify-center mb-2", isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300")}>
            <span className="text-lg">��</span>
          </div>
          <p className={cn("text-xs", isDark ? "text-gray-300" : "text-gray-600")}>Complete</p>
        </motion.div>
      </div>

      {/* Time Indicator */}
      <div className={cn(
        "absolute bottom-0 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded text-xs font-bold",
        isDark ? "bg-white text-black" : "bg-black text-white"
      )}>
        5 minutes vs 8 hours manually
      </div>
    </div>
  )
}

const aiServices = [
  {
    id: "clinic",
    title: "Clinic Personal Assistant",
    description: "Handles appointments, patient records, and communication",
    demo: ClinicAssistantDemo,
    results: ["89% faster appointments", "Zero double bookings", "24/7 patient support"],
    integrations: ["Google Calendar", "Gmail", "Patient Records", "Phone System"]
  },
  {
    id: "website",
    title: "Website Support Agent", 
    description: "Manages customer inquiries, live chat, and team notifications",
    demo: WebsiteSupportDemo,
    results: ["Instant customer response", "95% query resolution", "Team stays informed"],
    integrations: ["Live Chat", "Email", "Slack", "CRM System"]
  },
  {
    id: "business",
    title: "Business Process Automation",
    description: "Automates workflows from inquiry to completion",
    demo: BusinessAutomationDemo,
    results: ["5 min vs 8 hour processing", "Zero human errors", "24/7 operations"],
    integrations: ["Email", "Calendar", "Database", "Notifications"]
  }
]

export default function VisualAIShowcase({ isDark }: { isDark: boolean }) {
  const [activeService, setActiveService] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % aiServices.length)
    }, 10000)
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
            Real AI Agents In Action
          </h2>
          <p className={cn(
            "text-xl max-w-3xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Watch AI connect your business tools and handle real work automatically
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {aiServices.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                activeService === index
                  ? isDark
                    ? "bg-white text-black shadow-lg"
                    : "bg-black text-white shadow-lg"
                  : isDark
                    ? "text-gray-300 hover:bg-gray-700 border border-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm"
              )}
              style={{
                backgroundColor: activeService === index
                  ? (isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)")
                  : activeService === 0 && index === 0
                    ? "rgba(55, 55, 55, 1)"
                    : activeService === 2 && index === 2
                      ? "rgba(0, 0, 0, 1)"
                      : undefined
              }}
            >
              {service.title}
            </button>
          ))}
        </motion.div>

        {/* Main Demo Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Demo */}
              <div>
                <h3 className={cn(
                  "text-2xl font-bold mb-4",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {aiServices[activeService].title}
                </h3>
                <p className={cn(
                  "text-lg mb-6",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  {aiServices[activeService].description}
                </p>
                
                <div className={cn(
                  "rounded-lg border-2 mb-6",
                  isDark ? "border-gray-700" : "bg-gray-50 border-gray-200"
                )}>
                  {React.createElement(aiServices[activeService].demo, { isDark })}
                </div>

                {/* Integrations */}
                <div>
                  <h4 className={cn("font-semibold mb-3", isDark ? "text-white" : "text-gray-900")}>
                    Connected Services:
                  </h4>
                  <div className="flex flex-wrap gap-2 bg-black">
                    {aiServices[activeService].integrations.map((integration, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded text-sm text-gray-300"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div>
                <h4 className={cn(
                  "text-xl font-bold mb-6",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  Real Results:
                </h4>
                <div className="space-y-4">
                  {aiServices[activeService].results.map((result, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-4 rounded-lg border-l-4",
                        isDark ? "bg-gray-800 border-gray-500" : "bg-gray-50 border-gray-600"
                      )}
                    >
                      <div className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>
                        {result}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className={cn(
                    "w-full px-6 py-4 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105",
                    isDark 
                      ? "bg-white text-black hover:bg-gray-100" 
                      : "bg-black text-white hover:bg-gray-900"
                  )}>
                    Get This AI Agent For Your Business
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
