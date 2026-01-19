import { motion } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CardStack } from "../components/ui/card-stack"
import { cn } from "../lib/utils"

// Highlight component for emphasizing parts of testimonials
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-primary/10 text-primary px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  )
}

export const Testimonials = () => {
  const cardStackRef = useRef(null)

  const handlePrev = () => {
    if (cardStackRef.current) {
      cardStackRef.current.prev()
    }
  }

  const handleNext = () => {
    if (cardStackRef.current) {
      cardStackRef.current.next()
    }
  }
  const testimonials = [
    {
      id: 0,
      name: "Prajakta Deshpande",
      designation: "Parent of JEE Aspirant",
      content: (
        <p className="text-sm md:text-base">
          My son was studying but not getting marks. After joining ClassPe, they started{" "}
          <Highlight>tracking practice and tests properly</Highlight>. Now we can see real{" "}
          <Highlight>improvement in his performance and confidence</Highlight>.
        </p>
      ),
    },
    {
      id: 1,
      name: "Neha Kulkarni",
      designation: "Parent of CBSE Student",
      content: (
        <p className="text-sm md:text-base">
          Biggest benefit is <Highlight>small batch</Highlight>. Teacher actually knows my child and tells what to do next week. In big classes no one cares like this. The{" "}
          <Highlight>personalized attention is amazing</Highlight>.
        </p>
      ),
    },
    {
      id: 2,
      name: "Arjun Mehta",
      designation: "JEE 2025 Aspirant",
      content: (
        <p className="text-sm md:text-base">
          Earlier I was studying randomly. Here I got a <Highlight>proper routine with tests</Highlight>. Now I know what to do daily and my preparation is{" "}
          <Highlight>much more structured and effective</Highlight>.
        </p>
      ),
    },
    {
      id: 3,
      name: "Aditi Joshi",
      designation: "Parent of Class 11 Student",
      content: (
        <p className="text-sm md:text-base">
          <Highlight>Doubt solving is excellent</Highlight>. Earlier doubts were pending for many days. Here they clear it in class and also in doubt sessions. Teachers are{" "}
          <Highlight>very supportive and patient</Highlight>.
        </p>
      ),
    },
    {
      id: 4,
      name: "Rohan Sharma",
      designation: "JEE 2026 Aspirant",
      content: (
        <p className="text-sm md:text-base">
          Teachers are very supportive. They don't only teach, they also{" "}
          <Highlight>guide how to study and how to manage time</Highlight>. The{" "}
          <Highlight>mentorship has been invaluable</Highlight> for my JEE preparation.
        </p>
      ),
    },
  ];

  return (
    <section className="relative section-padding bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-poppins font-semibold text-sm rounded-full mb-4"
          >
            Testimonials
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gunmetal mb-4 font-poppins">
            What Parents and{" "}
            <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter mb-8">
            Hear from our community about their experience with ClassPe
          </p>
        </motion.div>

        {}
        <div className="flex flex-col items-center justify-center w-full space-y-6">
          <CardStack ref={cardStackRef} items={testimonials} />

          {}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-gray-200 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}