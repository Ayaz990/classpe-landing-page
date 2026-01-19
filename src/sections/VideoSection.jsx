import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Video } from "lucide-react"
import videoFile from "../video/Failure in JEE _ Harsh Reality of Big JEE Coachings _ ClassPe is the solution.mp4"
import { trackVideoPlay, trackPhoneClick, trackCTAClick } from "../utils/analytics"

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    trackVideoPlay('JEE Failure - ClassPe Solution', 'video_section')
    setIsPlaying(true)
  }

  const handleCallClick = () => {
    trackCTAClick('call_now_video', 'video_section')
    trackPhoneClick('+919960192594', 'video_section')
  }

  return (
    <section className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-white relative overflow-hidden">
      {}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary font-poppins font-semibold text-sm rounded-full mb-4"
          >
            <Video className="w-4 h-4" />
            <span>Watch Our Story</span>
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 font-poppins font-bold text-gray-900 px-4 leading-tight break-words">
            Failure in JEE | Harsh Reality of Big JEE Coachings | <span className="text-primary">ClassPe is the solution</span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 break-words">
            Watch how ClassPe provides the personalized solution for JEE aspirants
          </p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-primary-600 to-primary">
            {}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-600/90 to-gunmetal/90 flex items-center justify-center z-10 cursor-pointer"
                onClick={handlePlay}
              >
                <div className="text-center px-4 md:px-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 md:mb-3 font-poppins max-w-3xl mx-auto leading-tight break-words">
                    Failure in JEE | Harsh Reality of Big JEE Coachings
                  </h3>
                  <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 font-inter font-semibold break-words">
                    ClassPe is the solution
                  </p>
                  <div className="mt-4 md:mt-6 inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                    <Video className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <span className="text-sm md:text-base text-white font-semibold">Watch Now</span>
                  </div>
                </div>
              </div>
            )}

            {}
            <video
              controls
              className="w-full aspect-video relative z-0"
              preload="metadata"
              onPlay={handlePlay}
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/20 pointer-events-none z-20"></div>
          </div>

          {}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 md:mt-6 text-center px-4"
          >
            <div className="inline-flex items-center gap-2 text-gray-600 flex-wrap justify-center">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-inter">
                Learn why ClassPe is the solution for JEE aspirants
              </span>
            </div>
          </motion.div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 md:mt-12 text-center px-4"
        >
          <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 max-w-2xl mx-auto">
            Ready to experience personalized learning with elite IIT & IISER faculty?
          </p>
          <a
            href="tel:+919960192594"
            onClick={handleCallClick}
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-semibold text-sm md:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Call Now to Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}