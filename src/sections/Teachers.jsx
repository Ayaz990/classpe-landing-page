import { motion } from "framer-motion"
import teacher1 from "../images/1.avif"
import teacher2 from "../images/2.avif"
import teacher3 from "../images/3.avif"
import teacher4 from "../images/4.avif"
import teacher5 from "../images/5.avif"

export const Teachers = () => {
  const teachers = [

    {
      image: teacher1,
      name: "Akash Maji",
      role: "Co-Founder | CEO",
      faculty: "Physics Faculty",
      experience: "8+ years' Exp",
      education: "BS-MS | IISER Pune",
      color: "primary",
      blueBadge: { exp: "8+ years' Exp", text: "Co-Founder | CEO" },
      yellowBadge: { exp: "8+ years' Exp", text: "Physics Faculty" },
    },
    {
      image: teacher2,
      name: "Roshni Das",
      role: "Co-Founder | COO",
      faculty: "Bio Faculty",
      experience: "7+ years' Exp",
      education: "BS-MS | IISER Pune",
      color: "secondary",
      blueBadge: { exp: "7+ years' Exp", text: "Co-Founder | COO" },
      yellowBadge: { exp: "7+ years' Exp", text: "Bio Faculty" },
    },
    {
      image: teacher3,
      name: "Rajat Patel",
      role: "Head of Chemistry Dept.",
      faculty: "Chem Faculty",
      experience: "8+ years' Exp",
      education: "BS-MS | IISER Pune",
      color: "primary",
      blueBadge: { exp: "8+ years' Exp", text: "Head of Chemistry Dept." },
      yellowBadge: { exp: "8+ years' Exp", text: "Chem Faculty" },
    },

    {
      image: teacher4,
      name: "Ritik Tiwari",
      role: "Head of Maths Dept.",
      faculty: "Maths Faculty",
      experience: "3+ years' Exp",
      education: "BTech | IIT Kanpur",
      color: "secondary",
      blueBadge: { exp: "3+ years' Exp", text: "Head of Maths Dept." },
      yellowBadge: { exp: "2+ years' Exp", text: "Maths Faculty" },
    },
    {
      image: teacher5,
      name: "Brajesh Mahato",
      role: "Maths Faculty",
      faculty: "Maths Faculty",
      experience: "2+ years' Exp",
      education: "BS-MS | IISER Pune",
      color: "primary",
      blueBadge: { exp: "3+ years' Exp", text: "Head of Maths Dept." },
      yellowBadge: { exp: "2+ years' Exp", text: "Maths Faculty" },
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section
      id="teachers"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 relative overflow-hidden"
    >
      {}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
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
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-poppins font-semibold text-sm rounded-full mb-4"
          >
            Our Elite Teachers
          </motion.span>
          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Meet Our <span className="text-primary">Expert Faculty</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Learn from the best educators with years of experience and proven
            track records from top institutions.
          </p>
        </motion.div>

        {}
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
              >
              <div className="card-hover h-full bg-white border border-gray-100 hover:border-primary-200 overflow-hidden transition-all duration-300 rounded-2xl">
                {}
                <div className="relative h-[420px] bg-gradient-to-br from-primary-50 via-primary-100/50 to-primary-50 overflow-hidden">
                  <motion.img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-contain object-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {}
                <div className="p-6 bg-white">

                  {}
                  <h3 className="text-h6 font-poppins font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {teacher.faculty}
                  </h3>

                  {}
                  <h4 className="text-h5 font-poppins font-bold text-gray-900 mb-3">
                    {teacher.name}
                  </h4>

                  {}
                  <p className="text-body-sm text-gray-600 font-inter font-medium">
                    {teacher.education}
                  </p>
                </div>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
