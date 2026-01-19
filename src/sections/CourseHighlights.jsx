import { motion } from "framer-motion"
import { Calendar, Clock, FlaskConical, BarChart3, BookOpen, FileText } from "lucide-react"

export const CourseHighlights = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "JEE 2028 Classroom",
      description: "2-year offline programme for Class 11–12 with a defined learning + testing roadmap, including an 18-month syllabus phase and a 6-month revision phase.",
      color: "primary",
    },
    {
      icon: Clock,
      title: "6-Day Routine",
      description: "Monday–Saturday, 3 hours/Day+ 30-min faculty-led doubt session.",
      color: "secondary",
    },
    {
      icon: FlaskConical,
      title: "IISER Option",
      description: "Students considering IISER are also accommodated: the program includes additional weekly Biology lectures and IAT-focused practice alongside the standard JEE preparation.",
      color: "primary",
    },
    {
      icon: BarChart3,
      title: "CBT Analytics",
      description: "Computer-based tests with performance breakdown (including time per question) + quarterly infographic-style reports with progress trends, consistency index, and action plan.",
      color: "secondary",
    },
    {
      icon: BookOpen,
      title: "JEE + Boards + IISER",
      description: "Dedicated Boards support (post-syllabus phase) with answer-writing practice + board mocks. 20+ JEE Main mocks + 20+ JEE Advanced mocks + 55 weekly/monthly/quarterly tests.",
      color: "primary",
    },
    {
      icon: FileText,
      title: "Study Material",
      description: "25 JEE modules (PCM) with 25,000+ practice questions + topic-wise examples.",
      color: "secondary",
    },
  ]

  const colorClasses = {
    primary: {
      bg: "bg-primary-50",
      icon: "text-primary",
      border: "border-primary-200",
      gradient: "from-primary-50 to-primary-100/50",
    },
    secondary: {
      bg: "bg-secondary-50",
      icon: "text-secondary-600",
      border: "border-secondary-200",
      gradient: "from-secondary-50 to-secondary-100/50",
    },
  }

  return (
    <section
      id="course-highlights"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/20 relative overflow-hidden scroll-mt-20"
    >
      {}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
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
            className="inline-block px-4 py-2 bg-primary-50 text-primary font-poppins font-semibold text-sm rounded-full mb-4"
          >
            Programme Details
          </motion.span>
          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Course <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A clear 2-year offline roadmap for Class 11–12, built for serious students who want
            personal attention and accountability
          </p>
        </motion.div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const colors = colorClasses[highlight.color]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className={`h-full bg-white border ${colors.border} rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300`}>
                  {}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.1 + 0.2,
                    }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <highlight.icon className={`w-7 h-7 ${colors.icon}`} />
                  </motion.div>

                  {}
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>

                  {}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>

                  {}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    className={`mt-5 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-primary-200 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-inter font-medium text-gray-700">
              Structured roadmap for JEE 2028 success
            </span>
            <div className="w-2 h-2 bg-secondary-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}