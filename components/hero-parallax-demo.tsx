"use client"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { FloatingDock } from "@/components/ui/floating-dock"
import { LampDemo } from "@/components/ui/lamp"
import IndustriesSection from "@/components/industries-section"
// Removed CustomButtonSection import
import SocialButtons from "@/components/social-buttons"

import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconBrain,
  IconSun,
  IconMoon,
  IconChartBar,
} from "@tabler/icons-react"
import { useState } from "react"

export default function HeroParallaxDemo() {
  const [isDark, setIsDark] = useState(true)


  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const navItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Services",
      icon: <IconBrain className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#services",
    },
    {
      title: "Portfolio",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#portfolio",
    },

    {
      title: isDark ? "Light Mode" : "Dark Mode",
      icon: isDark ? (
        <IconSun className="h-full w-full text-yellow-500" />
      ) : (
        <IconMoon className="h-full w-full text-blue-500" />
      ),
      onClick: toggleTheme,
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
  ]

  return (
    <div className={`relative transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      {/* Lamp Section */}
      <LampDemo isDark={isDark} />

      {/* Hero Parallax Section */}
      <div className="relative z-10">
        <HeroParallax products={products} isDark={isDark} />
      </div>

      {/* Removed Custom Button Section to prevent duplication */}
      {/* <div className="relative z-20">
        <CustomButtonSection isDark={isDark} />
      </div> */}

      {/* Industries Section */}
      <div className="relative z-30 flex flex-col">
        <IndustriesSection isDark={isDark} />
      </div>

      {/* Social Buttons - Fixed on Right Side */}
      <SocialButtons isDark={isDark} />



      {/* Floating Dock Navigation */}
      <FloatingDock
        items={navItems}
        desktopClassName="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed top-8 right-8 z-50"
        isDark={isDark}
      />
    </div>
  )
}

export const products = [
  {
    title: "AI Analytics Platform",
    link: "https://ruyaacapital.com/analytics",
    thumbnail: "/placeholder.svg?height=600&width=600&text=AI+Analytics",
  },
  {
    title: "Smart Investment Tools",
    link: "https://ruyaacapital.com/investment",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Investment+Tools",
  },
  {
    title: "Risk Assessment AI",
    link: "https://ruyaacapital.com/risk",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Risk+Assessment",
  },
  {
    title: "Market Intelligence",
    link: "https://ruyaacapital.com/market",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Market+Intelligence",
  },
  {
    title: "Automated Trading",
    link: "https://ruyaacapital.com/trading",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Automated+Trading",
  },
  {
    title: "Portfolio Optimizer",
    link: "https://ruyaacapital.com/optimizer",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Portfolio+Optimizer",
  },
  {
    title: "Financial Forecasting",
    link: "https://ruyaacapital.com/forecasting",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Financial+Forecasting",
  },
  {
    title: "Client Dashboard",
    link: "https://ruyaacapital.com/dashboard",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Client+Dashboard",
  },
  {
    title: "Compliance Monitor",
    link: "https://ruyaacapital.com/compliance",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Compliance+Monitor",
  },
  {
    title: "Data Visualization",
    link: "https://ruyaacapital.com/visualization",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Data+Visualization",
  },
  {
    title: "Sentiment Analysis",
    link: "https://ruyaacapital.com/sentiment",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Sentiment+Analysis",
  },
  {
    title: "Blockchain Analytics",
    link: "https://ruyaacapital.com/blockchain",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Blockchain+Analytics",
  },
  {
    title: "ESG Scoring",
    link: "https://ruyaacapital.com/esg",
    thumbnail: "/placeholder.svg?height=600&width=600&text=ESG+Scoring",
  },
  {
    title: "Alternative Data",
    link: "https://ruyaacapital.com/altdata",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Alternative+Data",
  },
  {
    title: "Robo Advisory",
    link: "https://ruyaacapital.com/robo",
    thumbnail: "/placeholder.svg?height=600&width=600&text=Robo+Advisory",
  },
]
