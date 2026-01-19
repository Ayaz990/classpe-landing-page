import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { trackFAQInteraction } from "../utils/analytics"

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is this programme only for toppers?",
      answer: "No. It is for serious students at different starting levels. What matters most is consistency—our system is designed to improve performance step by step.",
    },
    {
      question: "Who should apply for JEE 2028 at ClassPe?",
      answer: "Students currently in Class 10 who are moving to Class 11 and want an offline, structured JEE 2028 preparation plan.",
    },
    {
      question: "Will JEE preparation affect Boards marks?",
      answer: "No—Boards are supported alongside JEE so school performance stays strong, especially during the Board-focused phase.",
    },
    {
      question: "How do you ensure students study regularly?",
      answer: "We track practice and progress through structured monitoring (including Dynamic Sheets), so effort becomes visible and consistent.",
    },
    {
      question: "Do parents get updates?",
      answer: "Yes. Parents are kept informed about progress, areas to improve, and what the student should focus on next.",
    },
    {
      question: "Is there support if a student also wants IISER?",
      answer: "Yes. Students considering IISER get additional Biology lectures, so they can keep the IISER/IAT pathway open along with JEE.",
    },
    {
      question: "Are scholarships available?",
      answer: "Yes. Scholarships are provided post enrolment based on merit, linked to performance and consistency.",
    },
    {
      question: "What is the admission process?",
      answer: "Enquiry → counselling call → academic fit check → batch allotment → onboarding. Simple and fast.",
    },
    {
      question: "Can we visit the centre before deciding?",
      answer: "Yes. We encourage a centre visit to see the classroom environment and discuss the plan in person.",
    },
    {
      question: "Will I get fee details before confirming admission?",
      answer: "Yes. Fee structure and payment plan are shared clearly during counselling before you confirm admission.",
    },
    {
      question: "What if my child is weak in a few basics in Physics/Maths?",
      answer: "That is common at the start of Class 11. We focus on building fundamentals early so the student can handle JEE-level questions confidently.",
    },
    {
      question: "What if we have more questions?",
      answer: "Book a counseling session by filling the form or call us to get answers in 10 mins",
    },
  ]

  const toggleAccordion = (index) => {
    const isOpening = openIndex !== index
    trackFAQInteraction(index, faqs[index].question, isOpening ? 'expand' : 'collapse')
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="section-padding bg-white relative overflow-hidden scroll-mt-20"
    >
      {}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -right-32 w-96 h-96 bg-primary-100/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -left-32 w-96 h-96 bg-secondary-100/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
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
          className="text-center mb-6 md:mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary font-poppins font-semibold text-sm rounded-full mb-4"
          >
            Have Questions?
          </motion.span>
          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We got the answers
          </p>
        </motion.div>

        {}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base md:text-lg font-poppins font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}