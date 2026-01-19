import { motion } from "framer-motion"
import { Award, Star } from "lucide-react"
import teacher1 from "../images/1.avif"
import teacher2 from "../images/2.avif"
import teacher3 from "../images/3.avif"
import teacher4 from "../images/4.avif"
import teacher5 from "../images/5.avif"

export const EliteTeachers = () => {
  const teachers = [
    { id: 1, image: teacher1 },
    { id: 2, image: teacher2 },
    { id: 3, image: teacher3 },
    { id: 4, image: teacher4 },
    { id: 5, image: teacher5 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="elite-teachers"
      className="section-padding bg-gradient-to-br from-white via-primary-50/20 to-white relative overflow-hidden scroll-mt-20"
    >
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
          className="text-center mb-6 md:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary font-poppins font-semibold text-sm rounded-full mb-4"
          >
            <Award className="w-4 h-4" />
            <span>Our Faculty</span>
          </motion.div>

          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Learn from <span className="text-primary">Elite Teachers</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced educators are dedicated to helping you achieve your academic goals
          </p>
        </motion.div>

        {}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={teacher.image}
                    alt="Elite Teacher"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                  />

                  {}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-body font-inter">
              Handpicked educators with proven track records
            </span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}