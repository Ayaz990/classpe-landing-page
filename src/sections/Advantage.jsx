import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export const Advantage = () => {
  const comparisonData = [
    {
      category: "Batch Size",
      generic: "60+ students / batch",
      classpe: "Apex: 20 students\nElite-Nine: 9 students",
    },
    {
      category: "Doubt Access",
      generic: "Doubts wait and Confusion stays",
      classpe: "Doubts cleared fast it's built into the system",
    },
    {
      category: "Backlog Risk",
      generic: "Backlog grows quietly then progress stalls",
      classpe: "Backlog is caught early, before it becomes damage.",
    },
    {
      category: "Accountability",
      generic: "Homework is \"given\", not ensured",
      classpe: "Dynamic Sheets: track practice, consistency is enforced",
    },
    {
      category: "Personal Attention",
      generic: "You're one of many.",
      classpe: "Teachers know you and your strengths personally",
    },
    {
      category: "Test + Review System",
      generic: "Old pen paper Tests",
      classpe: "Computer based Tests are strategic and feedback is data based",
    },
    {
      category: "Outcome Predictability",
      generic: "Progress is luck-based",
      classpe: "Progress is built into the system",
    },
  ]

  return (
    <section
      id="advantage"
      className="section-padding bg-white relative overflow-hidden scroll-mt-20"
    >
      {}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-100/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary-100/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
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
            The Difference
          </motion.span>
          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            The <span className="text-primary">ClassPe</span> Advantage
          </h2>
          <p className="text-body-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Here is what ClassPe does differently than old-school institutes to prevent backlogs,
            improve performance consistently, and increase your chances of success in the tough JEE race
          </p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {}
          <div className="hidden md:grid md:grid-cols-3 gap-4 mb-4">
            <div className="col-span-1"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-100 rounded-2xl p-4 text-center"
            >
              <h3 className="text-lg font-poppins font-bold text-gray-700">Generic Coachings</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-primary to-primary-400 rounded-2xl p-4 text-center shadow-lg"
            >
              <h3 className="text-lg font-poppins font-bold text-white">ClassPe</h3>
            </motion.div>
          </div>

          {}
          <div className="space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {}
                <div className="md:hidden p-6 space-y-4">
                  <h4 className="text-lg font-poppins font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                    {row.category}
                  </h4>

                  {}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Generic Coachings
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {row.generic}
                        </p>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-poppins font-semibold text-primary uppercase tracking-wide mb-1">
                          ClassPe
                        </p>
                        <p className="text-sm text-gray-900 font-medium leading-relaxed whitespace-pre-line">
                          {row.classpe}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {}
                <div className="hidden md:grid md:grid-cols-3 gap-4 p-6">
                  {}
                  <div className="flex items-center">
                    <h4 className="text-base font-poppins font-bold text-gray-900">
                      {row.category}
                    </h4>
                  </div>

                  {}
                  <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {row.generic}
                    </p>
                  </div>

                  {}
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-4 flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-gray-900 font-medium leading-relaxed whitespace-pre-line">
                      {row.classpe}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-inter font-medium text-gray-700">
              Progress is built into the system
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}