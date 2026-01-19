import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle } from "lucide-react"
import { BackgroundLines } from "./ui/background-lines"

export const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {}
            <BackgroundLines className="h-[500px] bg-white flex flex-col items-center justify-center px-8 py-12">
              {}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-[10000] p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {}
              <div className="relative z-20 text-center flex flex-col items-center justify-center">
                {}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-xl">
                    <CheckCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>

                {}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 text-3xl md:text-4xl lg:text-5xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight"
                >
                  Thank You For Submitting!
                </motion.h2>

                {}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-xl mx-auto text-base md:text-lg text-neutral-700 text-center mb-8"
                >
                  We appreciate you reaching out and will be in touch shortly.
                </motion.p>

                {}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={onClose}
                  className="px-10 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  Close
                </motion.button>
              </div>
            </BackgroundLines>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}