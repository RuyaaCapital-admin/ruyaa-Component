"use client"

import HeroParallaxDemo from "../components/hero-parallax-demo"
import ServiceShowcaseSection from "../components/service-showcase-section"

export default function Page() {
  return (
    <>
      <HeroParallaxDemo />
      <ServiceShowcaseSection isDark={true} />
    </>
  )
}
