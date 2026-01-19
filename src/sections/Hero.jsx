import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "../components/Button"
import { CalendlyModal } from "../components/CalendlyModal"
import { Cover } from "../components/ui/cover"
import heroIllustration from "../images/I-1-classpe-website-front-pic.png"
import { trackLead, trackModalOpen, trackYouTubeClick } from "../utils/analytics"

export const Hero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const handleEnquireNow = () => {
    trackModalOpen('enquiry_modal', 'hero')
    trackLead('hero_enquire_now', { content_category: 'enquiry' })
    setIsCalendlyOpen(true)
  }

  const handleStartLearning = () => {
    trackYouTubeClick('channel', 'hero')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8 md:pb-10 lg:pb-12">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-white to-secondary-50/40">
        {}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 25, 0],
            y: [0, -35, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 font-poppins font-extrabold text-gray-900 leading-tight tracking-tight"
            >
              Unmatched Personal Attention for{" "}
              <Cover>IIT-JEE</Cover>
            </motion.h1>

            {}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              India's first conference style classroom program for 2 Year JEE Main & Advanced.
              Experience personalized attention like never before, in small batches of 9 students
              with faculty from IIT and IISER.
            </motion.p>

            {}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="https://www.youtube.com/@teamclasspe"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStartLearning}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <button
                onClick={handleEnquireNow}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-gray-900 font-semibold text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Enquire Now
              </button>
            </motion.div>

            {}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-medium">15.1K+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">10+ Expert Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:block hidden"
          >
            {}
            <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
              {}
              <div className="relative w-full h-full">
                {}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20 rounded-3xl blur-2xl"></div>

                {}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <motion.img
                    src={heroIllustration}
                    alt="ClassPe Student Illustration"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                </div>

                {}
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </motion.div>

          {}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:hidden block mt-8"
          >
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {}
              <div className="relative w-full h-full">
                {}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20 rounded-2xl blur-xl"></div>

                {}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={heroIllustration}
                    alt="ClassPe Student Illustration"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />
    </section>
  )
}