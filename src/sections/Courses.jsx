import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Youtube, Calendar, Users, Clock } from "lucide-react"
import { Button } from "../components/Button"
import { trackYouTubeClick } from "../utils/analytics"

const LiveClassCard = ({ videoId, title, description, publishedAt, views, duration, delay = 0 }) => {
  const handleWatchClick = () => {
    trackYouTubeClick(videoId, 'courses_live_class')
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <div className="card-hover h-full bg-white border border-gray-100 hover:border-primary-200 overflow-hidden transition-all duration-300 rounded-xl">
        {}
        <div className="relative aspect-video bg-gray-900 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        {}
        <div className="p-6">
          {}
          <h3 className="text-lg md:text-xl font-poppins font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3">
            {title}
          </h3>

          {}
          <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
            {description}
          </p>

          {}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-inter">{publishedAt}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span className="font-inter">{views}</span>
            </div>
            {duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-inter">{duration}</span>
              </div>
            )}
          </div>

          {}
          <div className="flex items-center justify-between">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWatchClick}
              className="inline-flex items-center gap-2 text-sm font-poppins font-semibold text-primary hover:text-primary-600 transition-colors duration-300"
            >
              <Play className="w-4 h-4" />
              Watch Full Class
            </a>

            {}
            <span className="px-3 py-1 bg-red-600 text-white text-xs font-poppins font-bold rounded-full shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              LIVE CLASS
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Courses = () => {

  const liveClasses = [
    {
      videoId: "wZbMH9TPqtY",
      title: "ClassPe Live Session - Physics",
      description: "Interactive live class with expert teachers covering important physics concepts.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "-Mt8-9CYGnw",
      title: "ClassPe Live Session - Chemistry",
      description: "Comprehensive topic coverage with detailed explanations and problem solving.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "GJTNXTKbJdU",
      title: "ClassPe Live Session - Mathematics",
      description: "Expert-led session focusing on JEE advanced mathematics concepts.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "vryIHPf_EH4",
      title: "ClassPe Live Session - Biology",
      description: "In-depth analysis of NEET and JEE biology topics with visual aids.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "NMYUmt3bo5M",
      title: "ClassPe Live Session - Problem Solving",
      description: "Interactive learning session with real-time doubt clearing and Q&A.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
    {
      videoId: "jy7VR9WpuFI",
      title: "ClassPe Extended Session",
      description: "Extended live class covering multiple topics with detailed explanations.",
      publishedAt: "Recent",
      views: "Live",
      duration: "Live",
    },
  ]

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="courses"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 relative overflow-hidden"
    >
      {}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-red-50 text-red-600 font-poppins font-semibold text-sm rounded-full mb-4 flex items-center gap-2 w-fit mx-auto"
          >
            <Youtube className="w-4 h-4" />
            Latest Live Classes
          </motion.span>
          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Explore Our <span className="text-primary">Live Classes</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Watch our latest recorded live sessions and interactive classes.
            Learn from expert teachers anytime, anywhere.
          </p>
        </motion.div>

        {}
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600 font-inter">Loading latest classes...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {liveClasses.map((liveClass, index) => (
              <LiveClassCard key={liveClass.videoId} {...liveClass} delay={index * 0.1} />
            ))}
          </motion.div>
        )}

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 md:mt-10 text-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              trackYouTubeClick('channel', 'courses_section')
              window.open("https://www.youtube.com/@teamclasspe", "_blank")
            }}
            className="group shadow-primary-lg hover:shadow-primary-xl"
          >
            <Youtube className="mr-2 w-5 h-5" />
            Visit Our YouTube Channel
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}