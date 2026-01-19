import { motion } from "framer-motion"
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react"

export const Students = () => {
  return (
    <section
      id="students"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 relative overflow-hidden flex items-center justify-center"
    >
      {}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 10,
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
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary-lg">
              <Users className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-primary text-white font-poppins font-bold text-sm rounded-full mb-6"
          >
            Coming Soon
          </motion.span>

          {}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-h1 md:text-5xl lg:text-6xl font-poppins font-extrabold text-gray-900 mb-6"
          >
            For <span className="text-primary">Students</span>
          </motion.h1>

          {}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We're building something amazing for students! This section will include
            course catalogs, student dashboards, learning resources, and much more.
            Stay tuned!
          </motion.p>

          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { icon: BookOpen, label: "Courses" },
              { icon: GraduationCap, label: "Learning" },
              { icon: TrendingUp, label: "Progress" },
              { icon: Users, label: "Community" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-6 bg-white rounded-xl shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-body-sm font-poppins font-semibold text-gray-700">
                    {item.label}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
