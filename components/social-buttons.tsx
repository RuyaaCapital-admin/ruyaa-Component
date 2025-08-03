"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft } from "lucide-react"

interface SocialButtonsProps {
  isDark: boolean
}

interface ClickAnalytics {
  platform: string
  timestamp: number
  sessionId: string
  userAgent: string
  referrer: string
}

interface AnalyticsData {
  totalClicks: number
  platformStats: Record<string, number>
  clickHistory: ClickAnalytics[]
  lastUpdated: number
}

export default function SocialButtons({ isDark }: SocialButtonsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalClicks: 0,
    platformStats: {},
    clickHistory: [],
    lastUpdated: Date.now(),
  })

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [sessionId] = useState(() => {
    // Generate unique session ID
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  })

  // Auto-collapse functionality
  const resetAutoCollapseTimer = () => {
    // Clear existing timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set new timer only if expanded
    if (isExpanded) {
      timeoutRef.current = setTimeout(() => {
        setIsExpanded(false)
      }, 5000) // 5 seconds
    }
  }

  // Handle mouse enter - reset timer
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  // Handle mouse leave - start timer
  const handleMouseLeave = () => {
    resetAutoCollapseTimer()
  }

  // Reset timer when expanded state changes
  useEffect(() => {
    if (isExpanded) {
      resetAutoCollapseTimer()
    } else {
      // Clear timer when collapsed
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isExpanded])

  // Load analytics from localStorage on component mount
  useEffect(() => {
    const savedAnalytics = localStorage.getItem("socialButtonAnalytics")
    if (savedAnalytics) {
      try {
        const parsed = JSON.parse(savedAnalytics)
        setAnalytics(parsed)
      } catch (error) {
        console.error("Error loading analytics:", error)
      }
    }
  }, [])

  // Save analytics to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("socialButtonAnalytics", JSON.stringify(analytics))
  }, [analytics])

  const trackClick = (platform: string, url: string) => {
    const clickData: ClickAnalytics = {
      platform,
      timestamp: Date.now(),
      sessionId,
      userAgent: navigator.userAgent,
      referrer: document.referrer || "direct",
    }

    setAnalytics((prev) => ({
      totalClicks: prev.totalClicks + 1,
      platformStats: {
        ...prev.platformStats,
        [platform]: (prev.platformStats[platform] || 0) + 1,
      },
      clickHistory: [...prev.clickHistory, clickData].slice(-100), // Keep last 100 clicks
      lastUpdated: Date.now(),
    }))

    // Send analytics to console for debugging (replace with your analytics service)
    console.log("🔍 Social Media Click Analytics:", {
      platform,
      clickData,
      totalClicks: analytics.totalClicks + 1,
      platformStats: {
        ...analytics.platformStats,
        [platform]: (analytics.platformStats[platform] || 0) + 1,
      },
    })

    // Optional: Send to external analytics service
    sendToAnalyticsService(clickData)

    // Reset auto-collapse timer after click
    resetAutoCollapseTimer()

    // Open the social media link
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const sendToAnalyticsService = async (clickData: ClickAnalytics) => {
    try {
      // Example: Send to Google Analytics, Mixpanel, or your custom analytics endpoint
      // Replace this with your actual analytics service

      // Google Analytics 4 example (if you have gtag loaded)
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "social_media_click", {
          platform: clickData.platform,
          session_id: clickData.sessionId,
          timestamp: clickData.timestamp,
        })
      }

      // Custom analytics endpoint example
      // await fetch('/api/analytics/social-clicks', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(clickData)
      // })

      console.log("📊 Analytics sent successfully:", clickData.platform)
    } catch (error) {
      console.error("❌ Failed to send analytics:", error)
    }
  }

  const getClickPercentage = (platform: string) => {
    if (analytics.totalClicks === 0) return 0
    return Math.round(((analytics.platformStats[platform] || 0) / analytics.totalClicks) * 100)
  }

  const getMostPopularPlatform = () => {
    if (analytics.totalClicks === 0) return "None"
    return Object.entries(analytics.platformStats).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
  }

  // Analytics Dashboard (for development - remove in production)
  const showAnalyticsDashboard = () => {
    console.log("📈 Social Media Analytics Dashboard:", {
      totalClicks: analytics.totalClicks,
      platformBreakdown: analytics.platformStats,
      mostPopular: getMostPopularPlatform(),
      recentClicks: analytics.clickHistory.slice(-5),
      sessionId,
    })
  }

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div
        ref={containerRef}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Toggle Arrow Button - Only visible element when collapsed */}
        <motion.button
          onClick={handleToggle}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronLeft className="w-4 h-4 text-black" />
          </motion.div>
        </motion.button>

        {/* Social Media Buttons - Slide in from right when expanded */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: -60, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="absolute top-0"
            >
              <ul className="flex flex-col space-y-3 list-none">
                <li className="relative group">
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-green-600 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap flex items-center gap-2">
                      WhatsApp
                      {analytics.platformStats.whatsapp && (
                        <span className="bg-green-800 px-2 py-1 rounded-full text-xs">
                          {analytics.platformStats.whatsapp}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => trackClick("whatsapp", "https://wa.me/your-number")}
                    data-social="whatsapp"
                    className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-600 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg group"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-green-600 transition-all duration-300 ease-in-out group-hover:h-full"></div>
                    <svg className="relative z-10 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </button>
                </li>

                <li className="relative group">
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap flex items-center gap-2">
                      Facebook
                      {analytics.platformStats.facebook && (
                        <span className="bg-blue-800 px-2 py-1 rounded-full text-xs">
                          {analytics.platformStats.facebook}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => trackClick("facebook", "https://facebook.com/your-page")}
                    data-social="facebook"
                    className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-600 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg group"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:h-full"></div>
                    <svg className="relative z-10 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                </li>

                <li className="relative group">
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap flex items-center gap-2">
                      Instagram
                      {analytics.platformStats.instagram && (
                        <span className="bg-black/30 px-2 py-1 rounded-full text-xs">
                          {analytics.platformStats.instagram}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => trackClick("instagram", "https://instagram.com/your-profile")}
                    data-social="instagram"
                    className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-600 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg group"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 ease-in-out group-hover:h-full"></div>
                    <svg className="relative z-10 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </li>

                <li className="relative group">
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-red-600 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap flex items-center gap-2">
                      YouTube
                      {analytics.platformStats.youtube && (
                        <span className="bg-red-800 px-2 py-1 rounded-full text-xs">
                          {analytics.platformStats.youtube}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => trackClick("youtube", "https://youtube.com/your-channel")}
                    data-social="youtube"
                    className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-600 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg group"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:h-full"></div>
                    <svg className="relative z-10 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Analytics Dashboard Button (Development Only - Remove in Production) */}
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={showAnalyticsDashboard}
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-md text-xs hover:bg-blue-700 transition-colors z-40"
        >
          📊 Analytics ({analytics.totalClicks})
        </button>
      )}
    </>
  )
}
