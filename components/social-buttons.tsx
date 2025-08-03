"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft } from "lucide-react"

interface SocialButtonsProps {
  isDark: boolean
}

export default function SocialButtons({ isDark }: SocialButtonsProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
      }, 5000) // Auto-collapse after 5 seconds
    }
  }

  // Handle clicks outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isExpanded])

  // Setup auto-collapse timer when expanded
  useEffect(() => {
    resetAutoCollapseTimer()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isExpanded])

  const handleSocialClick = (url: string) => {
    // Reset auto-collapse timer after click
    resetAutoCollapseTimer()
    // Open the social media link
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div
        ref={containerRef}
        className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-300 ${
          isExpanded ? "translate-x-0" : "translate-x-[calc(100%-60px)]"
        }`}
        onMouseEnter={() => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
        }}
        onMouseLeave={resetAutoCollapseTimer}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={handleToggle}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-l-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 ${
            isDark
              ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600"
              : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.div>
        </motion.button>

        {/* Social Media Buttons */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
              className={`ml-12 rounded-l-2xl shadow-2xl border backdrop-blur-md overflow-hidden ${
                isDark
                  ? "bg-gray-800/95 border-gray-600"
                  : "bg-white/95 border-gray-200"
              }`}
            >
              <ul className="py-3">
                {/* WhatsApp */}
                <li className="px-4 py-2">
                  <button
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isDark
                        ? "hover:bg-green-600/20 text-white"
                        : "hover:bg-green-50 text-gray-800"
                    }`}
                    onClick={() => handleSocialClick("https://wa.me/1234567890")}
                  >
                    <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-sm">WhatsApp</span>
                    </div>
                  </button>
                </li>

                {/* Facebook */}
                <li className="px-4 py-2">
                  <button
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isDark
                        ? "hover:bg-blue-600/20 text-white"
                        : "hover:bg-blue-50 text-gray-800"
                    }`}
                    onClick={() => handleSocialClick("https://facebook.com/ruyaacapital")}
                  >
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-sm">Facebook</span>
                    </div>
                  </button>
                </li>

                {/* Instagram */}
                <li className="px-4 py-2">
                  <button
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isDark
                        ? "hover:bg-pink-600/20 text-white"
                        : "hover:bg-pink-50 text-gray-800"
                    }`}
                    onClick={() => handleSocialClick("https://instagram.com/ruyaacapital")}
                  >
                    <svg className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.75 13.747 3.75 12.45c0-1.297.448-2.448 1.376-3.323.877-.807 2.026-1.297 3.323-1.297 1.297 0 2.448.49 3.323 1.297.875.875 1.297 2.026 1.297 3.323 0 1.297-.422 2.445-1.297 3.32-.875.807-2.026 1.315-3.323 1.315zm7.439 0c-1.297 0-2.448-.49-3.323-1.297-.875-.875-1.297-2.023-1.297-3.32 0-1.297.422-2.448 1.297-3.323.875-.807 2.026-1.297 3.323-1.297 1.297 0 2.448.49 3.323 1.297.875.875 1.297 2.026 1.297 3.323 0 1.297-.422 2.445-1.297 3.32-.875.807-2.026 1.315-3.323 1.315z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-sm">Instagram</span>
                    </div>
                  </button>
                </li>

                {/* YouTube */}
                <li className="px-4 py-2">
                  <button
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isDark
                        ? "hover:bg-red-600/20 text-white"
                        : "hover:bg-red-50 text-gray-800"
                    }`}
                    onClick={() => handleSocialClick("https://youtube.com/@ruyaacapital")}
                  >
                    <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="font-medium text-sm">YouTube</span>
                    </div>
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
