import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import image18 from "../images/18.avif"
import image19 from "../images/19.avif"
import image20 from "../images/20.avif"
import image21 from "../images/21.avif"
import image22 from "../images/22.avif"
import image23 from "../images/23.avif"

export const EmpoweringTransformations = () => {
  const transformations = [
    { id: 1, image: image18 },
    { id: 2, image: image19 },
    { id: 3, image: image20 },
    { id: 4, image: image21 },
    { id: 5, image: image22 },
    { id: 6, image: image23 },
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
          className="text-center mb-6 md:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary font-poppins font-semibold text-sm rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Success Stories</span>
          </motion.div>

          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Empowering <span className="text-primary">Transformations</span>
          </h2>

          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Witness the incredible journeys of our students who have achieved remarkable success with ClassPe's personalized guidance
          </p>
        </motion.div>

        {}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {transformations.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {}
                <img
                  src={item.image}
                  alt={`Success Story ${item.id}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
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
              Inspiring success stories from ClassPe students
            </span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}