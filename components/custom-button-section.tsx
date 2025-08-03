"use client"
import { motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"
import { useRef } from "react"

export default function CustomButtonSection({ isDark }: { isDark: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className={cn("py-16 md:py-20 px-4 relative overflow-hidden", isDark ? "bg-black" : "bg-white")}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className={cn(
              "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6",
              isDark ? "text-white" : "text-gray-900",
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Industries We Empower with AI
          </motion.h2>
          <motion.p
            className={cn(
              "text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 md:mb-12",
              isDark ? "text-gray-300" : "text-gray-600",
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Smart solutions for every business, in every industry, everywhere
          </motion.p>

          {/* Custom Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <button className="custom-button">
              <div className="fx"></div>
              <div className="fx bottom"></div>
              <div className="content">
                <span>Get Started</span>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-button {
          --color-100: ${isDark ? "#f3f4f6" : "#1f2937"};
          --color-200: ${isDark ? "#e5e7eb" : "#374151"};
          --color-300: ${isDark ? "#d1d5db" : "#4b5563"};
          --color-400: ${isDark ? "#9ca3af" : "#6b7280"};
          --color-500: ${isDark ? "#6b7280" : "#9ca3af"};
          --color-600: ${isDark ? "#4b5563" : "#d1d5db"};
          --color-700: ${isDark ? "#374151" : "#e5e7eb"};
          --color-800: ${isDark ? "#1f2937" : "#f3f4f6"};
          --color-900: ${isDark ? "#111827" : "#f9fafb"};
          --color-1000: ${isDark ? "#000000" : "#ffffff"};
          
          background-color: var(--color-800);
          border: none;
          border-radius: 22px;
          box-shadow: var(--color-800) 0 0 10px;
          color: var(--color-100);
          cursor: pointer;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          height: 84px;
          min-width: 230px;
          padding: 1rem;
          position: relative;
          transition: all 0.3s ease;
          transform: rotate(-10deg) skew(2deg);
        }

        .content {
          background: linear-gradient(
            to top,
            var(--color-700) 5%,
            var(--color-500) 30%,
            var(--color-400) 60%,
            var(--color-300) 80%,
            var(--color-200) 100%
          );
          border-radius: 20px;
          box-shadow: var(--color-800) -16px 20px 30px 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          position: absolute;
          inset: 0;
          padding-bottom: 5px;
          transform: translate(6px, -8px);
          transition: all 0.3s ease;
          z-index: 3;
        }

        .content::before {
          content: "";
          position: absolute;
          inset: 3px;
          background: linear-gradient(
            to bottom,
            var(--color-400),
            var(--color-500),
            var(--color-700)
          );
          border-radius: inherit;
          box-shadow: inset 0 -8px 20px -3px rgba(0, 0, 0, 0.43),
            inset 0 10px 14px -5px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          z-index: -1;
        }

        .custom-button:active .content {
          box-shadow: none;
          transform: translate(3px, -4px);
        }

        .custom-button:active .content::before {
          box-shadow: inset 0 8px 20px -3px rgba(0, 0, 0, 0.43),
            inset 0 -10px 14px -5px rgba(255, 255, 255, 0.3);
        }

        .content span,
        .content svg {
          filter: drop-shadow(1px 2px 3px var(--color-700));
          pointer-events: none;
          position: relative;
          text-shadow: 1px 2px var(--color-700);
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        .custom-button .content svg {
          transition: all 0.4s ease-out;
        }

        .custom-button:hover {
          filter: brightness(1.1);
        }

        .custom-button:active {
          filter: none;
        }

        .custom-button:hover .content svg {
          transform: translateX(7px);
        }

        .custom-button .fx {
          content: "";
          background-repeat: no-repeat;
          position: absolute;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
        }

        .custom-button:active .bottom {
          transform: scale(-1) translateY(-185%) translateX(60%);
        }

        .custom-button:active .fx {
          background-image: radial-gradient(
              circle,
              var(--color-400) 10%,
              transparent 10%
            ),
            radial-gradient(circle, var(--color-200) 15%, transparent 15%),
            radial-gradient(circle, var(--color-300) 22%, transparent 22%),
            radial-gradient(circle, var(--color-700) 10%, transparent 22%),
            radial-gradient(circle, var(--color-600) 15%, transparent 15%),
            radial-gradient(circle, var(--color-400) 20%, transparent 20%),
            radial-gradient(circle, var(--color-300) 22%, transparent 22%),
            radial-gradient(circle, var(--color-300) 10%, transparent 10%),
            radial-gradient(circle, var(--color-200) 22%, transparent 22%),
            radial-gradient(circle, var(--color-800) 10%, transparent 10%),
            radial-gradient(circle, var(--color-800) 15%, transparent 15%);
          background-size: 15% 15%, 25% 25%, 20% 20%, 25% 25%, 18% 18%, 18% 18%,
            15% 15%, 22% 22%, 15% 15%, 25% 25%, 20% 20%;
          background-position: 50% 125%;
          animation: bubblesAnimation 0.9s ease;
          top: -90%;
        }

        @keyframes bubblesAnimation {
          0% {
            background-position: 10% 95%, 15% 95%, 15% 95%, 20% 95%, 30% 95%,
              30% 95%, 45% 95%, 65% 95%, 75% 95%, 10% 95%, 15% 95%, 15% 95%;
          }
          70% {
            background-position: 5% 85%, 5% 25%, 15% 45%, 25% 5%, 35% 35%,
              27% 55%, 55% 55%, 75% 25%, 95% 35%, 5% 85%, 15% 45%;
          }
          100% {
            background-position: 5% 75%, 5% 15%, 15% 35%, 25% 0%, 35% 25%,
              27% 45%, 55% 45%, 70% 15%, 95% 25%, 5% 75%, 15% 35%;
            background-size: 0% 0%;
          }
        }
      `}</style>
    </section>
  )
}
