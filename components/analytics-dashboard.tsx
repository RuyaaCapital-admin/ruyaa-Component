"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, BarChart3, TrendingUp, Users, Clock } from "lucide-react"

interface AnalyticsData {
  totalClicks: number
  platformStats: Record<string, number>
  clickHistory: Array<{
    platform: string
    timestamp: number
    sessionId: string
    userAgent: string
    referrer: string
  }>
  lastUpdated: number
}

interface AnalyticsDashboardProps {
  isOpen: boolean
  onClose: () => void
}

export default function AnalyticsDashboard({ isOpen, onClose }: AnalyticsDashboardProps) {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalClicks: 0,
    platformStats: {},
    clickHistory: [],
    lastUpdated: Date.now(),
  })

  useEffect(() => {
    if (isOpen) {
      const savedAnalytics = localStorage.getItem("socialButtonAnalytics")
      if (savedAnalytics) {
        try {
          setAnalytics(JSON.parse(savedAnalytics))
        } catch (error) {
          console.error("Error loading analytics:", error)
        }
      }
    }
  }, [isOpen])

  const getClickPercentage = (platform: string) => {
    if (analytics.totalClicks === 0) return 0
    return Math.round(((analytics.platformStats[platform] || 0) / analytics.totalClicks) * 100)
  }

  const getMostPopularPlatform = () => {
    if (analytics.totalClicks === 0) return "None"
    return Object.entries(analytics.platformStats).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
  }

  const getRecentClicks = () => {
    return analytics.clickHistory
      .slice(-10)
      .reverse()
      .map((click) => ({
        ...click,
        timeAgo: getTimeAgo(click.timestamp),
      }))
  }

  const getTimeAgo = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    if (minutes > 0) return `${minutes}m ago`
    return "Just now"
  }

  const platformColors = {
    whatsapp: "bg-green-500",
    facebook: "bg-blue-600",
    instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
    youtube: "bg-red-600",
  }

  const clearAnalytics = () => {
    localStorage.removeItem("socialButtonAnalytics")
    setAnalytics({
      totalClicks: 0,
      platformStats: {},
      clickHistory: [],
      lastUpdated: Date.now(),
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Dashboard Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 w-full max-w-4xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Social Media Analytics</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-8 w-8" />
                    <div>
                      <p className="text-blue-100">Total Clicks</p>
                      <p className="text-3xl font-bold">{analytics.totalClicks}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8" />
                    <div>
                      <p className="text-green-100">Most Popular</p>
                      <p className="text-xl font-bold capitalize">{getMostPopularPlatform()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3">
                    <Clock className="h-8 w-8" />
                    <div>
                      <p className="text-purple-100">Last Updated</p>
                      <p className="text-lg font-bold">{getTimeAgo(analytics.lastUpdated)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Platform Stats */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Platform Breakdown</h3>
                  <div className="space-y-4">
                    {Object.entries(analytics.platformStats).map(([platform, clicks]) => (
                      <div key={platform} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full ${platformColors[platform as keyof typeof platformColors]}`}
                          />
                          <span className="capitalize font-medium text-gray-700 dark:text-gray-300">{platform}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-900 dark:text-white font-semibold">{clicks}</span>
                          <span className="text-sm text-gray-500">({getClickPercentage(platform)}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {getRecentClicks().map((click, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${platformColors[click.platform as keyof typeof platformColors]}`}
                          />
                          <span className="capitalize text-gray-700 dark:text-gray-300">{click.platform}</span>
                        </div>
                        <span className="text-sm text-gray-500">{click.timeAgo}</span>
                      </div>
                    ))}
                    {analytics.clickHistory.length === 0 && (
                      <p className="text-gray-500 text-center py-4">No clicks recorded yet</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={clearAnalytics}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Clear Data
                </button>
                <p className="text-sm text-gray-500">Data is stored locally in your browser</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
