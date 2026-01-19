import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Mail, Calendar } from "lucide-react"
import { ZohoForm } from "./ZohoForm"
import { trackPhoneClick, trackEmailClick, trackModalClose } from "../utils/analytics"

export const CalendlyModal = ({ isOpen, onClose }) => {

  const handlePhoneClick = () => {
    trackPhoneClick('+919960192594', 'enquiry_modal')
  }

  const handleEmailClick = () => {
    trackEmailClick('info@classpe.com', 'enquiry_modal')
  }

  const handleClose = () => {
    trackModalClose('enquiry_modal')
    onClose()
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gunmetal/80 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">
              {}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-600 to-primary opacity-90"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

                <div className="relative flex items-center justify-between p-6 md:p-8">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90 text-sm font-inter font-medium">Book Your Slot</span>
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-3xl font-poppins font-bold text-white"
                    >
                      Get Your Free Demo
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/80 text-sm mt-1 font-inter"
                    >
                      Fill in your details and we'll get back to you
                    </motion.p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClose}
                    className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {}
              <div className="bg-gradient-to-r from-gray-50 to-primary-50/30 px-6 md:px-8 py-4 border-b border-gray-100">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
                  <a
                    href="tel:+919960192594"
                    onClick={handlePhoneClick}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-inter font-medium">+91 99601 92594</span>
                  </a>
                  <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
                  <a
                    href="mailto:info@classpe.com"
                    onClick={handleEmailClick}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-inter font-medium">info@classpe.com</span>
                  </a>
                </div>
              </div>

              {}
              <div className="bg-white p-6 md:p-8">
                <ZohoForm />

                {}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-inter">Your information is safe and secure with us</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
