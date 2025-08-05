"use client"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { FloatingDock } from "@/components/ui/floating-dock"
import { LampDemo } from "@/components/ui/lamp"
import IndustriesSection from "@/components/industries-section"
import VisualAIShowcase from "@/components/visual-ai-showcase"
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

      {/* Service Showcase Section */}
      <div className="relative z-30">
        <ServiceShowcaseSection isDark={isDark} />
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
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2F3f570e1f499e489383888e022380825c%2F664c26b02f7e448fa8dfe6df841853af?format=webp&width=800",
  },
  {
    title: "Smart Investment Tools",
    link: "https://ruyaacapital.com/investment",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2F3f570e1f499e489383888e022380825c%2F34f4312a14354910aec2ec7dbba4c4c5?format=webp&width=800",
  },
  {
    title: "Risk Assessment AI",
    link: "https://ruyaacapital.com/risk",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2F3f570e1f499e489383888e022380825c%2Fc8c566e33f994763a9f488b92e14095c?format=webp&width=800",
  },
  {
    title: "Market Intelligence",
    link: "https://ruyaacapital.com/market",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Automated Trading",
    link: "https://ruyaacapital.com/trading",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Optimizer",
    link: "https://ruyaacapital.com/optimizer",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Forecasting",
    link: "https://ruyaacapital.com/forecasting",
    thumbnail: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Client Dashboard",
    link: "https://ruyaacapital.com/dashboard",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Compliance Monitor",
    link: "https://ruyaacapital.com/compliance",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Visualization",
    link: "https://ruyaacapital.com/visualization",
    thumbnail: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sentiment Analysis",
    link: "https://ruyaacapital.com/sentiment",
    thumbnail: "https://images.unsplash.com/photo-1516110833967-0b5656ca893a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blockchain Analytics",
    link: "https://ruyaacapital.com/blockchain",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "ESG Scoring",
    link: "https://ruyaacapital.com/esg",
    thumbnail: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Alternative Data",
    link: "https://ruyaacapital.com/altdata",
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Robo Advisory",
    link: "https://ruyaacapital.com/robo",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]
