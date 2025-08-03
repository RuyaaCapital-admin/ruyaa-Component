"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useRef, useState, useEffect } from "react"

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  isDark,
}: {
  items: {
    title: string
    icon: React.ReactNode
    href?: string
    onClick?: () => void
  }[]
  desktopClassName?: string
  mobileClassName?: string
  isDark: boolean
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true)
      } else {
        // Scrolling down
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} isDark={isDark} isVisible={isVisible} />
      <FloatingDockMobile items={items} className={mobileClassName} isDark={isDark} isVisible={isVisible} />
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className,
  isDark,
  isVisible,
}: {
  items: {
    title: string
    icon: React.ReactNode
    href?: string
    onClick?: () => void
  }[]
  className?: string
  isDark: boolean
  isVisible: boolean
}) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={cn("relative block md:hidden", className)}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    key={item.title}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      isDark ? "bg-neutral-900" : "bg-gray-50",
                    )}
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </a>
                ) : (
                  <button
                    onClick={item.onClick}
                    key={item.title}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      isDark ? "bg-neutral-900" : "bg-gray-50",
                    )}
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          isDark ? "bg-neutral-800" : "bg-gray-50",
        )}
      >
        <IconLayoutNavbarCollapse className={cn("h-5 w-5", isDark ? "text-neutral-400" : "text-gray-500")} />
      </button>
    </motion.div>
  )
}

const FloatingDockDesktop = ({
  items,
  className,
  isDark,
  isVisible,
}: {
  items: {
    title: string
    icon: React.ReactNode
    href?: string
    onClick?: () => void
  }[]
  className?: string
  isDark: boolean
  isVisible: boolean
}) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl px-4 pb-3 md:flex",
        isDark ? "bg-neutral-900" : "bg-gray-50",
        className,
      )}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} isDark={isDark} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
  isDark,
}: {
  mouseX: any
  title: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
  isDark: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full",
        isDark ? "bg-neutral-800" : "bg-gray-200",
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className={cn(
              "absolute -top-8 left-1/2 w-fit rounded-md border px-2 py-0.5 text-xs whitespace-pre",
              isDark ? "border-neutral-900 bg-neutral-800 text-white" : "border-gray-200 bg-gray-100 text-gray-700",
            )}
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
        {icon}
      </motion.div>
    </motion.div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return <button onClick={onClick}>{content}</button>
}
