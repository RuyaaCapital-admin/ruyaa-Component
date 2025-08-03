"use client"
import { motion, useInView } from "motion/react"
import type React from "react"

import { cn } from "@/lib/utils"
import { useRef } from "react"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { FlipWords } from "@/components/ui/flip-words" // Import FlipWords
import GlassCards from "./glass-cards"

interface Industry {
  id: string
  title: string
  description: string
  image: string
  icon: React.ReactNode
  imageOpacity: number
  gradientOpacity: {
    from: number
    via: number
    to: number
  }
  accentOpacity: number
}

const industries: Industry[] = [
  {
    id: "medical",
    title: "Solutions for Clinics & Medical Centers",
    description:
      "Advanced AI-powered healthcare solutions for patient management, diagnostics, and medical workflow optimization.",
    image: "/images/medical-solutions.png",
    icon: <div className="h-4 w-4 text-black dark:text-neutral-400">Icon</div>, // Placeholder for icon
    imageOpacity: 0.35, // Higher opacity for medical - clean, professional look
    gradientOpacity: { from: 0.65, via: 0.45, to: 0.65 },
    accentOpacity: 0.25,
  },
  {
    id: "websites",
    title: "Websites & Online Businesses",
    description:
      "Cutting-edge web solutions with AI integration for e-commerce, analytics, and customer engagement platforms.",
    image: "/images/web-businesses.png",
    icon: <div className="h-4 w-4 text-black dark:text-neutral-400">Icon</div>, // Placeholder for icon
    imageOpacity: 0.4, // Highest opacity for web - vibrant, dynamic feel
    gradientOpacity: { from: 0.55, via: 0.35, to: 0.55 },
    accentOpacity: 0.3,
  },
  {
    id: "financial",
    title: "Financial Services & Smart Investing",
    description:
      "Intelligent financial platforms with AI-driven investment strategies, risk assessment, and portfolio management.",
    image: "/images/financial-services.png",
    icon: <div className="h-4 w-4 text-black dark:text-neutral-400">Icon</div>, // Placeholder for icon
    imageOpacity: 0.25, // Lower opacity for finance - sophisticated, subtle
    gradientOpacity: { from: 0.7, via: 0.5, to: 0.7 },
    accentOpacity: 0.2,
  },
  {
    id: "education",
    title: "Smart Education & Training Sector",
    description:
      "Revolutionary educational technology with personalized learning, AI tutoring, and advanced training systems.",
    image: "/images/education-sector.png",
    icon: <div className="h-4 w-4 text-black dark:text-neutral-400">Icon</div>, // Placeholder for icon
    imageOpacity: 0.32, // Moderate opacity for education - warm, approachable
    gradientOpacity: { from: 0.6, via: 0.4, to: 0.6 },
    accentOpacity: 0.22,
  },
]

export default function IndustriesSection({ isDark }: { isDark: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const words = [
    "AI For Clinics & Medical Centers",
    "it works with Websites & Online Businesses",
    "we serve Financial Services & Smart Investing",
    "AI For Smart Education & Training Sector",
  ]

  return (
    <BackgroundBeamsWithCollision isDark={isDark} className="min-h-screen">
      <motion.section
        ref={ref}
        className="py-16 md:py-20 px-4 relative overflow-hidden w-full flex flex-col items-center justify-center text-center" // Added flexbox for centering
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
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
                "text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center",
                isDark ? "text-white" : "text-gray-900",
              )}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FlipWords words={words} isDark={isDark} className="inline-block" />
            </motion.h2>
            <motion.p
              className={cn(
                "text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 md:mb-12 relative",
                isDark ? "text-gray-300" : "text-gray-600",
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="highlighted-tagline">
                Smart solutions for every business, in{" "}
                <span className="industry-highlight">every industry</span>, everywhere
              </span>
            </motion.p>

            {/* Glass Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8 md:mb-12"
            >
              <GlassCards />
            </motion.div>

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
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CSS for highlighted tagline and phrases */}
      <style jsx global>{`
        .highlighted-tagline {
          position: relative;
          display: inline-block;
        }

        .highlight-phrase {
          background: linear-gradient(
            120deg,
            ${isDark
              ? 'rgba(34, 197, 94, 0.3)'
              : 'rgba(34, 197, 94, 0.2)'
            } 0%,
            ${isDark
              ? 'rgba(59, 130, 246, 0.3)'
              : 'rgba(59, 130, 246, 0.2)'
            } 100%
          );
          padding: 4px 12px;
          border-radius: 12px;
          font-weight: 700;
          color: ${isDark ? '#ffffff' : '#1f2937'};
          border: 2px solid ${isDark
            ? 'rgba(34, 197, 94, 0.4)'
            : 'rgba(34, 197, 94, 0.3)'
          };
          box-shadow: ${isDark
            ? '0 4px 12px rgba(34, 197, 94, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
            : '0 4px 12px rgba(34, 197, 94, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
          };
          text-shadow: ${isDark
            ? '0 1px 2px rgba(0, 0, 0, 0.3)'
            : '0 1px 2px rgba(255, 255, 255, 0.8)'
          };
          display: inline-block;
          margin: 0 2px;
        }

        .sector-highlight {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            120deg,
            ${isDark
              ? 'rgba(34, 197, 94, 0.2)'
              : 'rgba(34, 197, 94, 0.15)'
            } 0%,
            ${isDark
              ? 'rgba(59, 130, 246, 0.2)'
              : 'rgba(59, 130, 246, 0.15)'
            } 100%
          );
          padding: 2px 8px;
          border-radius: 8px;
          font-weight: 600;
          color: ${isDark ? '#ffffff' : '#1f2937'};
          transition: all 0.3s ease;
          border: 1px solid ${isDark
            ? 'rgba(34, 197, 94, 0.3)'
            : 'rgba(34, 197, 94, 0.25)'
          };
          box-shadow: ${isDark
            ? '0 2px 8px rgba(34, 197, 94, 0.1)'
            : '0 2px 8px rgba(34, 197, 94, 0.08)'
          };
        }

        .sector-highlight:hover {
          background: linear-gradient(
            120deg,
            ${isDark
              ? 'rgba(34, 197, 94, 0.3)'
              : 'rgba(34, 197, 94, 0.25)'
            } 0%,
            ${isDark
              ? 'rgba(59, 130, 246, 0.3)'
              : 'rgba(59, 130, 246, 0.25)'
            } 100%
          );
          transform: translateY(-1px);
          box-shadow: ${isDark
            ? '0 4px 12px rgba(34, 197, 94, 0.15)'
            : '0 4px 12px rgba(34, 197, 94, 0.12)'
          };
        }

        .sector-highlight:nth-child(2) {
          animation-delay: 0.2s;
        }

        .sector-highlight:nth-child(4) {
          animation-delay: 0.4s;
        }

        .sector-highlight:nth-child(6) {
          animation-delay: 0.6s;
        }

        @keyframes highlightPulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .highlighted-tagline.animate .sector-highlight {
          animation: highlightPulse 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .sector-highlight {
            padding: 1px 6px;
            border-radius: 6px;
            font-size: 0.95em;
          }
        }
      `}</style>
    </BackgroundBeamsWithCollision>
  )
}
