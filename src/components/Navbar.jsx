import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "./Button"
import classpeLogo from "../images/Classpe-final-Logo.webp"
import { trackPhoneClick, trackCTAClick } from "../utils/analytics"

export const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleCallNow = () => {
    trackCTAClick('call_now', 'navbar')
    trackPhoneClick('+919960192594', 'navbar')
    window.location.href = "tel:+919960192594"
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-soft-lg backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => {
              if (onNavigate) {
                onNavigate("home")
              }
              window.location.hash = ""
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <img
              src={classpeLogo}
              alt="ClassPe Logo"
              className="h-8 md:h-10 w-auto"
            />
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="secondary"
              size="md"
              className="shadow-soft-md hover:shadow-soft-lg transition-shadow font-poppins"
              onClick={handleCallNow}
            >
              Call Now
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}