"use client"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { FloatingDock } from "@/components/ui/floating-dock"
import { LampDemo } from "@/components/ui/lamp"
import IndustriesSection from "@/components/industries-section"
import InteractiveAIShowcase from "@/components/interactive-ai-showcase"

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



      {/* Interactive AI Showcase Section */}
      <div className="relative z-30">
        <InteractiveAIShowcase isDark={isDark} />
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
    title: "AI Analytics Dashboard",
    link: "https://ruyaacapital.com/analytics",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Neural Network Intelligence",
    link: "https://ruyaacapital.com/neural", 
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Data Processing",
    link: "https://ruyaacapital.com/processing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Predictive Analytics Engine",
    link: "https://ruyaacapital.com/predictive",
    thumbnail: "https://images.unsplash.com/photo-1579952363873-27d3bfda9227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Intelligent Automation Hub",
    link: "https://ruyaacapital.com/automation",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Security Operations",
    link: "https://ruyaacapital.com/security",
    thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning Models",
    link: "https://ruyaacapital.com/ml-models",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Conversational AI Platform",
    link: "https://ruyaacapital.com/chatbot",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Computer Vision Suite",
    link: "https://ruyaacapital.com/vision",
    thumbnail: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real-time Data Streams",
    link: "https://ruyaacapital.com/realtime",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Content Generation",
    link: "https://ruyaacapital.com/content",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blockchain AI Analytics",
    link: "https://ruyaacapital.com/blockchain",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smart Document Processing",
    link: "https://ruyaacapital.com/documents",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Quality Assurance",
    link: "https://ruyaacapital.com/qa",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Intelligent Recommendations",
    link: "https://ruyaacapital.com/recommendations",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]
