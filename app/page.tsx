"use client"

import IndustriesSection from "../components/industries-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-20">
        <IndustriesSection isDark={true} />
      </div>
    </div>
  )
}
