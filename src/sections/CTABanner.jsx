import React, { useState } from "react"
import { WavyBackground } from "../components/ui/wavy-background"
import { CalendlyModal } from "../components/CalendlyModal"
import { trackLead, trackModalOpen, trackCTAClick } from "../utils/analytics"

export const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCounselingClick = () => {
    trackCTAClick('book_counseling', 'cta_banner')
    trackModalOpen('enquiry_modal', 'cta_banner')
    trackLead('cta_banner_counseling', { content_category: 'counseling' })
    setIsModalOpen(true)
  }

  return (
    <>
      <WavyBackground
        className="max-w-4xl mx-auto"
        containerClassName="py-12 md:py-16 lg:py-20"
        colors={["#f7d148", "#ffd700", "#ffb347", "#f7d148", "#ffc107"]}
        waveWidth={50}
        backgroundFill="#f7d148"
        blur={10}
        speed="slow"
        waveOpacity={0.3}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 font-bold font-poppins text-center leading-tight px-4">
          Your Success Story Starts Here with{" "}
          <span className="text-primary">ClassPe!</span>
        </p>
        <p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4 text-gray-800 font-medium font-inter text-center max-w-2xl mx-auto px-4">
          Experience personalized learning with elite IIT & IISER faculty.{" "}
          <button
            onClick={handleCounselingClick}
            className="text-primary font-semibold underline hover:text-primary-600 transition-colors duration-200 cursor-pointer"
          >
            Book a free counseling session
          </button>
        </p>
      </WavyBackground>

      {}
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
